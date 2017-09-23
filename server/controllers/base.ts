let multer = require('multer');
var DIR = './client/assets/uploads/';

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, DIR);
  },
  filename: function (req, file, cb) {
    var originalname = file.originalname;
    var extension = originalname.split(".");
    var filename = Date.now() + '.' + extension[extension.length-1];
    cb(null, filename);
  }
});
let upload = multer({ dest: DIR,
  storage: storage
}).single('photo');
let path = require('path');
abstract class BaseCtrl {

  abstract model: any;








  uploadprofile = (req, res, next) => {
    
    const obj = new this.model(req.headers);
  
    var path = '';
    upload(req, res, function (err) {
      if (err) { return console.error(err); }
      if (req.file) {
        obj.filename=req.file.filename
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


   
  }

  // Get all
  getAll = (req, res) => {
    this.model.find({}, (err, docs) => {
      if (err) { return console.error(err); }
      res.json(docs);
    });
  }

  // Count all
  count = (req, res) => {
    this.model.count((err, count) => {
      if (err) { return console.error(err); }
      res.json(count);
    });
  }
  // countmodule module for admin


  countmodule = (req, res) => {
    this.model.find({ usertype: req.params.id }).count((err, count) => {
      if (err) { return console.error(err); }
      res.json(count);
    });
  }

  // Insert
  insert = (req, res) => {
    const obj = new this.model(req.body);
    obj.save((err, item) => {
      // 11000 is the code for duplicate key error
      if (err && err.code === 11000) {
        res.sendStatus(400);
      }
      if (err) {
        return console.error(err);
      }
      res.status(200).json(item);
    });
  }

  // Get by id
  get = (req, res) => {
    this.model.findOne({ _id: req.params.id }, (err, obj) => {
      if (err) { return console.error(err); }
      res.json(obj);
    });
  }
  getbyName = (req, res) => {
    this.model.findOne({ link: req.params.id }, (err, obj) => {
      if (err) { return console.error(err); }
      res.json(obj);
    });
  }

  getmodule = (req, res) => {
    //console.log(req.params);
    this.model.findOne({ usertype: req.params.id }, (err, obj) => {
      if (err) { return console.error(err); }
      res.json(obj);
    });
  }
  getallmodule = (req, res) => {
    var arr = req.params.id.split(',');
    this.model.find({ modulename: { $in: arr } }, (err, docs) => {
      if (err) { return console.error(err); }
      res.json(docs);
    });
  }

  getcheckmodule = (req, res) => {
    console.log(req.params);
    // req.headers.userrole
    var arr = req.params.id.split(',');
    this.model.find({ $and: [{ namemodule: { $in: arr } }, { usertype: req.headers.userrole }] }).count((err, count) => {
      if (err) { return console.error(err); }
      res.json(count);
    });
  }


  // Update by id
  update = (req, res) => {
    this.model.findOneAndUpdate({ _id: req.params.id }, req.body, (err) => {
      if (err) { return console.error(err); }
      res.sendStatus(200);
    });
  }

  // Update by id
  updatemodule = (req, res) => {
    console.log(req.params);
    this.model.findOneAndUpdate({ usertype: req.params.id }, req.body, (err) => {
      if (err) { return console.error(err); }
      res.sendStatus(200);
    });
  }
  // Delete by id
  delete = (req, res) => {
    this.model.findOneAndRemove({ _id: req.params.id }, (err) => {
      if (err) { return console.error(err); }
      res.sendStatus(200);
    });
  }
}

export default BaseCtrl;
