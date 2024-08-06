import { HTTPError } from 'got';
import LinkService from '#services/link/link_service';
import { type InventorySaleInvoiceDocument } from '#services/link/types/inventory_sale_invoice_document';
import { type InventorySaleInvoiceDocumentPayload } from '#services/link/types/inventory_sale_invoice_document_payload';
import { type Pagination } from '#services/link/types/pagination/pagination';
import { type Plan } from '#services/link/types/plan';
import { type User } from '#services/link/types/user';
import { fileContents } from '#tests/test_utils';

export default class LinkServiceHelper extends LinkService {
  public constructor(
    private failInPlans = false,
    private failInFindUser = false,
  ) {
    super();
  }

  public async getLinkUserToken(): Promise<{ token: string }> {
    return new Promise((resolve) => {
      resolve(JSON.parse(fileContents('get_token.json')) as { token: string });
    });
  }

  public async getAllPlans(): Promise<Plan[]> {
    if (this.failInPlans) {
      throw new Error('an error');
    }

    return new Promise((resolve) => {
      resolve(JSON.parse(fileContents('plans.json')) as Plan[]);
    });
  }

  public async paginateInventorySaleInvoiceDocuments(
    _params: Record<string, string>,
  ): Promise<Pagination<InventorySaleInvoiceDocument[]>> {
    return new Promise((resolve) => {
      resolve(
        JSON.parse(fileContents('paginate_inventory_sale_invoice_documents.json')) as Pagination<
          InventorySaleInvoiceDocument[]
        >,
      );
    });
  }

  public async showInventorySaleInvoiceDocumentPayload(_trackId: string): Promise<InventorySaleInvoiceDocumentPayload> {
    return new Promise((resolve) => {
      resolve(JSON.parse(fileContents('invoice_payload.json')) as InventorySaleInvoiceDocumentPayload);
    });
  }

  public async getUserByPlatformUserId(_platformUserId: number): Promise<User> {
    if (this.failInFindUser) {
      const response = { statusCode: 404, statusMessage: 'Not Found' };
      // @ts-ignore
      const error = new HTTPError(response);
      // @ts-ignore
      error.response = response;
      throw error;
    }

    return new Promise((resolve) => {
      resolve(JSON.parse(fileContents('link_user.json')) as User);
    });
  }

  public async activateLicense(
    _platformUserId: number,
    _email: string,
    _password: string,
    _plan: Plan,
    _trackId: string,
  ): Promise<User> {
    return new Promise((resolve) => {
      resolve(JSON.parse(fileContents('link_user.json')) as User);
    });
  }
}
