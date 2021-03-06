var express = require('express');
var cat_1 = require('./controllers/cat');
var user_1 = require('./controllers/user');
var role_1 = require('./controllers/role');
var modulelist_1 = require('./controllers/modulelist');
var modulerole_1 = require('./controllers/modulerole');
var page_1 = require('./controllers/page');
var upload_1 = require('./controllers/upload');
function setRoutes(app) {
    var router = express.Router();
    var catCtrl = new cat_1["default"]();
    var userCtrl = new user_1["default"]();
    var roleCtrl = new role_1["default"]();
    var modulelistCtrl = new modulelist_1["default"]();
    var moduleroleCtrl = new modulerole_1["default"]();
    var pageCtrl = new page_1["default"]();
    var uploadCtrl = new upload_1["default"]();
    // Cats
    router.route('/cats').get(catCtrl.getAll);
    router.route('/cats/count').get(catCtrl.count);
    router.route('/cat').post(catCtrl.insert);
    router.route('/cat/:id').get(catCtrl.get);
    router.route('/cat/:id').put(catCtrl.update);
    router.route('/cat/:id').delete(catCtrl.delete);
    // Users
    router.route('/login').post(userCtrl.login);
    router.route('/users').get(userCtrl.getAll);
    router.route('/users/:page').get(userCtrl.getAll);
    router.route('/users/count').get(userCtrl.count);
    router.route('/user').post(userCtrl.insert);
    router.route('/user/:id').get(userCtrl.get);
    router.route('/user/:id').put(userCtrl.update);
    router.route('/user/:id').delete(userCtrl.delete);
    router.route('/addPhoto').post(userCtrl.uploadprofile);
    // User Role
    router.route('/roles').get(roleCtrl.getAll);
    router.route('/roles/count').get(roleCtrl.count);
    router.route('/role').post(roleCtrl.insert);
    router.route('/role/:id').get(roleCtrl.get);
    router.route('/role/:id').put(roleCtrl.update);
    router.route('/role/:id').delete(roleCtrl.delete);
    // Get All Admin Module list
    router.route('/modulelist').get(modulelistCtrl.getAll);
    router.route('/modulelist/:id').get(modulelistCtrl.get);
    router.route('/singlemodulelist/:id').get(modulelistCtrl.getbyName);
    //save module role
    router.route('/getrolemodule/count/:id').get(moduleroleCtrl.countmodule);
    router.route('/getrolemodule/:id').get(moduleroleCtrl.getmodule);
    router.route('/allmodulelistname/:id').get(modulelistCtrl.getallmodule);
    router.route('/checkmodulepermission/count/:id').get(moduleroleCtrl.getcheckmodule);
    router.route('/savemodule').post(moduleroleCtrl.insert);
    router.route('/savemodulerole/:id').put(moduleroleCtrl.updatemodule);
    router.route('/savepage').post(pageCtrl.insert);
    router.route('/getpages').get(pageCtrl.getAll);
    router.route('/getpage/:id').get(pageCtrl.get);
    router.route('/editContent/:id').put(pageCtrl.update);
    router.route('/deleteContent/:id').delete(pageCtrl.delete);
    // Apply the routes to our application with the prefix /api
    app.use('/api', router);
}
exports["default"] = setRoutes;
