import { inject } from '@adonisjs/core';
import { type HttpContext } from '@adonisjs/core/http';
import logger from '@adonisjs/core/services/logger';
import { FacturatechDataMapperContract } from '#services/facturatech_data_mapper/contracts/facturatech_data_mapper_contract';

@inject()
export default class GetFacturatechUsersByIdController {
  public constructor(protected facturatechDataMapper: FacturatechDataMapperContract) {}

  public async handle({ params, response }: HttpContext): Promise<void> {
    try {
      const { nit } = params;
      const userByNit = await this.facturatechDataMapper.getUserByNit(nit);

      return response.sendResponse(userByNit, 'nit obtenido correctamente', 200);
    } catch (error) {
      logger.error(error);
      response.sendError('Ocurrió un error al obtener el NIT', undefined, 500);
    }
  }
}
