export const RegenByTypes = {
  Save: 'save',
  ObtainXml: 'xml',
  Resend: 'resend',
} as const;

export type TypeFrom<T> = T[keyof T];
export type RegenByType = TypeFrom<typeof RegenByTypes>;
