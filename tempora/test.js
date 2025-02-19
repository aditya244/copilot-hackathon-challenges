const { calculateTimeDifference } = require('./tempora');

describe('calculateTimeDifference', () => {
  it('should calculate the correct time differences', () => {
    const clockTimes = ["14:45", "15:05", "15:00", "14:40"];
    const grandClockTime = "15:00";
    const expectedDifferences = [-15, 5, 0, -20];
    const result = calculateTimeDifference(clockTimes, grandClockTime);
    expect(result).toEqual(expectedDifferences);
  });

  it('should handle edge cases correctly', () => {
    const clockTimes = ["00:00", "23:59", "12:00"];
    const grandClockTime = "12:00";
    const expectedDifferences = [-720, 719, 0];
    const result = calculateTimeDifference(clockTimes, grandClockTime);
    expect(result).toEqual(expectedDifferences);
  });

  it('should return an empty array if no clock times are provided', () => {
    const clockTimes = [];
    const grandClockTime = "15:00";
    const expectedDifferences = [];
    const result = calculateTimeDifference(clockTimes, grandClockTime);
    expect(result).toEqual(expectedDifferences);
  });
});
