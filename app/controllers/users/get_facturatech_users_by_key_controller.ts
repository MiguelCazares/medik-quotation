import { inject } from '@adonisjs/core';
import { type HttpContext } from '@adonisjs/core/http';
import logger from '@adonisjs/core/services/logger';
import { FacturatechDataMapperContract } from '#services/facturatech_data_mapper/contracts/facturatech_data_mapper_contract';

@inject()
export default class GetFacturatechUsersByKeyController {
  public constructor(protected facturatechDataMapper: FacturatechDataMapperContract) {}

  public async handle({ params, response }: HttpContext): Promise<void> {
    try {
      const { key } = params;
      const userByKey = await this.facturatechDataMapper.getUserByKey(key);
      return response.sendResponse(userByKey, 'Key obtenida correctamente', 200);
    } catch (error) {
      logger.error(error);
      response.sendError('Ocurrió un error al obtener la Key', undefined, 500);
    }
  }
}
