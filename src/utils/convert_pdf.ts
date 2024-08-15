import { Writable } from "node:stream";

export default class getBasePdf {
  const getPdf = async (): Promise<Buffer> => {
    try {
      const pdfDoc = generatePdf();
      const chunks: Buffer[] = [];

      const writableStream = new Writable({
        write(chunk: any, encoding: BufferEncoding, callback: () => void) {
          chunks.push(chunk);
          callback();
        }
      });

      await new Promise<void>((resolve, reject) => {
        writableStream.on('finish', resolve);
        writableStream.on('error', reject);
        pdfDoc.pipe(writableStream);
        pdfDoc.end();
      });

      const pdfBuffer = Buffer.concat(chunks);
      return pdfBuffer;
    } catch (error) {
      throw error;
    }
  };
}

