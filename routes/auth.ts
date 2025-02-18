import router from '@adonisjs/core/services/router';
import { middleware } from '#start/kernel';

const ShowUserAccountController = () => import('#controllers/auth/show_user_account_controller');

const DestroyTokenController = () => import('#controllers/auth/destroy_token_controller');

const StoreTokenController = () => import('#controllers/auth/store_token_controller');

const auth = (): void => {
  router.post('tokens', [StoreTokenController]).as('tokens.store');

  router
    .group((): void => {
      router.delete('tokens', [DestroyTokenController]).as('tokens.destroy');

      router.get('accounts/users', [ShowUserAccountController]).as('accounts.users.show');
    })
    .use(middleware.auth());
};

export default auth;
