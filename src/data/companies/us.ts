import type Company from "../../types/Company";
import type LocalizedName from "../../types/LocalizedName";

const US_CITIES = {
  mountainView: { en: "Mountain View", zh: "山景城" },
  newYork: { en: "New York", zh: "纽约" },
  seattle: { en: "Seattle", zh: "西雅图" },
  redmond: { en: "Redmond", zh: "雷德蒙德" },
  losGatos: { en: "Los Gatos", zh: "洛斯加托斯" },
  sanFrancisco: { en: "San Francisco", zh: "旧金山" },
  sanJose: { en: "San Jose", zh: "圣何塞" },
  remote: { en: "Remote", zh: "远程" },
} as const satisfies Record<string, LocalizedName>;

const C = US_CITIES;

export const US_COMPANIES: Company[] = [
  {
    id: "google-us",
    name: {
      en: "Google",
      zh: "谷歌",
    },
    region: "US",
    cities: [C.mountainView, C.newYork, C.seattle],
    careerWebsite: "https://www.google.com",
    linkedin: "google",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 0.5,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 25,
      annualPaidSickLeaveDays: 15,
    },
  },
  {
    id: "microsoft-us",
    name: {
      en: "Microsoft",
      zh: "微软",
    },
    region: "US",
    cities: [C.redmond],
    careerWebsite: "https://www.microsoft.com",
    linkedin: "microsoft",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 0.5,
      dailyOutsideWorkCommunicationHours: 0.5,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 20,
      annualPaidSickLeaveDays: 10,
    },
  },
  {
    id: "netflix-us",
    name: {
      en: "Netflix",
      zh: "网飞",
    },
    region: "US",
    cities: [C.losGatos],
    careerWebsite: "https://www.netflix.com",
    linkedin: "netflix",
    params: {
      dailyWorkingHours: 7,
      dailyCommuteHours: 0.5,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 30,
      annualPaidSickLeaveDays: 15,
    },
  },
  {
    id: "salesforce-us",
    name: {
      en: "Salesforce",
      zh: "Salesforce",
    },
    region: "US",
    cities: [C.sanFrancisco],
    careerWebsite: "https://www.salesforce.com",
    linkedin: "salesforce",
    params: {
      dailyWorkingHours: 7.5,
      dailyCommuteHours: 0.5,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 25,
      annualPaidSickLeaveDays: 10,
    },
  },
  {
    id: "adobe-us",
    name: {
      en: "Adobe",
      zh: "奥多比",
    },
    region: "US",
    cities: [C.sanJose],
    careerWebsite: "https://www.adobe.com",
    linkedin: "adobe",
    params: {
      dailyWorkingHours: 8,
      dailyCommuteHours: 0.5,
      dailyOutsideWorkCommunicationHours: 0.5,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 20,
      annualPaidSickLeaveDays: 15,
    },
  },
  {
    id: "github-us",
    name: {
      en: "GitHub",
      zh: "GitHub",
    },
    region: "US",
    cities: [C.sanFrancisco],
    careerWebsite: "https://www.github.com",
    linkedin: "github",
    params: {
      dailyWorkingHours: 7,
      dailyCommuteHours: 0.3,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 30,
      annualPaidSickLeaveDays: 15,
    },
  },
];
