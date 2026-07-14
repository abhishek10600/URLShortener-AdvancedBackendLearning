import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../generated/prisma/client.js";
import { env } from "../config/env.config.js";
import { Pool } from "pg";

const connectionString = `${env?.DB_URL}`;

const pool = new Pool({
  connectionString,
  max: 20,
  idleTimeoutMillis: 10000,
  connectionTimeoutMillis: 1000
})

const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter }); // this is creating the connection pool behind the scenes

export { prisma };
