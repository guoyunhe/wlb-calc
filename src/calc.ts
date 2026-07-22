export interface CalcParams {
  dailyWorkingHours: number;
  dailyCommuteHours: number;
  weeklyWorkingHours: number;
  weeklyWorkingDays: number;
  paidLeaveDaysPerYear: number;
  paidSickLeaveDaysPerYear: number;
  communicationOutsideWorkHours: number;
}

export const IDEAL_VALUES: CalcParams = {
  dailyWorkingHours: 8,
  dailyCommuteHours: 0,
  weeklyWorkingHours: 40,
  weeklyWorkingDays: 5,
  paidLeaveDaysPerYear: 20,
  paidSickLeaveDaysPerYear: 5,
  communicationOutsideWorkHours: 0,
};

export const PENALTY_WEIGHTS: Record<keyof CalcParams, number> = {
  dailyWorkingHours: 2,
  dailyCommuteHours: 3,
  weeklyWorkingHours: 0.5,
  weeklyWorkingDays: 10,
  paidLeaveDaysPerYear: 2,
  paidSickLeaveDaysPerYear: 4,
  communicationOutsideWorkHours: 5,
};

export default function calc({
  dailyWorkingHours,
  dailyCommuteHours,
  weeklyWorkingHours,
  weeklyWorkingDays,
  paidLeaveDaysPerYear,
  paidSickLeaveDaysPerYear,
  communicationOutsideWorkHours,
}: CalcParams) {
  let score = 100;

  score -= Math.max(0, dailyWorkingHours - IDEAL_VALUES.dailyWorkingHours) * PENALTY_WEIGHTS.dailyWorkingHours;
  score -= dailyCommuteHours * PENALTY_WEIGHTS.dailyCommuteHours;
  score -= Math.max(0, weeklyWorkingHours - IDEAL_VALUES.weeklyWorkingHours) * PENALTY_WEIGHTS.weeklyWorkingHours;
  score -= Math.max(0, weeklyWorkingDays - IDEAL_VALUES.weeklyWorkingDays) * PENALTY_WEIGHTS.weeklyWorkingDays;
  score -= Math.max(0, IDEAL_VALUES.paidLeaveDaysPerYear - paidLeaveDaysPerYear) * PENALTY_WEIGHTS.paidLeaveDaysPerYear;
  score -= Math.max(0, IDEAL_VALUES.paidSickLeaveDaysPerYear - paidSickLeaveDaysPerYear) * PENALTY_WEIGHTS.paidSickLeaveDaysPerYear;
  score -= communicationOutsideWorkHours * PENALTY_WEIGHTS.communicationOutsideWorkHours;

  return Math.max(0, Math.min(100, Math.round(score)));
}
