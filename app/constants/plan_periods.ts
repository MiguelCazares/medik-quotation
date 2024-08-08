export const PlanPeriods = {
  Monthly: 'mensual',
  Annual: 'anual',
} as const;

export type TypeFrom<T> = T[keyof T];
export type PlanPeriod = TypeFrom<typeof PlanPeriods>;
