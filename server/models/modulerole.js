"use strict";
exports.__esModule = true;
var mongoose = require("mongoose");
var moduleroleSchema = new mongoose.Schema({
    usertype: String,
    namemodule: []
});
var Modulename = mongoose.model('Modulerole', moduleroleSchema);
exports["default"] = Modulename;
