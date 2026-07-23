import type { Company } from "./types";

export const US_COMPANIES: Company[] = [
  {
    id: "google",
    name: {
      en: "Google",
      zh: "谷歌",
    },
    region: "US",
    cities: [{ en: "Mountain View" }, { en: "New York" }, { en: "Seattle" }],
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 0.5,
      dailyCommunicationOutsideWorkHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 25,
      annualPaidSickLeaveDays: 15,
    },
  },
  {
    id: "microsoft",
    name: {
      en: "Microsoft",
      zh: "微软",
    },
    region: "US",
    cities: [{ en: "Redmond" }],
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 0.5,
      dailyCommunicationOutsideWorkHours: 0.5,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 20,
      annualPaidSickLeaveDays: 10,
    },
  },
  {
    id: "netflix",
    name: {
      en: "Netflix",
      zh: "网飞",
    },
    region: "US",
    cities: [{ en: "Los Gatos" }],
    params: {
      dailyWorkingHours: 7,
      dailyCommuteHours: 0.5,
      dailyCommunicationOutsideWorkHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 30,
      annualPaidSickLeaveDays: 15,
    },
  },
  {
    id: "salesforce",
    name: {
      en: "Salesforce",
      zh: "Salesforce",
    },
    region: "US",
    cities: [{ en: "San Francisco" }],
    params: {
      dailyWorkingHours: 7.5,
      dailyCommuteHours: 0.5,
      dailyCommunicationOutsideWorkHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 25,
      annualPaidSickLeaveDays: 10,
    },
  },
  {
    id: "adobe",
    name: {
      en: "Adobe",
      zh: "奥多比",
    },
    region: "US",
    cities: [{ en: "San Jose" }],
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 0.5,
      dailyCommunicationOutsideWorkHours: 0.5,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 20,
      annualPaidSickLeaveDays: 15,
    },
  },
  {
    id: "github",
    name: {
      en: "GitHub",
      zh: "GitHub",
    },
    region: "US",
    cities: [{ en: "San Francisco" }],
    params: {
      dailyWorkingHours: 7,
      dailyCommuteHours: 0.3,
      dailyCommunicationOutsideWorkHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 30,
      annualPaidSickLeaveDays: 15,
    },
  },
];
