import type { Company, Region } from "./types";
import { US_COMPANIES } from "./us";
import { SE_COMPANIES } from "./se";
import { AU_COMPANIES } from "./au";
import { DE_COMPANIES } from "./de";
import { CA_COMPANIES } from "./ca";
import { CN_COMPANIES } from "./cn";

export type { Company, Region };

export const COMPANIES: Company[] = [
  ...US_COMPANIES,
  ...SE_COMPANIES,
  ...AU_COMPANIES,
  ...DE_COMPANIES,
  ...CA_COMPANIES,
  ...CN_COMPANIES,
];

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
