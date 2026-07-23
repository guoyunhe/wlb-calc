import type { Company } from "./types";

export const US_COMPANIES: Company[] = [
  {
    id: "google",
    name: {
      en: "Google",
      zh: "谷歌",
    },
    region: "US",
    city: "Mountain View",
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
    city: "Redmond",
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
    city: "Los Gatos",
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
    city: "San Francisco",
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
    city: "San Jose",
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
    city: "San Francisco",
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
