import * as express from 'express';

import CatCtrl from './controllers/cat';
import UserCtrl from './controllers/user';
import RoleCtrl from './controllers/role';
import ModulelistCtrl from './controllers/modulelist';
import ModuleroleCtrl from './controllers/modulerole';
import Cat from './models/cat';
import User from './models/user';
import Role from './models/role';
import Modulelist from './models/modulelist';
import Modulerole from './models/modulerole';
export default function setRoutes(app) {

  const router = express.Router();

  const catCtrl = new CatCtrl();
  const userCtrl = new UserCtrl();
  const roleCtrl = new RoleCtrl();
  const modulelistCtrl = new ModulelistCtrl();
  const moduleroleCtrl = new ModuleroleCtrl();
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
  router.route('/users/count').get(userCtrl.count);
  router.route('/user').post(userCtrl.insert);
  router.route('/user/:id').get(userCtrl.get);
  router.route('/user/:id').put(userCtrl.update);
  router.route('/user/:id').delete(userCtrl.delete);


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


//save module role
router.route('/getrolemodule/:id').get(moduleroleCtrl.getmodule);
router.route('/savemodule').post(moduleroleCtrl.insert);
router.route('/savemodulerole:id').put(moduleroleCtrl.update);

  // Apply the routes to our application with the prefix /api
  app.use('/api', router);

}
