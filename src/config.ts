import * as CryptoJS from "crypto-js";

export const PUBLIC_KEY = "ff36467c0f5a23827edef245387c06b4";
export const PRIVATE_KEY = "27f696159ce8fd272ed8271cf7efbd6a7e81871a";
export const BASE_URL = "https://gateway.marvel.com";
export const REDIS_URL = "redis-17999.c84.us-east-1-2.ec2.cloud.redislabs.com";
export const REDIS_PORT = 17999;
export const REDIS_PASS = "n1YSCC4rJ91p6dlSwN5xxaxbYUdxrk2B";

export const IMAGE_NOT_AVAILABLE =
  "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available";

const ts: string = Date.now().toString();
const stringToHash: string = ts + PRIVATE_KEY + PUBLIC_KEY;
const hash: string = CryptoJS.MD5(stringToHash).toString(CryptoJS.enc.Hex);

export const globalParams = {
  apikey: PUBLIC_KEY,
  limit: "10",
  ts: ts,
  hash: hash
};
