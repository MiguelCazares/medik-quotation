import { type ApplicationService } from '@adonisjs/core/types';
import { LinkServiceContract } from '#services/link/contracts/link_service_contract';
import { WompiServiceContract } from '#services/wompi/contracts/wompi_service_contract';

export default class AppProvider {
  public constructor(protected app: ApplicationService) {}

  /**
   * Register bindings to the container
   */
  public register(): void {
    // Empty
  }

  /**
   * The container bindings have booted
   */
  public async boot(): Promise<void> {
    await import('../src/extensions/request_macros.js');
    await import('../src/extensions/response_macros.js');
    const LinkService = await import('#services/link/link_service');
    this.app.container.bind(LinkServiceContract, () => {
      return this.app.container.make(LinkService.default);
    });
    const WompiService = await import('#services/wompi/wompi_service');
    this.app.container.bind(WompiServiceContract, () => {
      return this.app.container.make(WompiService.default);
    });
  }

  /**
   * The application has been booted
   */
  public async start(): Promise<void> {
    // Empty
  }

  /**
   * The process has been started
   */
  public async ready(): Promise<void> {
    // Empty
  }

  /**
   * Preparing to shutdown the app
   */
  public async shutdown(): Promise<void> {
    // Empty
  }
}
