import type { Company } from "./types";

export const AU_COMPANIES: Company[] = [
  {
    id: "atlassian",
    name: {
      en: "Atlassian",
      zh: "Atlassian",
    },
    region: "AU",
    cities: [{ en: "Sydney" }],
    careerWebsite: "https://www.atlassian.com",
    linkedin: "atlassian",
    params: {
      dailyWorkingHours: 7,
      dailyCommuteHours: 0.5,
      dailyCommunicationOutsideWorkHours: 0.5,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 20,
      annualPaidSickLeaveDays: 20,
    },
  },
];
