"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var cat_1 = require("../models/cat");
var base_1 = require("./base");
var CatCtrl = (function (_super) {
    __extends(CatCtrl, _super);
    function CatCtrl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.model = cat_1.default;
        return _this;
    }
    return CatCtrl;
}(base_1.default));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CatCtrl;
//# sourceMappingURL=cat.js.map