import redis from "redis";
import { promisify } from "util";
import { REDIS_URL, REDIS_PORT, REDIS_PASS } from "../config";

const redisClient = redis.createClient(REDIS_PORT, REDIS_URL);
redisClient.auth(REDIS_PASS);
let isConnected: boolean;

redisClient.on("connect", () => {
  isConnected = true;
  console.log("\x1b[36m[redis] connect to server\x1b[0m");
});

redisClient.on("error", err => {
  isConnected = false;
  console.log(`\x1b[31m[redis] Error ${err}\x1b[0m`);
});

export function set(key: string, value: string): boolean {
  return redisClient.set(key, value);
}

export function get(key: string): Promise<string> {
  const getAsync = promisify(redisClient.get).bind(redisClient);
  return getAsync(key);
}
