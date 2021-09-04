"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateId = exports.generateRandomString = void 0;
var assoc_1 = require("../js/assoc");
var generateRandomString = function () {
    return Math.random().toString(36).substring(2, 15);
};
exports.generateRandomString = generateRandomString;
var generateId = function (obj) {
    var assignId = assoc_1.assoc('id', exports.generateRandomString());
    return assignId(obj);
};
exports.generateId = generateId;
