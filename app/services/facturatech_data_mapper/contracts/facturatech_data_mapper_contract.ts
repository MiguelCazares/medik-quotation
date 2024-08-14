import { type PackageResponse } from '../types/packages_response.js';
import { type SuccessResponse } from '../types/success_response.js';
import { type UsersNitResponse } from '../types/users_id_response.js';
import { type ServicesResponse } from '../types/services_response.js';
import { type UsersKeyResponse } from '../types/users_key_response.js';

export abstract class FacturatechDataMapperContract {
  public abstract getPlans(): Promise<SuccessResponse<PackageResponse>>;
  public abstract getServices(): Promise<SuccessResponse<ServicesResponse>>;
  public abstract getUserByNit(nit: string): Promise<SuccessResponse<UsersNitResponse>>;
  public abstract getUserByKey(key: string): Promise<SuccessResponse<UsersKeyResponse>>;
}
