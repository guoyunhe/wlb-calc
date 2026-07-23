import calc from "./calc";

describe("calc", () => {
  it("should calculate WLB score for typical work scenario", () => {
    const result = calc({
      dailyWorkingHours: 8,
      dailyCommuteHours: 2,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 10,
      annualPaidSickLeaveDays: 5,
      dailyCommunicationOutsideWorkHours: 2,
    });
    expect(result).toBe(50);
  });

  it("should return 100 for ideal work-life balance", () => {
    const result = calc({
      dailyWorkingHours: 8,
      dailyCommuteHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 20,
      annualPaidSickLeaveDays: 5,
      dailyCommunicationOutsideWorkHours: 0,
    });
    expect(result).toBe(100);
  });

  it("should return lower score for longer working hours", () => {
    const result = calc({
      dailyWorkingHours: 12,
      dailyCommuteHours: 2,
      weeklyWorkingDays: 6,
      annualPaidLeaveDays: 5,
      annualPaidSickLeaveDays: 3,
      dailyCommunicationOutsideWorkHours: 5,
    });
    expect(result).toBeLessThan(50);
  });

  it("should cap score between 0 and 100", () => {
    const highScore = calc({
      dailyWorkingHours: 8,
      dailyCommuteHours: 0,
      weeklyWorkingDays: 4,
      annualPaidLeaveDays: 30,
      annualPaidSickLeaveDays: 10,
      dailyCommunicationOutsideWorkHours: 0,
    });
    expect(highScore).toBe(100);

    const lowScore = calc({
      dailyWorkingHours: 20,
      dailyCommuteHours: 5,
      weeklyWorkingDays: 7,
      annualPaidLeaveDays: 0,
      annualPaidSickLeaveDays: 0,
      dailyCommunicationOutsideWorkHours: 20,
    });
    expect(lowScore).toBe(0);
  });
});
