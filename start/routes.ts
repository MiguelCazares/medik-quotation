/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import { type HttpContext } from '@adonisjs/core/http';
import router from '@adonisjs/core/services/router';
import authRoutes from '#routes/auth';
import licenses from '#routes/licenses';
import plans from '#routes/plans';
import services from '#routes/services';
import users from '#routes/users';

router.get('/', ({ response }: HttpContext) => {
  response.status(200).send({ message: 'Ok!' });
});
router.group(authRoutes).prefix('api').as('api');
router.group(licenses).prefix('api').as('api');
router.group(plans).prefix('api').as('api');
router.group(services).prefix('api').as('api');
router.group(users).prefix('api').as('api');
