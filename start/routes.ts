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
import pdf from '#routes/pdf';
import plans from '#routes/plans';

router.get('/', ({ response }: HttpContext) => {
  response.status(200).send({ message: 'Ok!' });
});
router.group(authRoutes).prefix('api').as('api');
router.group(licenses).prefix('api').as('api');
router.group(plans).prefix('api').as('api');
router.group(pdf).prefix('api').as('api');
