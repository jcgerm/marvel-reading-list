"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var redis_1 = __importDefault(require("redis"));
var util_1 = require("util");
var config_1 = require("../config");
var redisClient = redis_1.default.createClient(config_1.REDIS_PORT, config_1.REDIS_URL);
redisClient.auth(config_1.REDIS_PASS);
var isConnected;
redisClient.on("connect", function () {
    isConnected = true;
    console.log("\x1b[36m[redis] connect to server\x1b[0m");
});
redisClient.on("error", function (err) {
    isConnected = false;
    console.log("\u001B[31m[redis] Error " + err + "\u001B[0m");
});
function set(key, value) {
    return redisClient.set(key, value);
}
exports.set = set;
function get(key) {
    var getAsync = util_1.promisify(redisClient.get).bind(redisClient);
    return getAsync(key);
}
exports.get = get;
