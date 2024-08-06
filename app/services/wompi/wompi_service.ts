import got from 'got';
import { wompiToken, wompiUrl } from '#config/service';
import { type Plan } from '#services/link/types/plan';
import { type PaymentMean } from '../../constants/payment_means.js';
import { type WompiServiceContract } from './contracts/wompi_service_contract.js';
import { type ManualActivation } from './types/manual_activation.js';
import { type SuccessResponse } from './types/success_response.js';

export default class WompiService implements WompiServiceContract {
  private readonly url: string;

  private readonly wompiToken: string;

  public constructor() {
    this.url = wompiUrl;
    this.wompiToken = wompiToken;
  }

  public async manualActivation(
    facturatechId: number,
    plan: Plan,
    email: string,
    paymentMean: PaymentMean,
    price: number,
  ): Promise<SuccessResponse<ManualActivation>> {
    return got
      .post<{ data: Record<string, unknown> }>(`${this.url}/manual-activation`, {
        headers: {
          'api-key-link': this.wompiToken,
          'Accept': 'application/json',
        },
        json: {
          facturatech_id: facturatechId,
          plan_id: plan.id,
          email,
          payment_method: paymentMean,
          price,
        },
      })
      .json();
  }
}
