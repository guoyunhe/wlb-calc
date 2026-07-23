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
  const existingRegion = acc.find((r) => r.code === company.region);
  if (existingRegion) {
    for (const city of company.cities) {
      if (!existingRegion.cities.some((c) => c.en === city.en)) {
        existingRegion.cities.push(city);
      }
    }
  } else {
    acc.push({
      code: company.region,
      labelKey: `region.${company.region}`,
      cities: [...company.cities],
    });
  }
  return acc;
}, [] as Region[]);
