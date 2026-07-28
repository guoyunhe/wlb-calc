import type LocalizedName from "./LocalizedName";

export default interface City {
  id: string;
  name: LocalizedName;
  companyCount?: number;
}
