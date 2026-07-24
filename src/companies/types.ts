import type { CalcParams } from "../config";

export interface LocalizedName {
  en: string;
  zh?: string;
}

export interface Company {
  id: string;
  name: LocalizedName;
  region: string;
  cities: LocalizedName[];
  params: CalcParams;
}

export interface CityWithCompanyCount extends LocalizedName {
  companyCount: number;
}

export interface Region {
  code: string;
  labelKey: string;
  cities: CityWithCompanyCount[];
  companyCount: number;
}
