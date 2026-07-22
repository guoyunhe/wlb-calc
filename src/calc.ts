export interface CalcParams {
  dailyWorkingHours: number;
  dailyCommuteHours: number;
  dailyCommunicationOutsideWorkHours: number;
  weeklyWorkingDays: number;
  paidLeaveDaysPerYear: number;
  paidSickLeaveDaysPerYear: number;
}

export const IDEAL_VALUES: CalcParams = {
  dailyWorkingHours: 8,
  dailyCommuteHours: 1,
  weeklyWorkingDays: 5,
  paidLeaveDaysPerYear: 20,
  paidSickLeaveDaysPerYear: 5,
  dailyCommunicationOutsideWorkHours: 0,
};

export const PENALTY_WEIGHTS: Record<keyof CalcParams, number> = {
  dailyWorkingHours: 10,
  dailyCommuteHours: 10,
  dailyCommunicationOutsideWorkHours: 5,
  weeklyWorkingDays: 40,
  paidLeaveDaysPerYear: 2,
  paidSickLeaveDaysPerYear: 4,
};

export default function calc({
  dailyWorkingHours,
  dailyCommuteHours,
  weeklyWorkingDays,
  paidLeaveDaysPerYear,
  paidSickLeaveDaysPerYear,
  dailyCommunicationOutsideWorkHours,
}: CalcParams) {
  let score = 100;

  score -=
    Math.max(0, dailyWorkingHours - IDEAL_VALUES.dailyWorkingHours) *
    PENALTY_WEIGHTS.dailyWorkingHours;
  score -= dailyCommuteHours * PENALTY_WEIGHTS.dailyCommuteHours;
  score -=
    Math.max(0, weeklyWorkingDays - IDEAL_VALUES.weeklyWorkingDays) *
    PENALTY_WEIGHTS.weeklyWorkingDays;
  score -=
    Math.max(0, IDEAL_VALUES.paidLeaveDaysPerYear - paidLeaveDaysPerYear) *
    PENALTY_WEIGHTS.paidLeaveDaysPerYear;
  score -=
    Math.max(0, IDEAL_VALUES.paidSickLeaveDaysPerYear - paidSickLeaveDaysPerYear) *
    PENALTY_WEIGHTS.paidSickLeaveDaysPerYear;
  score -= dailyCommunicationOutsideWorkHours * PENALTY_WEIGHTS.dailyCommunicationOutsideWorkHours;

  return Math.max(0, Math.min(100, Math.round(score)));
}
