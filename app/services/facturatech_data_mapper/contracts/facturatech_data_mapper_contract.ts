import { type PackageResponse } from '../types/packages_response.js';
import { type SuccessResponse } from '../types/success_response.js';

export abstract class FacturatechDataMapperContract {
  public abstract getPlans(): Promise<SuccessResponse<PackageResponse>>;
}
