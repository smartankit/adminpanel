var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var modulerole_1 = require('../models/modulerole');
var base_1 = require('./base');
var ModuleroleCtrl = (function (_super) {
    __extends(ModuleroleCtrl, _super);
    function ModuleroleCtrl() {
        _super.apply(this, arguments);
        this.model = modulerole_1["default"];
    }
    return ModuleroleCtrl;
})(base_1["default"]);
exports["default"] = ModuleroleCtrl;
