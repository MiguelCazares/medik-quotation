export const PaymentMeans = {
  Wompi: 'wompi',
  Transfer: 'consignacion_transferencia',
  Payu: 'payu',
} as const;

export type TypeFrom<T> = T[keyof T];
export type PaymentMean = TypeFrom<typeof PaymentMeans>;
