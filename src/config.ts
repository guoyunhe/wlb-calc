export interface CalcParams {
  dailyWorkingHours: number;
  dailyCommuteHours: number;
  dailyCommunicationOutsideWorkHours: number;
  weeklyWorkingDays: number;
  paidLeaveDaysPerYear: number;
  paidSickLeaveDaysPerYear: number;
}

export type PenaltyType = "excess" | "deficit" | "direct";

export type Unit = "day" | "hour";

export interface ParamConfig {
  key: keyof CalcParams;
  ideal: number;
  penaltyWeight: number;
  penaltyType: PenaltyType;
  unit: Unit;
  min: number;
  max: number;
  step: number;
}

export const CALC_CONFIG: ParamConfig[] = [
  {
    key: "dailyWorkingHours",
    ideal: 8,
    penaltyWeight: 10,
    penaltyType: "excess",
    unit: "hour",
    min: 0,
    max: 16,
    step: 0.5,
  },
  {
    key: "dailyCommuteHours",
    ideal: 1,
    penaltyWeight: 10,
    penaltyType: "direct",
    unit: "hour",
    min: 0,
    max: 6,
    step: 0.5,
  },
  {
    key: "dailyCommunicationOutsideWorkHours",
    ideal: 0,
    penaltyWeight: 5,
    penaltyType: "direct",
    unit: "hour",
    min: 0,
    max: 6,
    step: 0.5,
  },
  {
    key: "weeklyWorkingDays",
    ideal: 5,
    penaltyWeight: 30,
    penaltyType: "excess",
    unit: "day",
    min: 0,
    max: 7,
    step: 0.5,
  },
  {
    key: "paidLeaveDaysPerYear",
    ideal: 20,
    penaltyWeight: 2,
    penaltyType: "deficit",
    unit: "day",
    min: 0,
    max: 30,
    step: 1,
  },
  {
    key: "paidSickLeaveDaysPerYear",
    ideal: 10,
    penaltyWeight: 4,
    penaltyType: "deficit",
    unit: "day",
    min: 0,
    max: 30,
    step: 1,
  },
];

export const IDEAL_VALUES: CalcParams = CALC_CONFIG.reduce(
  (acc, config) => {
    acc[config.key] = config.ideal;
    return acc;
  },
  {} as CalcParams
);

export const PENALTY_WEIGHTS: Record<keyof CalcParams, number> = CALC_CONFIG.reduce(
  (acc, config) => {
    acc[config.key] = config.penaltyWeight;
    return acc;
  },
  {} as Record<keyof CalcParams, number>
);

export interface ScoreLevel {
  minScore: number;
  color: string;
  labelKey: string;
  bg: {
    light: string;
    dark: string;
  };
  textColor: {
    light: string;
    dark: string;
  };
}

export const SCORE_LEVELS: ScoreLevel[] = [
  {
    minScore: 80,
    color: "green",
    labelKey: "score.excellent",
    bg: {
      light: "#ecfdf5",
      dark: "#0f172a",
    },
    textColor: {
      light: "#059669",
      dark: "#4ade80",
    },
  },
  {
    minScore: 60,
    color: "yellow",
    labelKey: "score.good",
    bg: {
      light: "#fefce8",
      dark: "#1e1b4b",
    },
    textColor: {
      light: "#d97706",
      dark: "#fbbf24",
    },
  },
  {
    minScore: 40,
    color: "orange",
    labelKey: "score.average",
    bg: {
      light: "#fff7ed",
      dark: "#431407",
    },
    textColor: {
      light: "#ea580c",
      dark: "#fb923c",
    },
  },
  {
    minScore: 0,
    color: "red",
    labelKey: "score.poor",
    bg: {
      light: "#fef2f2",
      dark: "#450a0a",
    },
    textColor: {
      light: "#dc2626",
      dark: "#f87171",
    },
  },
];
