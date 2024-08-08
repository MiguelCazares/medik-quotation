export const TokenByTypes = {
  nit: 'nit',
  platformUserId: 'platform_user_id',
} as const;

export type TypeFrom<T> = T[keyof T];
export type TokenByType = TypeFrom<typeof TokenByTypes>;
