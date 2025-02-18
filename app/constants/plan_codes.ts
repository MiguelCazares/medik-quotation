export const PlanCodes = {
  MonthlyFree: 'monthly_free',
  MonthlyBasic: 'monthly_basic',
  MonthlyMicro: 'monthly_micro',
  MonthlyBasicTwo: 'monthly_basic_two',
  MonthlyPyme: 'monthly_pyme',
  MonthlyPymeTwo: 'monthly_pyme_two',
  MonthlyPremium: 'monthly_premium',
  MonthlyPremiumTwo: 'monthly_premium_two',
  MonthlyPremiumThree: 'monthly_premium_three',
  MonthlyPremiumFour: 'monthly_premium_four',
  MonthlyBusiness: 'monthly_business',
  MonthlyBusinessTwo: 'monthly_business_2',
  MonthlyBusinessThree: 'monthly_business_3',
  MonthlyBusinessFour: 'monthly_business_4',
  MonthlyBusinessFive: 'monthly_business_5',
  MonthlyBusinessSix: 'monthly_business_6',
  MonthlyUnlimited: 'monthly_unlimited',
  AnnualFree: 'annual_free',
  AnnualMicro: 'annual_micro',
  AnnualBasic: 'annual_basic',
  AnnualBasicTwo: 'annual_basic_two',
  AnnualPyme: 'annual_pyme',
  AnnualPymeTwo: 'annual_pyme_two',
  AnnualPremium: 'annual_premium',
  AnnualPremiumTwo: 'annual_premium_two',
  AnnualPremiumThree: 'annual_premium_three',
  AnnualPremiumFour: 'annual_premium_four',
  AnnualBusiness: 'annual_business',
  AnnualBusinessTwo: 'annual_business_two',
  AnnualBusinessThree: 'annual_business_three',
  AnnualBusinessFour: 'annual_business_four',
  AnnualBusinessFive: 'annual_business_five',
  AnnualBusinessSix: 'annual_business_six',
  AnnualUnlimited: 'annual_unlimited',
} as const;

export type TypeFrom<T> = T[keyof T];
export type PlanCode = TypeFrom<typeof PlanCodes>;
