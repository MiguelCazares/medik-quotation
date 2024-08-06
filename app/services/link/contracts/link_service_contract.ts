import { type DateTime } from 'luxon';
import { type RegenByType } from '../../../constants/regen_by_types.js';
import { type TokenByType } from '../../../constants/token_by_types.js';
import { type BusinessPlan } from '../types/business_plan.js';
import { type InventorySaleInvoiceDocument } from '../types/inventory_sale_invoice_document.js';
import { type InventorySaleInvoiceDocumentPayload } from '../types/inventory_sale_invoice_document_payload.js';
import { type Pagination } from '../types/pagination/pagination.js';
import { type Plan } from '../types/plan.js';
import { type User } from '../types/user.js';

export abstract class LinkServiceContract {
  public abstract getLinkUserToken(value: string, type: TokenByType): Promise<{ token: string }>;
  public abstract getAllPlans(): Promise<Plan[]>;
  public abstract getUserByPlatformUserId(platformUserId: number): Promise<User>;
  public abstract activateLicense(
    platformUserId: number,
    email: string,
    password: string,
    plan: Plan,
    trackId: string,
  ): Promise<User>;
  public abstract getAllBusinessPlans(): Promise<BusinessPlan[]>;
  public abstract updateValidToInBusinessPlan(id: number, validTo: DateTime): Promise<BusinessPlan>;
  public abstract paginateInventorySaleInvoiceDocuments(
    params: Record<string, unknown>,
  ): Promise<Pagination<InventorySaleInvoiceDocument[]>>;
  public abstract showInventorySaleInvoiceDocumentPayload(
    trackId: string,
  ): Promise<InventorySaleInvoiceDocumentPayload>;
  public abstract regenerateSaleInvoiceDocumentPayload(
    trackId: string,
    payload: string,
    type: RegenByType,
  ): Promise<unknown>;
  public abstract checkInventorySaleInvoiceDocumentStatus(
    inventorySaleInvoiceDocument: number,
  ): Promise<InventorySaleInvoiceDocument>;
  public abstract changeUserEmail(oldEmail: string, newEmail: string): Promise<unknown>;
}
