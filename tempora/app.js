const grandClockTime = "15:00";

const clockTimes = [
  "14:45", // Clock 1
  "15:05", // Clock 2
  "15:00", // Clock 3
  "14:55"  // Clock 4
];

/**
 * Parses a time string into minutes.
 * @param {string} time - The time string in HH:MM format.
 * @returns {number} - The total minutes.
 */
function parseTime(time) {
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
}

/**
 * Calculates the time differences between multiple clock times and a grand clock time.
 * @param {Array<string>} clockTimes - An array of clock times in HH:MM format.
 * @param {string} grandClockTime - The grand clock time in HH:MM format.
 * @returns {Array<number>} - An array of time differences in minutes.
 */
function calculateTimeDifference(clockTimes, grandClockTime) {
  const grandClockMinutes = parseTime(grandClockTime);
  return clockTimes.map(clockTime => parseTime(clockTime) - grandClockMinutes);
}

const timeDifferences = calculateTimeDifference(clockTimes, grandClockTime);
console.log(timeDifferences); // Output: [-15, 5, 0, -20]
