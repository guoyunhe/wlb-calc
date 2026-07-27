import type LocalizedName from "./LocalizedName";
import type CalcParams from "./CalcParams";
import type { ScoreLevel } from "../config";

export default interface Company {
  id: string;
  name: LocalizedName;
  region: string;
  cities: LocalizedName[];
  params: CalcParams;
  careerWebsite: string;
  linkedin: string;
  discussion?: number;
  score?: number;
  level?: ScoreLevel;
}
