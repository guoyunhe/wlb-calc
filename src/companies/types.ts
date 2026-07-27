import type LocalizedName from "../types/LocalizedName";

export interface CityWithCompanyCount extends LocalizedName {
  companyCount: number;
}

export interface Region {
  code: string;
  labelKey: string;
  cities: CityWithCompanyCount[];
  companyCount: number;
}
