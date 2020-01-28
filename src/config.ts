import * as CryptoJS from "crypto-js";

export const PUBLIC_KEY: String = "ff36467c0f5a23827edef245387c06b4";
export const PRIVATE_KEY: String = "27f696159ce8fd272ed8271cf7efbd6a7e81871a";
export const BASE_URL: String = "https://gateway.marvel.com";

const ts: string = Date.now().toString();
const stringToHash: string = ts + PRIVATE_KEY + PUBLIC_KEY;
const hash: string = CryptoJS.MD5(stringToHash).toString(CryptoJS.enc.Hex);

export const globalParams = {
  apikey: PUBLIC_KEY,
  limit: "10",
  ts: ts,
  hash: hash
};
