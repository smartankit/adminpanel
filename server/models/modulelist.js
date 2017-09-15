var mongoose = require('mongoose');
var modulelistSchema = new mongoose.Schema({
    modulename: String,
    link: String,
    alias: String
});
var Modulelist = mongoose.model('Modulelist', modulelistSchema);
exports["default"] = Modulelist;
