import type LocalizedName from "./LocalizedName";
import type CalcParams from "./CalcParams";
import type Office from "./Office";
import type Level from "./Level";

export default interface Company {
  id: string;
  name: LocalizedName;
  region: string;
  offices: Office[];
  params: CalcParams;
  careerWebsite: string;
  linkedin: string;
  discussion?: number;
  score?: number;
  level?: Level;
}
