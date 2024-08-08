import router from '@adonisjs/core/services/router';

const GetFacturatechPlansController = () => import('#controllers/plans/get_facturatech_plans_controller');

const plans = (): void => {
  router.get('/plans', [GetFacturatechPlansController]).as('plans.index');
};

export default plans;
