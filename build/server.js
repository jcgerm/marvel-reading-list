"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var router_1 = __importDefault(require("./router"));
var app = express_1.default();
var port = parseInt(process.env.PORT || "5000");
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({
    extended: true
}));
app.use("/api/marvel", router_1.default);
app.listen(port, function () { return console.log("Listening on port " + port); });
