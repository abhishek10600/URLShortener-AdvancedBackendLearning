import fs from "node:fs";
import path from "node:path";

const logFiles = process.argv.slice(2);

if (logFiles.length === 0) {
  console.error(
    "Usage: npm run analyze:worker -- <worker-log> [worker-log...]",
  );
  process.exit(1);
}

console.log("=========================================");
console.log("WORKER LOG ANALYZER");
console.log("=========================================");
console.log("");

const jobCounts = new Map<string, number>();

let totalJobs = 0;
let totalFiles = 0;
let totalLines = 0;
let completedEvents = 0;

for (const logFile of logFiles) {
  const filePath = path.resolve(logFile);

  console.log(`Reading: ${filePath}`);

  if (!fs.existsSync(filePath)) {
    console.error(`File not found: ${filePath}`);
    process.exit(1);
  }

  totalFiles++;

  const contents = fs.readFileSync(filePath, "utf8");

  const lines = contents.split(/\r?\n/);

  totalLines += lines.length;

  let currentWorker: string | null = null;

  for (const line of lines) {
    const trimmed = line.trim();

    if (!trimmed) {
      continue;
    }

    // Detect worker instance from startup logs
    //
    // workerInstance: "backend-worker-2"
    //
    const workerMatch = trimmed.match(
      /^workerInstance:\s*"([^"]+)"$/,
    );

    if (workerMatch) {
      currentWorker = workerMatch[1];
      continue;
    }

    // Detect completed jobs
    //
    // event: "ANALYTICS_JOB_COMPLETED"
    //
    if (
      trimmed === 'event: "ANALYTICS_JOB_COMPLETED"' ||
      trimmed === 'event: "CACHE_WARMER_JOB_COMPLETED"'
    ) {
      completedEvents++;

      const worker = currentWorker ?? "UNKNOWN";

      jobCounts.set(worker, (jobCounts.get(worker) ?? 0) + 1);

      totalJobs++;
    }
  }
}

console.log("");
console.log("=========================================");
console.log("SUMMARY");
console.log("=========================================");
console.log(`Files Read      : ${totalFiles}`);
console.log(`Lines Read      : ${totalLines}`);
console.log(`Completed Jobs  : ${completedEvents}`);
console.log("");

if (totalJobs === 0) {
  console.log("No completed jobs found.");
  process.exit(0);
}

console.log("=========================================");
console.log("JOB DISTRIBUTION");
console.log("=========================================");
console.log("");

const sorted = [...jobCounts.entries()].sort(
  (a, b) => b[1] - a[1],
);

for (const [worker, jobs] of sorted) {
  const percentage = ((jobs / totalJobs) * 100).toFixed(2);

  console.log(worker);
  console.log(`  Jobs  : ${jobs}`);
  console.log(`  Share : ${percentage}%`);
  console.log("");
}

const values = [...jobCounts.values()];

const max = Math.max(...values);
const min = Math.min(...values);

const imbalance = (((max - min) / totalJobs) * 100).toFixed(2);

console.log("-----------------------------------------");
console.log(`Total Jobs : ${totalJobs}`);
console.log("-----------------------------------------");

console.log("");
console.log(`Distribution Difference : ${imbalance}%`);

if (Number(imbalance) < 5) {
  console.log("Status: Excellent distribution");
} else if (Number(imbalance) < 10) {
  console.log("Status: Acceptable distribution");
} else {
  console.log("Status: Distribution appears imbalanced");
}

console.log("");
console.log("=========================================");
console.log("OBSERVATIONS");
console.log("=========================================");

if (jobCounts.size === 1) {
  console.log("⚠ Only one worker processed jobs.");
} else {
  console.log("✓ Multiple workers processed jobs.");
}

const idleWorkers = [...jobCounts.entries()]
  .filter(([, jobs]) => jobs === 0)
  .map(([worker]) => worker);

if (idleWorkers.length === 0) {
  console.log("✓ No worker starvation detected.");
}

if (Number(imbalance) < 5) {
  console.log("✓ BullMQ competing consumers appear balanced.");
} else {
  console.log("⚠ Distribution is noticeably uneven.");
}
