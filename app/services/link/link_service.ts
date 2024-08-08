import got from 'got';
import { type DateTime } from 'luxon';
import { linkToken, linkUrl } from '#config/service';
import { type RegenByType } from '../../constants/regen_by_types.js';
import { type TokenByType } from '../../constants/token_by_types.js';
import { type LinkServiceContract } from './contracts/link_service_contract.js';
import { type BusinessPlan } from './types/business_plan.js';
import { type InventorySaleInvoiceDocument } from './types/inventory_sale_invoice_document.js';
import { type InventorySaleInvoiceDocumentPayload } from './types/inventory_sale_invoice_document_payload.js';
import { type Pagination } from './types/pagination/pagination.js';
import { type Plan } from './types/plan.js';
import { type User } from './types/user.js';

export default class LinkService implements LinkServiceContract {
  private readonly url: string;

  private readonly linkToken: string;

  private headers: Record<string, string>;

  public constructor() {
    this.url = linkUrl!;
    this.linkToken = linkToken!;
    this.headers = {
      'link-control-api-token': this.linkToken,
    };
  }

  public async getLinkUserToken(value: string, type: TokenByType): Promise<{ token: string }> {
    return got
      .post<{ data: Record<string, unknown> }>(`${this.url}/back-office/generate-token`, {
        headers: this.headers,
        json: {
          type,
          value,
        },
      })
      .json();
  }

  public async getUserByPlatformUserId(platformUserId: number): Promise<User> {
    return got
      .get<{ data: Record<string, unknown> }>(`${this.url}/link-control/users/${platformUserId}`, {
        headers: this.headers,
      })
      .json();
  }

  public async paginateInventorySaleInvoiceDocuments(
    params: Record<string, unknown>,
  ): Promise<Pagination<InventorySaleInvoiceDocument[]>> {
    if (typeof params.filter === 'object' && params.filter !== null) {
      const keys = Object.keys(params.filter as Record<string, unknown>);
      if (keys.length > 0) {
        for (const element of keys) {
          params[`filter[${element}]`] = params.filter[element as keyof typeof params.filter];
        }
      }

      delete params.filter;
    }

    return got
      .get<{ data: Record<string, unknown> }>(`${this.url}/back-office/inventory-sale-invoice-document`, {
        headers: this.headers,
        searchParams: { ...(params as Record<string, string>) },
      })
      .json();
  }

  public async showInventorySaleInvoiceDocumentPayload(trackId: string): Promise<InventorySaleInvoiceDocumentPayload> {
    return got
      .get<{ data: Record<string, unknown> }>(
        `${this.url}/back-office/inventory-sale-invoice-document-payloads/${trackId}`,
        {
          headers: this.headers,
        },
      )
      .json();
  }

  public async regenerateSaleInvoiceDocumentPayload(
    trackId: string,
    payload: string,
    type: RegenByType,
  ): Promise<InventorySaleInvoiceDocumentPayload> {
    return got
      .post<{ data: Record<string, unknown> }>(
        `${this.url}/back-office/regenerate-inventory-sale-invoice-document-payloads/${trackId}`,
        {
          headers: this.headers,
          json: {
            payload,
            type,
          },
        },
      )
      .json();
  }

  public async checkInventorySaleInvoiceDocumentStatus(
    inventorySaleInvoiceDocument: number,
  ): Promise<InventorySaleInvoiceDocument> {
    return got
      .get<{ data: Record<string, unknown> }>(
        `${this.url}/back-office/inventory-sale-invoice-document/${inventorySaleInvoiceDocument}/status`,
        {
          headers: this.headers,
        },
      )
      .json();
  }

  public async getAllPlans(): Promise<Plan[]> {
    return got
      .get<{ data: Record<string, unknown> }>(`${this.url}/plans`, {
        headers: this.headers,
      })
      .json();
  }

  public async changeUserEmail(oldEmail: string, newEmail: string): Promise<unknown> {
    return got
      .put<{ data: Record<string, unknown> }>(`${this.url}/back-office/change-users-emails`, {
        headers: this.headers,
        json: {
          old_email: oldEmail,
          new_email: newEmail,
        },
      })
      .json();
  }

  public async getAllBusinessPlans(): Promise<BusinessPlan[]> {
    return got
      .get<{ data: Record<string, unknown> }>(`${this.url}/link-control/business-plans`, {
        headers: this.headers,
      })
      .json();
  }

  public async updateValidToInBusinessPlan(id: number, validTo: DateTime): Promise<BusinessPlan> {
    return got
      .put<{ data: Record<string, unknown> }>(`${this.url}/link-control/business-plans/${id}`, {
        headers: this.headers,
        json: {
          valid_to: validTo.toFormat('yyyy-LL-dd HH:mm:ss'),
        },
      })
      .json();
  }

  public async activateLicense(
    platformUserId: number,
    email: string,
    password: string,
    plan: Plan,
    trackId: string,
  ): Promise<User> {
    return got
      .post<{ data: Record<string, unknown> }>(`${this.url}/link-control/users`, {
        headers: this.headers,
        json: {
          platform_user_id: platformUserId,
          email,
          password,
          plan_id: plan.id,
          track_id: trackId,
          add_folios: false,
        },
      })
      .json();
  }
}
