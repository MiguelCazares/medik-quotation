export interface InventorySaleInvoiceDocumentPayload {
  _id: string;
  track_id: string;
  payload: unknown;
  invoice_type: 'invoice';
  retries: number;
  business_id: number;
  branch_office_id: number;
  updated_at: string;
  created_at: string;
}
