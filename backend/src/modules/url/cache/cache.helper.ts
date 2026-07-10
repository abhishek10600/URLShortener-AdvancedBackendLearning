import { env } from "../../../config/env.config.js";

export const calculateCacheTTL = (baseTTL: number, jitterPercent = Number(env.JITTER_PERCENT)) => {
  const maxJitter = Math.floor(baseTTL * jitterPercent)

  const jitter = Math.floor(Math.random() * (maxJitter * 2 + 1)) - maxJitter

  return Math.max(1, baseTTL + jitter)
}
