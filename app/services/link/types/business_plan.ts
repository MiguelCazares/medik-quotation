export interface BusinessPlan {
  id: number;
  business_id: number;
  plan_id: number;
  used_documents: number;
  plan_documents: number;
  borrowed_documents: number;
  extra_purchased_documents: number;
  documents_borrowed_at: string | null;
  valid_from: string;
  valid_to: string;
  created_at: string;
  updated_at: string;
}
