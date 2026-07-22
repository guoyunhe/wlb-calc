import calc from "./calc";

describe("calc", () => {
  it("should return 0", () => {
    expect(
      calc({
        dailyWorkingHours: 8,
        dailyCommuteHours: 2,
        weeklyWorkingHours: 40,
        weeklyWorkingDays: 5,
        paidLeaveDaysPerYear: 10,
        paidSickLeaveDaysPerYear: 5,
        communicationOutsideWorkHours: 2,
      }),
    ).toBe(0);
  });
});
