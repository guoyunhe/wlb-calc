import type { CalcParams } from "./config";

export interface Company {
  id: string;
  name: string;
  region: string;
  city: string;
  params: CalcParams;
}

export const COMPANIES: Company[] = [
  {
    id: "google",
    name: "Google",
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
    name: "Microsoft",
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
    name: "Netflix",
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
    name: "Salesforce",
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
    name: "Adobe",
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
    id: "spotify",
    name: "Spotify",
    region: "SE",
    city: "Stockholm",
    params: {
      dailyWorkingHours: 7,
      dailyCommuteHours: 0.5,
      dailyCommunicationOutsideWorkHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 25,
      annualPaidSickLeaveDays: 25,
    },
  },
  {
    id: "atlassian",
    name: "Atlassian",
    region: "AU",
    city: "Sydney",
    params: {
      dailyWorkingHours: 7,
      dailyCommuteHours: 0.5,
      dailyCommunicationOutsideWorkHours: 0.5,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 20,
      annualPaidSickLeaveDays: 20,
    },
  },
  {
    id: "github",
    name: "GitHub",
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
  {
    id: "sap",
    name: "SAP",
    region: "DE",
    city: "Walldorf",
    params: {
      dailyWorkingHours: 7.5,
      dailyCommuteHours: 0.5,
      dailyCommunicationOutsideWorkHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 30,
      annualPaidSickLeaveDays: 25,
    },
  },
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

export interface Region {
  code: string;
  labelKey: string;
  cities: string[];
}

export const REGIONS: Region[] = COMPANIES.reduce((acc, company) => {
  const existingRegion = acc.find((r) => r.code === company.region);
  if (existingRegion) {
    if (!existingRegion.cities.includes(company.city)) {
      existingRegion.cities.push(company.city);
    }
  } else {
    acc.push({
      code: company.region,
      labelKey: `region.${company.region}`,
      cities: [company.city],
    });
  }
  return acc;
}, [] as Region[]);
