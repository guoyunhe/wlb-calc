export interface CalcParams {
    dailyWorkingHours: number;
    dailyCommuteHours: number;
    weeklyWorkingHours: number;
    weeklyWorkingDays: number;
    paidLeaveDaysPerYear: number;
    paidSickLeaveDaysPerYear: number;
    communicationOutsideWorkHours: number;
}

export default function calc(params: CalcParams) {
    return 0;
}