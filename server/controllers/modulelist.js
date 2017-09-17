"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var modulelist_1 = require("../models/modulelist");
var base_1 = require("./base");
var ModulelistCtrl = /** @class */ (function (_super) {
    __extends(ModulelistCtrl, _super);
    function ModulelistCtrl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.model = modulelist_1["default"];
        return _this;
    }
    return ModulelistCtrl;
}(base_1["default"]));
exports["default"] = ModulelistCtrl;
