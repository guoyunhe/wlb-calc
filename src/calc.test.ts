import calc from "./calc";

describe("calc", () => {
  it("should calculate WLB score for typical work scenario", () => {
    const result = calc({
      dailyWorkingHours: 8,
      dailyCommuteHours: 2,
      weeklyWorkingHours: 40,
      weeklyWorkingDays: 5,
      paidLeaveDaysPerYear: 10,
      paidSickLeaveDaysPerYear: 5,
      communicationOutsideWorkHours: 2,
    });
    expect(result).toBe(64);
  });

  it("should return 100 for ideal work-life balance", () => {
    const result = calc({
      dailyWorkingHours: 8,
      dailyCommuteHours: 0,
      weeklyWorkingHours: 40,
      weeklyWorkingDays: 5,
      paidLeaveDaysPerYear: 20,
      paidSickLeaveDaysPerYear: 5,
      communicationOutsideWorkHours: 0,
    });
    expect(result).toBe(100);
  });

  it("should return lower score for longer working hours", () => {
    const result = calc({
      dailyWorkingHours: 12,
      dailyCommuteHours: 2,
      weeklyWorkingHours: 60,
      weeklyWorkingDays: 6,
      paidLeaveDaysPerYear: 5,
      paidSickLeaveDaysPerYear: 3,
      communicationOutsideWorkHours: 5,
    });
    expect(result).toBeLessThan(50);
  });

  it("should cap score between 0 and 100", () => {
    const highScore = calc({
      dailyWorkingHours: 8,
      dailyCommuteHours: 0,
      weeklyWorkingHours: 35,
      weeklyWorkingDays: 4,
      paidLeaveDaysPerYear: 30,
      paidSickLeaveDaysPerYear: 10,
      communicationOutsideWorkHours: 0,
    });
    expect(highScore).toBe(100);

    const lowScore = calc({
      dailyWorkingHours: 20,
      dailyCommuteHours: 5,
      weeklyWorkingHours: 100,
      weeklyWorkingDays: 7,
      paidLeaveDaysPerYear: 0,
      paidSickLeaveDaysPerYear: 0,
      communicationOutsideWorkHours: 20,
    });
    expect(lowScore).toBe(0);
  });
});
