import app from '@adonisjs/core/services/app';
import { test } from '@japa/runner';
import { DateTime } from 'luxon';
import { UserFactory } from '#database/factories/user_factory';
import ManualLicense from '#models/manual_license';
import { LinkServiceContract } from '#services/link/contracts/link_service_contract';
import { type User } from '#services/link/types/user';
import { WompiServiceContract } from '#services/wompi/contracts/wompi_service_contract';
import { type ManualActivation } from '#services/wompi/types/manual_activation';
import { type SuccessResponse } from '#services/wompi/types/success_response';
import { fileContents } from '#tests/test_utils';
import { PaymentMeans } from '../../../app/constants/payment_means.js';
import { PlanCodes } from '../../../app/constants/plan_codes.js';
import { PlanPeriods } from '../../../app/constants/plan_periods.js';
import LinkServiceHelper from '../helpers/link_service_helper.js';
import WompiServiceHelper from '../helpers/wompi_service_helper.js';

test.group('Licenses store manual license test', () => {
  const endpoint = 'api.manual-licenses.store';
  test('store license', async ({ client, route }) => {
    app.container.swap(LinkServiceContract, (): LinkServiceHelper => {
      return new LinkServiceHelper(false, true);
    });
    app.container.swap(WompiServiceContract, (): WompiServiceHelper => {
      return new WompiServiceHelper();
    });
    const authUser = await UserFactory.create();
    const linkUser = JSON.parse(fileContents('link_user.json')) as User;
    const activationBody = JSON.parse(fileContents('wompi_activation_body.json')) as SuccessResponse<ManualActivation>;
    const payload = {
      facturatechId: 15594,
      email: 'user@example.com',
      code: PlanCodes.AnnualPremium,
      paymentMean: PaymentMeans.Wompi,
      price: 10000,
    };

    const response = await client.post(route(endpoint)).json(payload).accept('json').loginAs(authUser);

    response.assertStatus(201);
    const licenseCreated = await ManualLicense.query().where('platformUserId', 15594).firstOrFail();
    response.assertBodyContains({
      data: {
        id: licenseCreated.id.toString(),
        createdAt: licenseCreated.createdAt.toString(),
        updatedAt: licenseCreated.updatedAt.toString(),
        trackId: activationBody.data.track_id,
        code: payload.code,
        period: PlanPeriods.Annual,
        price: payload.price,
        paymentMean: payload.paymentMean,
        validFrom: DateTime.fromISO(linkUser.valid_from).toString(),
        validTo: DateTime.fromISO(linkUser.valid_to).toString(),
        key: licenseCreated.key,
      },
    });

    app.container.restore(LinkServiceContract);
    app.container.restore(WompiServiceContract);
  });
});
