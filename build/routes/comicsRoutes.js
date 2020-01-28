"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var config_1 = require("../config");
function getComics(req, res) {
    axios_1.default
        .get(config_1.BASE_URL + "/v1/public/comics", {
        params: config_1.globalParams
    })
        .then(function (resp) {
        res.json(resp.data.data.results);
    })
        .catch(function (error) {
        console.log(error);
        res.json(error);
    });
}
exports.getComics = getComics;
