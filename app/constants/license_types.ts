export const LicenseTypes = {
  Licence: 'licence',
  Documents: 'documents',
} as const;

export type TypeFrom<T> = T[keyof T];
export type LicenseType = TypeFrom<typeof LicenseTypes>;
