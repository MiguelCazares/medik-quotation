import vine from '@vinejs/vine';
import { PaymentMeans } from '../../constants/payment_means.js';
import { PlanCodes } from '../../constants/plan_codes.js';

export const storeManualLicenValidator = vine.compile(
  vine.object({
    facturatechId: vine.number().unique(async (db, value) => {
      const manualLicense = await db.from('manual_licenses').where('platform_user_id', value).first();

      return manualLicense === null;
    }),
    email: vine.string().email(),
    code: vine.enum(Object.values(PlanCodes)),
    paymentMean: vine.enum(Object.values(PaymentMeans)),
    price: vine.number(),
  }),
);
