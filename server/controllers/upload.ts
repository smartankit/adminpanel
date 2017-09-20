var multer = require('multer');
var DIR = './uploads/';
var upload = multer({dest: DIR}).single('photo');
var path = require('path');



export default class UploadCtrl{
    upload =(req, res, next) => {
        var path = '';
        upload(req, res, function (err) {
            if (err) { return console.error(err); }
              console.log(req.file)

           
            res.sendStatus(200);
     });	 
    }
}




