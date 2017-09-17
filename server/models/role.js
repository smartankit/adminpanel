"use strict";
exports.__esModule = true;
var mongoose = require("mongoose");
var rolSchema = new mongoose.Schema({
    name: String
});
var Role = mongoose.model('rolelist', rolSchema);
exports["default"] = Role;
