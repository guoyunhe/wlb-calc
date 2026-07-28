import type Company from "../../types/Company";
import type Region from "../../types/Region";

import { US_COMPANIES } from "./us";
import { CN_COMPANIES } from "./cn";
import calc, { getScoreLevel } from "../../calc";

export type { Region };
export { localizedLabel, cityKey, companyHasCity } from "./locale";

export const COMPANIES: Company[] = [...CN_COMPANIES, ...US_COMPANIES];

COMPANIES.forEach((company) => {
  company.score = calc(company.params);
  company.level = getScoreLevel(company.score);
});

COMPANIES.sort((a, b) => (b.score ?? 0) - (a.score ?? 0));

export const REGIONS: Region[] = COMPANIES.reduce((acc, company) => {
  let existingRegion = acc.find((r) => r.code === company.region);
  if (existingRegion) {
    existingRegion.companyCount++;
    for (const city of company.cities) {
      const existingCity = existingRegion.cities.find((c) => c.en === city.en);
      if (existingCity) {
        existingCity.companyCount!++;
      } else {
        existingRegion.cities.push({ ...city, companyCount: 1 });
      }
    }
  } else {
    acc.push({
      code: company.region,
      labelKey: `region.${company.region}`,
      cities: company.cities.map((city) => ({ ...city, companyCount: 1 })),
      companyCount: 1,
    });
  }
  return acc;
}, [] as Region[]).sort((a, b) => b.companyCount - a.companyCount);

REGIONS.forEach((region) => {
  region.cities.sort((a, b) => b.companyCount! - a.companyCount!);
});

REGIONS.sort((a, b) => b.companyCount - a.companyCount);
