import type { Company, Region, LocalizedName } from "./types";
import { US_COMPANIES } from "./us";
import { SE_COMPANIES } from "./se";
import { AU_COMPANIES } from "./au";
import { DE_COMPANIES } from "./de";
import { CA_COMPANIES } from "./ca";
import { CN_COMPANIES } from "./cn";

export type { Company, Region, LocalizedName };
export { localizedLabel, cityKey, companyHasCity } from "./locale";

export const COMPANIES: Company[] = [
  ...US_COMPANIES,
  ...SE_COMPANIES,
  ...AU_COMPANIES,
  ...DE_COMPANIES,
  ...CA_COMPANIES,
  ...CN_COMPANIES,
];

export const REGIONS: Region[] = COMPANIES.reduce((acc, company) => {
  let existingRegion = acc.find((r) => r.code === company.region);
  if (existingRegion) {
    existingRegion.companyCount++;
    for (const city of company.cities) {
      const existingCity = existingRegion.cities.find((c) => c.en === city.en);
      if (existingCity) {
        existingCity.companyCount++;
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
  region.cities.sort((a, b) => b.companyCount - a.companyCount);
});
