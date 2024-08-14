import router from '@adonisjs/core/services/router';

const GetFacturatechUsersByNitController = () => import('#controllers/users/get_facturatech_users_by_nit_controller');
const GetFacturatechUsersByKeyController = () => import('#controllers/users/get_facturatech_users_by_key_controller');

const users = (): void => {
  router.get('/nit/:nit', [GetFacturatechUsersByNitController]).as('users.showByNit');
  router.get('/key/:key', [GetFacturatechUsersByKeyController]).as('users.showByKey');
};

export default users;
