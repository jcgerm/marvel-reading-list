import * as CryptoJS from "crypto-js";

export const PUBLIC_KEY: string = "ff36467c0f5a23827edef245387c06b4";
export const PRIVATE_KEY: string = "27f696159ce8fd272ed8271cf7efbd6a7e81871a";
export const BASE_URL: string = "https://gateway.marvel.com";
export const REDIS_URL: string =
  "redis-17999.c84.us-east-1-2.ec2.cloud.redislabs.com";
export const REDIS_PORT: number = 17999;
export const REDIS_PASS: string = "n1YSCC4rJ91p6dlSwN5xxaxbYUdxrk2B";

const ts: string = Date.now().toString();
const stringToHash: string = ts + PRIVATE_KEY + PUBLIC_KEY;
const hash: string = CryptoJS.MD5(stringToHash).toString(CryptoJS.enc.Hex);

export const globalParams = {
  apikey: PUBLIC_KEY,
  limit: "10",
  ts: ts,
  hash: hash
};
