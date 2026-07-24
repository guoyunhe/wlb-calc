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
  {
    id: "zalando-cn",
    name: {
      en: "Zalando",
      zh: "嘉兰朵",
    },
    region: "CN",
    cities: [C.shenzhen],
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 0.5,
      dailyCommunicationOutsideWorkHours: 0.5,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 12,
      annualPaidSickLeaveDays: 10,
    },
  },
  {
    id: "flexport-cn",
    name: {
      en: "Flexport",
      zh: "飞协博",
    },
    region: "CN",
    cities: [C.shenzhen],
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 0.5,
      dailyCommunicationOutsideWorkHours: 0.5,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 12,
      annualPaidSickLeaveDays: 10,
    },
  },
  {
    id: "qualcomm-cn",
    name: {
      en: "Qualcomm",
      zh: "高通",
    },
    region: "CN",
    cities: [C.beijing, C.shanghai, C.shenzhen, C.xian, C.wuxi],
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 0.5,
      dailyCommunicationOutsideWorkHours: 0.5,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 15,
      annualPaidSickLeaveDays: 12,
    },
  },
];
