import calc from "./calc";

describe("calc", () => {
  it("should calculate WLB score for typical work scenario", () => {
    const result = calc({
      dailyWorkingHours: 8,
      dailyCommuteHours: 2,
      dailyOutsideWorkCommunicationHours: 2,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 10,
      annualPaidSickLeaveDays: 5,
    });
    expect(result).toBe(65);
  });

  it("should return 100 for ideal work-life balance", () => {
    const result = calc({
      dailyWorkingHours: 7,
      dailyCommuteHours: 0,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 5,
      annualPaidLeaveDays: 20,
      annualPaidSickLeaveDays: 15,
    });
    expect(result).toBe(100);
  });

  it("should return lower score for longer working hours", () => {
    const result = calc({
      dailyWorkingHours: 12,
      dailyCommuteHours: 2,
      dailyOutsideWorkCommunicationHours: 5,
      weeklyWorkingDays: 6,
      annualPaidLeaveDays: 5,
      annualPaidSickLeaveDays: 3,
    });
    expect(result).toBeLessThan(50);
  });

  it("should cap score between 0 and 100", () => {
    const highScore = calc({
      dailyWorkingHours: 7,
      dailyCommuteHours: 0,
      dailyOutsideWorkCommunicationHours: 0,
      weeklyWorkingDays: 4,
      annualPaidLeaveDays: 30,
      annualPaidSickLeaveDays: 20,
    });
    expect(highScore).toBe(100);

    const lowScore = calc({
      dailyWorkingHours: 20,
      dailyCommuteHours: 5,
      dailyOutsideWorkCommunicationHours: 20,
      weeklyWorkingDays: 7,
      annualPaidLeaveDays: 0,
      annualPaidSickLeaveDays: 0,
    });
    expect(lowScore).toBe(0);
  });
});
