import got from 'got';
import { type FacturatechDataMapperContract } from './contracts/facturatech_data_mapper_contract.js';
import { type PackageResponse } from './types/packages_response.js';
import { type SuccessResponse } from './types/success_response.js';

export default class FacturatechDataMapperService implements FacturatechDataMapperContract {
  private readonly url: string;

  private readonly apiKey: string;

  public constructor() {
    this.url = 'http://localhost:3001/api/ftech-data-mapper';
    this.apiKey = 'test';
  }

  public async getPlans(): Promise<SuccessResponse<PackageResponse>> {
    return got
      .get<{ data: Record<string, unknown> }>(`${this.url}/packages`, {
        headers: {
          'api-key': this.apiKey,
          'Accept': 'application/json',
        },
      })
      .json();
  }
}
