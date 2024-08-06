import { randomUUID } from 'node:crypto';
import factory from '@adonisjs/lucid/factories';
import { DateTime } from 'luxon';
import ManualLicense from '#models/manual_license';
import { PaymentMeans } from '../../app/constants/payment_means.js';
import { PlanCodes } from '../../app/constants/plan_codes.js';
import { PlanPeriods } from '../../app/constants/plan_periods.js';

export const ManualLicenseFactory = factory
  .define(ManualLicense, async ({ faker }) => {
    return {
      trackId: randomUUID().toString(),
      platformUserId: faker.number.int({ min: 1, max: 100000 }),
      key: faker.person.firstName(),
      email: faker.internet.email(),
      code: faker.helpers.objectValue(PlanCodes),
      period: faker.helpers.objectValue(PlanPeriods),
      paymentMean: faker.helpers.objectValue(PaymentMeans),
      price: faker.number.float({ min: 0, max: 10000, fractionDigits: 2 }),
      validFrom: DateTime.now(),
      validTo: DateTime.now(),
    };
  })
  .build();
