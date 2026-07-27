import type City from "./City";

export default interface Region {
  code: string;
  labelKey: string;
  cities: City[];
  companyCount: number;
}
