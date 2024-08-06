import { type Plan } from '#services/link/types/plan';
import { type ManualActivation } from '#services/wompi/types/manual_activation';
import { type SuccessResponse } from '#services/wompi/types/success_response';
import WompiService from '#services/wompi/wompi_service';
import { fileContents } from '#tests/test_utils';
import { type PaymentMean } from '../../../app/constants/payment_means.js';

export default class WompiServiceHelper extends WompiService {
  public async manualActivation(
    _facturatechId: number,
    _plan: Plan,
    _email: string,
    _paymentMean: PaymentMean,
    _price: number,
  ): Promise<SuccessResponse<ManualActivation>> {
    return new Promise((resolve) => {
      resolve(JSON.parse(fileContents('wompi_activation_body.json')) as SuccessResponse<ManualActivation>);
    });
  }
}
