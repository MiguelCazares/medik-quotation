import { type BusinessPlan } from './business_plan.js';
import { type License } from './license.js';

export interface Business {
  id: number;
  nit: string;
  dv: string;
  business_name: string;
  commercial_name: string;
  is_sync: boolean;
  owner_user_id: number;
  created_at: string;
  updated_at: string;
  current_business_plan: BusinessPlan;
  licenses: License[];
}
