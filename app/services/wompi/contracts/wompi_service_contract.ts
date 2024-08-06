import { type Plan } from '#services/link/types/plan';
import { type PaymentMean } from '../../../constants/payment_means.js';
import { type ManualActivation } from '../types/manual_activation.js';
import { type SuccessResponse } from '../types/success_response.js';

export abstract class WompiServiceContract {
  public abstract manualActivation(
    facturatechId: number,
    plan: Plan,
    email: string,
    paymentMean: PaymentMean,
    price: number,
  ): Promise<SuccessResponse<ManualActivation>>;
}
