export interface CalcParams {
  dailyWorkingHours: number;
  dailyCommuteHours: number;
  weeklyWorkingHours: number;
  weeklyWorkingDays: number;
  paidLeaveDaysPerYear: number;
  paidSickLeaveDaysPerYear: number;
  communicationOutsideWorkHours: number;
}

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

  score -= Math.max(0, dailyWorkingHours - 8) * 2;
  score -= dailyCommuteHours * 3;
  score -= Math.max(0, weeklyWorkingHours - 40) * 0.5;
  score -= Math.max(0, weeklyWorkingDays - 5) * 10;
  score -= Math.max(0, 20 - paidLeaveDaysPerYear) * 2;
  score -= Math.max(0, 5 - paidSickLeaveDaysPerYear) * 4;
  score -= communicationOutsideWorkHours * 5;

  return Math.max(0, Math.min(100, Math.round(score)));
}
