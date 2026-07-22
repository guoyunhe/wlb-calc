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
  let result = 0;
  return result;
}
