import { randomUUID } from "crypto";
import { LOCK_PREFIX, LOCK_TTL_SECONDS } from "./lock.constants.js";
import redis from "../../lib/redis.js";

export interface AquireLockResult {
  acquired: boolean;
  lockId: string | null
}

const RELEASE_LOCK_SCRIPT = `
  if redis.call("GET", KEYS[1]) == ARGV[1] then
      return redis.call("DEL", KEYS[1])
  end

  return 0
  `

export class LockService {
  constructor() { }

  private buildLockKey(key: string): string {
    return `${LOCK_PREFIX}:${key}`
  }

  async aquireLock(
    key: string,
    ttlSeconds: number = Number(LOCK_TTL_SECONDS)
  ): Promise<AquireLockResult> {
    const lockKey = this.buildLockKey(key)

    const lockId = randomUUID()

    const result = await redis.set(lockKey, lockId, "EX", ttlSeconds, "NX")

    if (result !== "OK") {
      return {
        acquired: false,
        lockId: null
      }
    }

    return {
      acquired: true,
      lockId
    }
  }

  async releaseLock(key: string, lockId: string): Promise<boolean> {
    const lockKey = this.buildLockKey(key)

    const result = await redis.eval(RELEASE_LOCK_SCRIPT, 1, lockKey, lockId)

    return result === 1
  }
}
