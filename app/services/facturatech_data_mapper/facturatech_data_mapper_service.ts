import got from 'got';
import { type FacturatechDataMapperContract } from './contracts/facturatech_data_mapper_contract.js';
import { type PackageResponse } from './types/packages_response.js';
import { type SuccessResponse } from './types/success_response.js';
import { type ServicesResponse } from './types/services_response.js';
import { type UsersNitResponse } from './types/users_id_response.js';
import { type UsersKeyResponse } from './types/users_key_response.js';

export default class FacturatechDataMapperService implements FacturatechDataMapperContract {
  private readonly url: string;

  private readonly apiKey: string;

  public constructor() {
    this.url = 'http://localhost:3001/api/ftech-data-mapper';
    this.apiKey = 'test';
  }

  public async getServices(): Promise<SuccessResponse<ServicesResponse>> {
    return got
      .get<{ data: Record<string, unknown> }>(`${this.url}/services`, {
        headers: {
          'api-key': this.apiKey,
          'Accept': 'application/json',
        },
      })
      .json();
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

  public async getUserByNit(nit: string): Promise<SuccessResponse<UsersNitResponse>> {
    return got
      .get<{ data: Record<string, unknown> }>(`${this.url}/companies-data/${nit}`, {
        headers: {
          'api-key': this.apiKey,
          'Accept': 'application/json',
        },
      })
      .json();
  }
  public async getUserByKey(key: string): Promise<SuccessResponse<UsersKeyResponse>> {
    return got
      .get<{ data: Record<string, unknown> }>(`${this.url}/users/${key}`, {
        headers: {
          'api-key': this.apiKey,
          'Accept': 'application/json',
        },
      })
      .json();
  }
}
