import { inject } from '@adonisjs/core';
import { type HttpContext } from '@adonisjs/core/http';
import logger from '@adonisjs/core/services/logger';
import { HTTPError } from 'got';
import { DateTime } from 'luxon';
import ManualLicense from '#models/manual_license';
import { LinkServiceContract } from '#services/link/contracts/link_service_contract';
import { WompiServiceContract } from '#services/wompi/contracts/wompi_service_contract';
import { storeManualLicenValidator } from '#validators/licences/store_manual_license';

@inject()
export default class StoreManualLicenseController {
  public constructor(
    protected linkervice: LinkServiceContract,
    protected wompiService: WompiServiceContract,
  ) {}

  public async handle({ request, response }: HttpContext): Promise<void> {
    const payload = await request.validateUsing(storeManualLicenValidator);

    try {
      await this.linkervice.getUserByPlatformUserId(payload.facturatechId);
      response.sendError('Este ID de plataforma ya está dado de alta en link.', [], 403);

      return;
    } catch (error) {
      const httpError = error as HTTPError;

      if (httpError.response.statusCode !== 404) {
        logger.error({
          err: httpError.response.body,
          url: httpError.response.requestUrl,
          code: httpError.response.statusCode,
        });
        response.sendError(JSON.stringify(httpError.response.body), undefined, 400);

        return;
      }
    }

    try {
      const plans = await this.linkervice.getAllPlans();
      const plan = plans.find((item) => item.code === payload.code);
      if (plan === undefined) {
        response.sendError('Este código de plan no existe', undefined, 400);

        return;
      }
      const activationBody = await this.wompiService.manualActivation(
        payload.facturatechId,
        plan,
        payload.email,
        payload.paymentMean,
        payload.price,
      );

      const linkUser = await this.linkervice.activateLicense(
        payload.facturatechId,
        payload.email,
        activationBody.data.password,
        plan,
        activationBody.data.track_id,
      );

      const manualLicense = await ManualLicense.create({
        trackId: activationBody.data.track_id,
        platformUserId: payload.facturatechId,
        email: payload.email,
        code: payload.code,
        period: plan.period,
        price: payload.price,
        paymentMean: payload.paymentMean,
        validFrom: DateTime.fromISO(linkUser.valid_from),
        validTo: DateTime.fromISO(linkUser.valid_to),
        key: activationBody.data.key,
      });
      response.sendResponse(manualLicense, 'Licencia creada.', 201);

      return;
    } catch (error) {
      if (error instanceof HTTPError) {
        logger.error({ err: error.response.body, url: error.request.requestUrl, code: error.response.statusCode });
        response.sendError(JSON.stringify(error.response.body), undefined, 400);

        return;
      }
      logger.error(error);
      response.sendError('Ocurrio un error inesperado.', undefined, 400);
    }
  }
}
