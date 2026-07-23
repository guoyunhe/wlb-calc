import type { CalcParams } from "../config";

export interface Company {
  id: string;
  name: string;
  region: string;
  city: string;
  params: CalcParams;
}

export interface Region {
  code: string;
  labelKey: string;
  cities: string[];
}
