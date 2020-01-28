"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var characterRoutes_1 = require("../routes/characterRoutes");
var comicsRoutes_1 = require("../routes/comicsRoutes");
var router = express_1.Router();
router.get("/characters", function (req, res) {
    characterRoutes_1.getCharacters(req, res);
});
router.get("/comics", function (req, res) {
    comicsRoutes_1.getComics(req, res);
});
exports.default = router;
