import router from '@adonisjs/core/services/router';

const GetFacturatechServicesController = () => import('#controllers/services/get_facturatech_services_controller');

const services = (): void => {
  router.get('/services', [GetFacturatechServicesController]).as('services.index');
};

export default services;
