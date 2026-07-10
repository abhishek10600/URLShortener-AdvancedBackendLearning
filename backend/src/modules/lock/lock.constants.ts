import { env } from "../../config/env.config.js"

export const LOCK_PREFIX = "lock:url"

export const LOCK_TTL_SECONDS = Number(env.LOCK_TTL_SECONDS)
