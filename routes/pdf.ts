import router from '@adonisjs/core/services/router';

const ReportsController = () => import('#controllers/reports/reports_controller');

const pdf = (): void => {
  router.get('/pdf', [ReportsController]).as('pdf.index');
};

export default pdf;
