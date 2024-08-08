import { inject } from '@adonisjs/core';
import { type HttpContext } from '@adonisjs/core/http';
import logger from '@adonisjs/core/services/logger';
import { FacturatechDataMapperContract } from '#services/facturatech_data_mapper/contracts/facturatech_data_mapper_contract';

@inject()
export default class GetFacturatechPlansController {
  public constructor(protected facturatechDataMapper: FacturatechDataMapperContract) {}

  public async handle({ response }: HttpContext): Promise<void> {
    try {
      const plans = await this.facturatechDataMapper.getPlans();

      response.sendResponse(plans, 'Planes obtenidos correctamente', 200);
    } catch (error) {
      logger.error(error);
      response.sendError('Ocurrio un error al obtener los planes', undefined, 500);
    }
  }
}
