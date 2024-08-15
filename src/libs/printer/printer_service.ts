import PdfPrinter from 'pdfmake';
import { type TDocumentDefinitions } from 'pdfmake/interfaces.js';

const fonts = {
  Roboto: {
    normal: 'fonts/Fredoka_Condensed-Regular.ttf',
    bold: 'fonts/Fredoka_Condensed-SemiBold.ttf',
    italics: 'fonts/Fredoka_Condensed-Light.ttf',
  },
  Roboto2: {
    bold: 'fonts/Fredoka_Condensed-Medium.ttf',
  },
};

export default class PrinterServices {
  private printer = new PdfPrinter(fonts);

  public createrPdf(docDefinition: TDocumentDefinitions): PDFKit.PDFDocument {
    return this.printer.createPdfKitDocument(docDefinition);
  }
}
