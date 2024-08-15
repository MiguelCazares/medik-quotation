import { Writable } from 'node:stream';
import { type HttpContext } from '@adonisjs/core/http';
import logger from '@adonisjs/core/services/logger';
import ReportQuotation from '../../../src/libs/reports/report_quotation.js';

export default class ReportsController {
  public declare reportQuotation: ReportQuotation;

  public constructor() {
    this.reportQuotation = new ReportQuotation();
  }

  public async handle({ response }: HttpContext): Promise<void> {
    try {
      const pdfDoc = this.reportQuotation.getReportQuotation();
      const chunks: Buffer[] = [];

      const writableStream = new Writable({
        write(chunk: Buffer, _encoding: BufferEncoding, callback: () => void) {
          chunks.push(chunk);
          callback();
        },
      });

      await new Promise<void>((resolve, reject) => {
        writableStream.on('finish', resolve);
        writableStream.on('error', reject);
        pdfDoc.info.Title = 'Reporte de cotización';
        pdfDoc.pipe(writableStream);
        pdfDoc.end();
      });

      const pdfBuffer = Buffer.concat(chunks);
      const pdfBase64 = pdfBuffer.toString('base64');

      response.header('Content-Type', 'application/pdf');
      response.sendResponse({ pdfBase64 }, '', 200);
    } catch (error) {
      logger.error(error);
      response.sendError('Ocurrio un error al obtener los planes', undefined, 500);
    }
  }
}
