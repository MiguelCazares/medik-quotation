import { type TDocumentDefinitions } from 'pdfmake/interfaces.js';
import PrinterServices from '../printer/printer_service.js';

export default class ReportQuotation {
  private readonly printer: PrinterServices;

  private readonly tableBodyPackages = [
    [
      {
        text: 'OFERTA COMERCIAL',
        colSpan: 3,
        alignment: 'center',
        style: 'firstColumn',
      },
      {},
      {},
    ],
    [
      { text: '# documentos', style: 'secondColumn' },
      { text: 'Descripción de los servicios', style: 'secondColumn' },
      { text: 'Precio', style: 'secondColumn' },
    ],
  ];

  // packages.forEach(item => {
  //   tableBodyPackages.push([
  //     { text: item.numeroTimbres, style: 'tableData1' },
  //     { text: item.desFactura, style: 'tableData2' },
  //     { text: formatCurrency(item.precio, CODE_ISO.CO, CURRENCY.CO, 2), style: 'tableData3' }
  //   ]);
  // });

  private readonly tableBodyServices = [
    [
      {
        text: 'OFERTA COMERCIAL',
        colSpan: 3,
        alignment: 'center',
        style: 'firstColumn',
      },
      {},
      {},
    ],
    [
      { text: 'Implementaciones', style: 'secondColumn' },
      { text: 'Descripción de los servicios', style: 'secondColumn' },
      { text: 'Precio', style: 'secondColumn' },
    ],
  ];

  // services.forEach(item => {

  private readonly docDefinition: TDocumentDefinitions = {
    pageSize: 'A4',
    pageMargins: [72, 72, 72, 36],
    content: [
      //Primera pagina
      {
        image: 'public/images/PortadaCotizacion.jpg',
        margin: [0, 0, 0, 0],
        width: 595,
        height: 841,
        absolutePosition: { x: 0, y: 0 },
        pageBreak: 'after',
      },
      //Segunda pagina
      {
        text: [
          { text: 'Estimad@ ', style: 'header' },
          { text: `$Name,\n\n`, style: 'subheader' },
        ],
      },
      {
        text:
          'Ftech Colombia S.A.S, por medio de la experiencia adquirida en ' +
          'más de 15 años en el desarrollo nos permite brindar servicios que ' +
          'contribuyen al crecimiento de las empresas en un entorno de calidad, ' +
          'garantizando el cumplimiento de requerimientos normativos y seguridad en ' +
          'la información de cada contribuyente de manera centralizada en nuestro Portal ' +
          'Web Facturatech.\n\n',
        style: 'text',
      },
      {
        text:
          'Somos especialistas en tecnologías de la información, donde los documentos ' +
          'electrónicos han sido nuestro eje central ofreciendo herramientas y soluciones ágiles, ' +
          'innovadoras y capaces de optimizar los procesos tecnológicos de cada uno de nuestros clientes' +
          'entregando el mejor servicio en Colombia a todos los contribuyentes.',
        style: 'text',
      },
      '\n\n',
      {
        text: 'MÓDULOS DE SERVICIO\n\n',
        style: 'title',
      },
      {
        margin: [20, 0, 0, 0],
        ol: [
          { text: 'Facturas Electrónicas, notas crédito y notas débito.', counter: 1 },
          {
            type: 'none',
            margin: [20, 0, 0, 0],
            ol: [
              { text: 'Tipo de operación:', listType: 'lower-alpha' },
              {
                margin: [40, 0, 0, 0],
                columns: [
                  {
                    stack: [
                      {
                        ul: [
                          'Estándar',
                          'Sector Salud',
                          'Complemento\n Mandato',
                          'Complemento\n A.I.U.',
                          'Sector Petrolero',
                          'Sector Hotelero',
                          'Sector Notarial\n\n',
                        ],
                      },
                    ],
                  },
                  {
                    stack: [
                      {
                        ul: [
                          'Aseguradoras (SURA)',
                          'Anestesiólogos',
                          'Restaurantes (Propinas)',
                          'Compra / venta de divisas',
                          'Transporte',
                          'Notas Rebate (No\n relacionadas)',
                          'Exportación',
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          { text: 'Documento Soporte Electrónico y notas de ajuste.', counter: 2 },
          { text: 'Documento Soporte de Pago de Nómina Electrónica y notas de ajuste.', counter: 3 },
          { text: 'Buzón Tributario (recepción y generación de eventos – acuses Título Valor).', counter: 4 },
        ],
        style: 'text',
      },
      '\n\n',
      {
        text: 'NUESTRO IDENTIFICADOR COMERCIAL\n\n',
        style: 'title',
      },
      {
        image: 'public/images/identificador_comercia.png',
        margin: [0, 0, 0, 0],
        width: 467.15,
        height: 138.9,
        alignment: 'center',
        pageBreak: 'after',
      },
      // Tercera pagina
      {
        text: 'COTIZACIÓN\n\n',
        style: 'title',
      },
      '\n\n',
      {
        table: {
          widths: [100, 251, 100],
          body: this.tableBodyPackages,
        },
      },
      '\n\n',
      {
        table: {
          widths: [100, 251, 100],
          body: this.tableBodyServices,
        },
      },
      '\n\n',
      {
        text: 'FORMA DE PAGO\n\n',
        style: 'title',
      },
      {
        text:
          'Pago único inicial del 100% (cien por ciento), a la fecha de la firma del acuerdo de' +
          'prestación de servicios, por los volúmenes de consumo anual considerados en esta propuesta.\n\n',
        style: 'text',
      },
      {
        text: 'ESQUEMA DE SOPORTE TÉCNICO\n\n',
        style: 'title',
      },
      {
        margin: [20, 0, 0, 0],
        ul: [
          {
            text:
              'Nivel 1: Soporte Técnico Plataforma / Web Service para atender ' +
              'requerimientos de nivel operativo o técnico básico.',
            style: 'text',
          },
          {
            text:
              'Nivel 2: Programación para atender requerimientos de nivel ' +
              'superior, incidencias, personalizaciones y actualizaciones DIAN.\n\n',
            style: 'text',
          },
        ],
      },
      '\n\n',
      {
        text: 'CONTACTO\n\n',
        style: 'title',
      },
      {
        columns: [
          {
            stack: [
              {
                text: [
                  { text: 'Nombre del distribuidor: ', style: 'textContac' },
                  { text: `NOMBRE\n\n`, style: 'textContacSub' },
                ],
              },
              {
                text: [
                  { text: 'Correo: ', style: 'textContac' },
                  { text: `CORREO\n\n`, style: 'textContacSub' },
                ],
              },
              {
                text: [
                  { text: 'Teléfono: ', style: 'textContac' },
                  { text: `TELEFONO\n\n`, style: 'textContacSub' },
                ],
              },
            ],
          },
          {
            stack: [
              {
                alignment: 'right',
                text: [
                  { text: 'Folio: ', style: 'textContac' },
                  { text: `REFERENCE\n\n`, style: 'textContacSub' },
                ],
              },
              {
                alignment: 'right',
                text: [
                  { text: 'Fecha de emisión: ', style: 'textContac' },
                  { text: `DATE\n\n`, style: 'textContacSub' },
                ],
              },
              {
                text: 'Consulta Términos y Condiciones*',
                link: 'https://www.google.com',
                color: '#1883DC',
                fontSize: 9,
                decoration: 'underline',
                alignment: 'right',
              },
            ],
          },
        ],
      },
    ],
    styles: {
      textContacSub: {
        fontSize: 9,
        color: '#062A51',
        italics: true,
      },
      textContac: {
        fontSize: 9,
        color: '#062A51',
      },
      tableData1: {
        fontSize: 11,
        color: '#062A51',
        alignment: 'center',
      },
      tableData2: {
        fontSize: 10,
        color: '#062A51',
        alignment: 'center',
        italics: true,
      },
      tableData3: {
        fontSize: 11,
        color: '#BE3B5D',
        alignment: 'center',
        font: 'Roboto2',
        bold: true,
      },
      firstColumn: {
        fontSize: 12,
        bold: true,
        fillColor: '#062A51',
        color: 'white',
      },
      secondColumn: {
        alignment: 'center',
        fontSize: 11,
        italics: true,
        fillColor: '#BE3B5D',
        color: 'white',
      },
      header: {
        fontSize: 11,
        bold: true,
        color: '#062A51',
      },
      text: {
        italics: true,
        fontSize: 11,
        color: '#062A51',
        alignment: 'justify',
        lineHeight: 1.15,
      },
      subheader: {
        fontSize: 11,
        color: '#BE3B5D',
      },
      title: {
        fontSize: 11,
        color: '#BE3B5D',
        font: 'Roboto2',
        bold: true,
      },
    },
  };

  public constructor() {
    this.printer = new PrinterServices();
  }

  //   tableBodyServices.push([
  //     { text: item.servicio, style: 'tableData1' },
  //     { text: item.desFactura, style: 'tableData2' },
  //     { text: formatCurrency(item.precio1, CODE_ISO.CO, CURRENCY.CO, 2), style: 'tableData3' }
  //   ]);
  // });

  public getReportQuotation(): PDFKit.PDFDocument {
    return this.printer.createrPdf(this.docDefinition);
  }
}
