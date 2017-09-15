var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var modulelist_1 = require('../models/modulelist');
var base_1 = require('./base');
var ModulelistCtrl = (function (_super) {
    __extends(ModulelistCtrl, _super);
    function ModulelistCtrl() {
        _super.apply(this, arguments);
        this.model = modulelist_1["default"];
    }
    return ModulelistCtrl;
})(base_1["default"]);
exports["default"] = ModulelistCtrl;
