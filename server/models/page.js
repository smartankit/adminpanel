var mongoose = require('mongoose');
var pageSchema = new mongoose.Schema({
    pagename: String,
    desc: String
});
var Page = mongoose.model('staticpage', pageSchema);
exports["default"] = Page;
