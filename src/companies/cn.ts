import type { Company } from "./types";
import { CN_CITIES as C } from "./cn-cities";

export const CN_COMPANIES: Company[] = [
  {
    id: "apple-cn",
    name: {
      en: "Apple",
      zh: "苹果",
    },
    region: "CN",
    cities: [C.beijing, C.shanghai, C.shenzhen],
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 0.5,
      dailyCommunicationOutsideWorkHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 20,
      annualPaidSickLeaveDays: 15,
    },
  },
  {
    id: "amazon-cn",
    name: {
      en: "Amazon",
      zh: "亚马逊",
    },
    region: "CN",
    cities: [C.beijing, C.guangzhou, C.shanghai, C.shenzhen],
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 0.5,
      dailyCommunicationOutsideWorkHours: 0.5,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 18,
      annualPaidSickLeaveDays: 10,
    },
  },
  {
    id: "intel-cn",
    name: {
      en: "Intel",
      zh: "英特尔",
    },
    region: "CN",
    cities: [C.beijing, C.chengdu, C.shanghai, C.shenzhen],
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
    id: "oracle-cn",
    name: {
      en: "Oracle",
      zh: "甲骨文",
    },
    region: "CN",
    cities: [C.beijing, C.chengdu, C.guangzhou, C.shanghai, C.shenzhen],
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 0.5,
      dailyCommunicationOutsideWorkHours: 0.5,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 18,
      annualPaidSickLeaveDays: 15,
    },
  },
  {
    id: "morgan-stanley-cn",
    name: {
      en: "Morgan Stanley",
      zh: "摩根士丹利",
    },
    region: "CN",
    cities: [C.beijing, C.shanghai],
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
    id: "microsoft-cn",
    name: {
      en: "Microsoft",
      zh: "微软",
    },
    region: "CN",
    cities: [C.beijing, C.shanghai, C.shenzhen, C.suzhou],
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 0.5,
      dailyCommunicationOutsideWorkHours: 0.5,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 20,
      annualPaidSickLeaveDays: 10,
    },
  },
];
