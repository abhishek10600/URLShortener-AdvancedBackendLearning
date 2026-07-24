import fs from "node:fs";
import path from "node:path";

const logFile = process.argv[2];

if (!logFile) {
  console.error("Usage: npm run analyze:nginx -- <log-file>");
  process.exit(1);
}

const filePath = path.resolve(logFile);

console.log("=========================================");
console.log("NGINX LOG ANALYZER");
console.log("=========================================");
console.log(`Resolved Path : ${filePath}`);
console.log("");

if (!fs.existsSync(filePath)) {
  console.error(`File not found: ${filePath}`);
  process.exit(1);
}

const contents = fs.readFileSync(filePath, "utf8");

const lines = contents.split(/\r?\n/);

console.log(`Total Lines Read : ${lines.length}`);
console.log("");

console.log("First 5 Lines:");
console.log("-----------------------------------------");

for (let i = 0; i < Math.min(5, lines.length); i++) {
  console.log(lines[i]);
}

console.log("-----------------------------------------");
console.log("");

const counts = new Map<string, number>();

let totalRequests = 0;
let upstreamLines = 0;
let unmatchedUpstreamLines = 0;

for (const line of lines) {
  if (!line.trim()) {
    continue;
  }

  if (line.includes("upstream=")) {
    upstreamLines++;

    const match = line.match(/upstream=([0-9.]+:\d+)/);

    if (!match) {
      unmatchedUpstreamLines++;

      console.log("Regex failed for line:");
      console.log(line);
      console.log("");
      continue;
    }

    const upstream = match[1];

    counts.set(upstream, (counts.get(upstream) ?? 0) + 1);

    totalRequests++;
  }
}

console.log("=========================================");
console.log("DEBUG");
console.log("=========================================");
console.log(`Lines containing 'upstream=' : ${upstreamLines}`);
console.log(`Regex failures              : ${unmatchedUpstreamLines}`);
console.log("");

console.log("=========================================");
console.log("NGINX REQUEST DISTRIBUTION");
console.log("=========================================");
console.log("");

if (totalRequests === 0) {
  console.log("No upstream requests found.");
  process.exit(0);
}

const sorted = [...counts.entries()].sort((a, b) => b[1] - a[1]);

for (const [backend, count] of sorted) {
  const percent = ((count / totalRequests) * 100).toFixed(2);

  console.log(`${backend}`);
  console.log(`  Requests : ${count}`);
  console.log(`  Share    : ${percent}%`);
  console.log("");
}

console.log("-----------------------------------------");
console.log(`Total Requests : ${totalRequests}`);
console.log("-----------------------------------------");

const values = sorted.map(([, count]) => count);

const max = Math.max(...values);
const min = Math.min(...values);

const imbalance = (((max - min) / totalRequests) * 100).toFixed(2);

console.log("");
console.log(`Distribution Difference : ${imbalance}%`);

if (Number(imbalance) < 5) {
  console.log("Status: Excellent distribution");
} else if (Number(imbalance) < 10) {
  console.log("Status: Acceptable distribution");
} else {
  console.log("Status: Distribution appears imbalanced");
}
