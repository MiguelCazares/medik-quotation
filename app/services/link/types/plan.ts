import { type PlanCode } from '../../../constants/plan_codes.js';
import { type PlanPeriod } from '../../../constants/plan_periods.js';

export interface Plan {
  id: number;
  name: string;
  code: PlanCode;
  default_documents_quantity: number;
  branch_office_limit: number;
  admin_limit: number;
  price: number;
  period: PlanPeriod;
}
