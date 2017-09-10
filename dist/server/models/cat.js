"use strict";
var mongoose = require("mongoose");
var catSchema = new mongoose.Schema({
    name: String,
    weight: Number,
    age: Number
});
var Cat = mongoose.model('Cat', catSchema);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Cat;
//# sourceMappingURL=cat.js.map