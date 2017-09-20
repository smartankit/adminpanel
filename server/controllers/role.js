var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var role_1 = require('../models/role');
var base_1 = require('./base');
var CatCtrl = (function (_super) {
    __extends(CatCtrl, _super);
    function CatCtrl() {
        _super.apply(this, arguments);
        this.model = role_1["default"];
    }
    return CatCtrl;
})(base_1["default"]);
exports["default"] = CatCtrl;
