import { type LicenseType } from '../../../constants/license_types.js';

export interface License {
  id: number;
  plan_id: number;
  business_id: number;
  track_id: string;
  valid_from: string;
  valid_to: string;
  plan_documents: 15000;
  type: LicenseType;
  created_at: string;
  updated_at: string;
}
