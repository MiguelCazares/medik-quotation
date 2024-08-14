import { inject } from '@adonisjs/core';
import { type HttpContext } from '@adonisjs/core/http';
import logger from '@adonisjs/core/services/logger';
import { FacturatechDataMapperContract } from '#services/facturatech_data_mapper/contracts/facturatech_data_mapper_contract';

@inject()
export default class GetFacturatechServicesController {
  public constructor(protected facturatechDataMapper: FacturatechDataMapperContract) {}

  public async handle({ response }: HttpContext): Promise<void> {
    try {
      const services = await this.facturatechDataMapper.getServices();

      response.sendResponse(services, 'Servicios obtenidos correctamente', 200);
    } catch (error) {
      logger.error(error);
      response.sendError('Ocurrio un error al obtener los servicios', undefined, 500);
    }
  }
}
