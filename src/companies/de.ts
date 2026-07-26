import type { Company } from "./types";

export const DE_COMPANIES: Company[] = [
  {
    id: "sap",
    name: {
      en: "SAP",
      zh: "SAP",
    },
    region: "DE",
    cities: [{ en: "Walldorf" }],
    careerWebsite: "https://www.sap.com",
    linkedin: "sap",
    params: {
      dailyWorkingHours: 7.5,
      dailyCommuteHours: 0.5,
      dailyCommunicationOutsideWorkHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 30,
      annualPaidSickLeaveDays: 25,
    },
  },
];
