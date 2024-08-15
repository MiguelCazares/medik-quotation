import PdfPrinter from 'pdfmake';
import { type TDocumentDefinitions } from 'pdfmake/interfaces.js';

const fonts = {
  Roboto: {
    normal: 'fonts/Roboto-Regular.ttf',
    bold: 'fonts/Roboto-Black.ttf',
    italics: 'fonts/Roboto-Light.ttf',
  },
  Roboto2: {
    bold: 'fonts/Roboto-Medium.ttf',
  },
};

export default class PrinterServices {
  private printer = new PdfPrinter(fonts);

  public createrPdf(docDefinition: TDocumentDefinitions): PDFKit.PDFDocument {
    return this.printer.createPdfKitDocument(docDefinition);
  }
}
