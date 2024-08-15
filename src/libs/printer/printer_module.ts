import { type ReportQuotation } from '../reports/report_quotation.js';

export abstract class PrinterModule {
  public abstract getReportQuotation(): ReportQuotation;
}
