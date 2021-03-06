var multer = require('multer');
var DIR = './dist/public/assets/uploads/';
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, DIR);
    },
    filename: function (req, file, cb) {
        var originalname = file.originalname;
        var extension = originalname.split(".");
        var filename = Date.now() + '.' + extension[extension.length - 1];
        cb(null, filename);
    }
});
var upload = multer({ dest: DIR,
    storage: storage
}).single('photo');
var path = require('path');
var abstract;
var BaseCtrl = (function () {
    function BaseCtrl() {
        var _this = this;
        this.abstract = model;
        this.uploadprofile = function (req, res, next) {
            var obj = new _this.model(req.headers);
            var path = '';
            upload(req, res, function (err) {
                if (err) {
                    return console.error(err);
                }
                if (req.file) {
                    obj.filename = req.file.filename;
                }
                obj.save(function (err, item) {
                    // 11000 is the code for duplicate key error
                    if (err && err.code === 11000) {
                        res.sendStatus(400);
                    }
                    if (err) {
                        return console.error(err);
                    }
                    res.status(200).json(item);
                });
            });
        };
        // Get all
        this.getAll = function (req, res) {
            _this.model.find({}, function (err, docs) {
                if (err) {
                    return console.error(err);
                }
                res.json(docs);
            });
        };
        // Get all
        this.getAllUser = function (req, res) {
            var page = req.params.page;
            var perPage = 10, pageno = Math.max(0, page);
            _this.model.find({}, function (err, docs) {
                if (err) {
                    return console.error(err);
                }
                res.json(docs);
            }).limit(perPage).skip(perPage * pageno);
        };
        // Count all
        this.count = function (req, res) {
            _this.model.count(function (err, count) {
                if (err) {
                    return console.error(err);
                }
                res.json(count);
            });
        };
        // countmodule module for admin
        this.countmodule = function (req, res) {
            _this.model.find({ usertype: req.params.id }).count(function (err, count) {
                if (err) {
                    return console.error(err);
                }
                res.json(count);
            });
        };
        // Insert
        this.insert = function (req, res) {
            var obj = new _this.model(req.body);
            obj.save(function (err, item) {
                // 11000 is the code for duplicate key error
                if (err && err.code === 11000) {
                    res.sendStatus(400);
                }
                if (err) {
                    return console.error(err);
                }
                res.status(200).json(item);
            });
        };
        // Get by id
        this.get = function (req, res) {
            _this.model.findOne({ _id: req.params.id }, function (err, obj) {
                if (err) {
                    return console.error(err);
                }
                res.json(obj);
            });
        };
        this.getbyName = function (req, res) {
            _this.model.findOne({ link: req.params.id }, function (err, obj) {
                if (err) {
                    return console.error(err);
                }
                res.json(obj);
            });
        };
        this.getmodule = function (req, res) {
            //console.log(req.params);
            _this.model.findOne({ usertype: req.params.id }, function (err, obj) {
                if (err) {
                    return console.error(err);
                }
                res.json(obj);
            });
        };
        this.getallmodule = function (req, res) {
            var arr = req.params.id.split(',');
            _this.model.find({ modulename: { $in: arr } }, function (err, docs) {
                if (err) {
                    return console.error(err);
                }
                res.json(docs);
            });
        };
        this.getcheckmodule = function (req, res) {
            console.log(req.params);
            // req.headers.userrole
            var arr = req.params.id.split(',');
            _this.model.find({ $and: [{ namemodule: { $in: arr } }, { usertype: req.headers.userrole }] }).count(function (err, count) {
                if (err) {
                    return console.error(err);
                }
                res.json(count);
            });
        };
        // Update by id
        this.update = function (req, res) {
            _this.model.findOneAndUpdate({ _id: req.params.id }, req.body, function (err) {
                if (err) {
                    return console.error(err);
                }
                res.sendStatus(200);
            });
        };
        // Update by id
        this.updatemodule = function (req, res) {
            console.log(req.params);
            _this.model.findOneAndUpdate({ usertype: req.params.id }, req.body, function (err) {
                if (err) {
                    return console.error(err);
                }
                res.sendStatus(200);
            });
        };
        // Delete by id
        this.delete = function (req, res) {
            _this.model.findOneAndRemove({ _id: req.params.id }, function (err) {
                if (err) {
                    return console.error(err);
                }
                res.sendStatus(200);
            });
        };
    }
    return BaseCtrl;
})();
exports["default"] = BaseCtrl;
