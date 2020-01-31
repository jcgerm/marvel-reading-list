"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var body_parser_1 = __importDefault(require("body-parser"));
var router_1 = __importDefault(require("./router"));
var app = express_1.default();
var port = parseInt(process.env.PORT || "5000");
app.use(express_1.default.static(path_1.default.join(__dirname, "client/build")));
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({
    extended: true
}));
app.use("/api/marvel", router_1.default);
// Handles any requests that don't match the ones above
app.get("*", function (req, res) {
    res.sendFile(path_1.default.join(__dirname + "/client/build/index.html"));
});
app.listen(port, function () { return console.log("Listening on port " + port); });
