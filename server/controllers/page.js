var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var page_1 = require('../models/page');
var base_1 = require('./base');
var PageCtrl = (function (_super) {
    __extends(PageCtrl, _super);
    function PageCtrl() {
        _super.apply(this, arguments);
        this.model = page_1["default"];
    }
    return PageCtrl;
})(base_1["default"]);
exports["default"] = PageCtrl;
