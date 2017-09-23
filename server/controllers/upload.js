"use strict";
exports.__esModule = true;
var multer = require('multer');
var DIR = './uploads/';
var upload = multer({ dest: DIR }).single('photo');
var path = require('path');
var UploadCtrl = /** @class */ (function () {
    function UploadCtrl() {
        this.upload = function (req, res, next) {
            var path = '';
            upload(req, res, function (err) {
                if (err) {
                    return console.error(err);
                }
                console.log(req.file);
                res.sendStatus(200);
            });
        };
    }
    return UploadCtrl;
}());
exports["default"] = UploadCtrl;
