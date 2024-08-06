import router from '@adonisjs/core/services/router';
import { middleware } from '#start/kernel';

const StoreManualLicenseController = () => import('#controllers/licenses/store_manual_license_controller');

const licenses = (): void => {
  router
    .group((): void => {
      router.post('manual-licenses', [StoreManualLicenseController]).as('manual-licenses.store');
    })
    .use(middleware.auth());
};

export default licenses;
