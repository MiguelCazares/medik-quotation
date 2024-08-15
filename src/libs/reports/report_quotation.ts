import { type TDocumentDefinitions } from 'pdfmake/interfaces.js';
import PrinterServices from '../printer/printer_service.js';

export default class ReportQuotation {
  private readonly printer: PrinterServices;

  private readonly tableBodyPackages = [
    [
      {
        text: 'Oferta Comercial',
        colSpan: 3,
        alignment: 'center',
        style: 'firstColumn',
      },
      {},
      {},
    ],
    [
      { text: 'Plan Medik', style: 'secondColumn' },
      { text: 'Folios incluidos', style: 'secondColumn' },
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
        text: 'Servicios Complementarios',
        colSpan: 4,
        alignment: 'center',
        style: 'firstColumn',
      },
      {},
      {},
      {},
    ],
    [
      { text: 'Concepto', style: 'secondColumn' },
      { text: 'Descripción', style: 'secondColumn' },
      { text: 'V. unitario', style: 'secondColumn' },
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
          'NombreDelCliente\n',
          'correo@correo.com\n',
          'Nit87487238946',
        ],
        style: 'subheader',
        lineHeight: .9,
        absolutePosition: { x: 450, y: 25 },
      },
      {
        alignment: 'justify',
        columns: [
          {
            text: [
              { text: '¿Qué es MediK?\n', style: 'title' },
              {
                text:
                  'Más que un software de Historias Clínicas es una plataforma web ' +
                  'a la que puedes acceder desde cualquier lugar del mundo con acceso ' +
                  'a internet, que brinda al sector salud soluciones y herramientas para ' +
                  'hacer más ágil y eficiente el proceso de programación de citas, historia ' +
                  'clínica, facturación, registro y administración de pacientes, manejo de ' +
                  'agenda y reserva online, teleconsulta y mucho más.\n\n' +
                  'Toda la información está disponible y cargada en la nube, lo que significa que ' +
                  'no tendrás que instalar software adicional, únicamente acceder desde Google Chrome ' +
                  'a nuestra plataforma. \n\n',
                style: 'text',
              },
            ],
            lineHeight: 1.3,
          },
          {
            text:[],
            width: 20,
          },
          {
            stack: [
              { text: 'Herramientas médicas\n', style: 'title' },
              {
                margin: [20, 0, 0, 0],
                ul: [
                  'Plataforma en la nube',
                  'Interoperabilidad con SURA',
                  'Historias clínicas electrónicas',
                  'Agendamiento y confirmación de citas',
                  'Órdenes y formulaciones médicas',
                  'Manejo de caja',
                  'Informes gráficos',
                  'Evento adverso y código azul',
                  'API citas',
                  'Generación de RIPS',
                  'Consentimiento informado digital',
                  'Encuestas personalizables',
                  'Plataforma teleconsultas',
                  'Pasarelas de pago',
                  'Dictado por voz en HCO',
                  'Plantillas de medicamentos',
                  'Plantillas de órdenes médicas',
                  'Personalización de documentos',
                ],
                style: 'text',
              }
            ],
            lineHeight: 1.3,
          },
        ]
      },
      '\n\n',
      {
        stack: [
          {
            text: 'Documentación de soporte incluida\n',
            style: 'title'
          },
          {
            margin: [20, 0, 0, 0],
            ul: [
            'Manual de usuario',
            'Certificados (infraestructura, medios ópticos e interoperabilidad)',
            'Material de apoyo (19 videos tutoriales y 16 documentos PDF)'
            ],
            style: 'text',
          }
        ],
        lineHeight: 1.3,
      },
      {
        image: 'public/images/identificador_comercial_medik.png',
        margin: [0, 0, 0, 0],
        width: 170.95,
        height: 53.13,
        alignment: 'center',
        absolutePosition: { x: 0, y: 760 },
        pageBreak: 'after',
      },
      // Tercera pagina
      {
        text: [
          'NombreDelCliente\n',
          'correo@correo.com\n',
          'Nit87487238946',
        ],
        style: 'subheader',
        lineHeight: .9,
        absolutePosition: { x: 450, y: 25 },
      },
      {
        text: 'COTIZACIÓN\n',
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
          widths: [100, 151, 100, 100],
          body: this.tableBodyServices,
        },
      },
      '\n\n',
      {
        table: {
          widths: [120, 341],
          body: [
            [
              { text: 'Total del servicio', style: 'secondColumn' },
              { text: 'Precio total', color: 'black', fontSize: 20 }
            ],
            [
              { text: 'Total en letras', style: 'secondColumn' },
              { text: 'Precio total en letras', color: 'black', fontSize: 20 }
            ],
          ]
        }
      },
      '\n\n',
      {
        margin: [20, 0, 0, 0],
        ul: [
        'Precio neto.',
        'Los costos contenidos en esta propuesta incrementarán anualmente con el IPC.'
        ],
        fontSize: 18,
        style: 'text',
      },
      '\n\n',
      {
        text: 'La presente cotización tiene vigencia de 30 días.',
        style: 'textContac'
      },
      '\n\n',
      {
        text: 'CONTACTO\n\n',
        fontSize: 20,
        color: '#BEB500',
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
                alignment: 'right',
                text: 'Consulta Términos y Condiciones*',
                link: 'https://www.google.com',
                style: 'textContac',
              },
            ],
          },
        ],
      },
    ],
    styles: {
      textContacSub: {
        fontSize: 16,
        italics: true,
      },
      textContac: {
        font: 'Roboto2',
        bold: true,
        fontSize: 16,
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
        fontSize: 24,
        bold: true,
        color: 'black',
      },
      secondColumn: {
        alignment: 'center',
        fontSize: 20,
        color: '#BEB500',
      },
      header: {
        fontSize: 11,
        bold: true,
        color: '#062A51',
      },
      text: {
        italics: true,
        fontSize: 16,
        color: '#111D39',
        alignment: 'justify',
        lineHeight: 1.15,
      },
      subheader: {
        fontSize: 11,
        color: '#111D39',
        italics: true,
        alignment: 'justify',
        lineHeight: 1.15,
      },
      title: {
        fontSize: 24,
        color: '#00ABB3',
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
