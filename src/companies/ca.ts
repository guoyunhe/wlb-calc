import type Company from "../types/Company";

export const CA_COMPANIES: Company[] = [
  {
    id: "shopify",
    name: {
      en: "Shopify",
      zh: "Shopify",
    },
    region: "CA",
    cities: [{ en: "Ottawa" }],
    careerWebsite: "https://www.shopify.com",
    linkedin: "shopify",
    params: {
      dailyWorkingHours: 7,
      dailyCommuteHours: 0.5,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 20,
      annualPaidSickLeaveDays: 15,
    },
  },
];
