"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var CryptoJS = __importStar(require("crypto-js"));
exports.PUBLIC_KEY = "ff36467c0f5a23827edef245387c06b4";
exports.PRIVATE_KEY = "27f696159ce8fd272ed8271cf7efbd6a7e81871a";
exports.BASE_URL = "https://gateway.marvel.com";
var ts = Date.now().toString();
var stringToHash = ts + exports.PRIVATE_KEY + exports.PUBLIC_KEY;
var hash = CryptoJS.MD5(stringToHash).toString(CryptoJS.enc.Hex);
exports.globalParams = {
    apikey: exports.PUBLIC_KEY,
    limit: "10",
    ts: ts,
    hash: hash
};
