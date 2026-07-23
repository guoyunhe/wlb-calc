import type { Company } from "./types";

export const CA_COMPANIES: Company[] = [
  {
    id: "shopify",
    name: "Shopify",
    region: "CA",
    city: "Ottawa",
    params: {
      dailyWorkingHours: 7,
      dailyCommuteHours: 0.5,
      dailyCommunicationOutsideWorkHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 20,
      annualPaidSickLeaveDays: 15,
    },
  },
];
