// Define the grand clock time
const grandClockTime = "15:00";

// Define an array of clock times
const clockTimes = [
  "14:45", // Clock 1
  "15:05", // Clock 2
  "15:00", // Clock 3
  "14:55"  // Clock 4
];

// Function to parse a time string into total minutes
/**
 * Parses a time string into minutes.
 * @param {string} time - The time string in HH:MM format.
 * @returns {number} - The total minutes.
 */
function parseTime(time) {
  // Split the time string into hours and minutes and convert them to numbers
  const [hours, minutes] = time.split(":").map(Number);
  // Calculate the total minutes
  return hours * 60 + minutes;
}

// Function to calculate the time differences between multiple clock times and a grand clock time
/**
 * Calculates the time differences between multiple clock times and a grand clock time.
 * @param {Array<string>} clockTimes - An array of clock times in HH:MM format.
 * @param {string} grandClockTime - The grand clock time in HH:MM format.
 * @returns {Array<number>} - An array of time differences in minutes.
 */
function calculateTimeDifference(clockTimes, grandClockTime) {
  // Parse the grand clock time into total minutes
  const grandClockMinutes = parseTime(grandClockTime);
  // Map each clock time to its difference in minutes from the grand clock time
  return clockTimes.map(clockTime => parseTime(clockTime) - grandClockMinutes);
}

// Calculate the time differences and log the result
const timeDifferences = calculateTimeDifference(clockTimes, grandClockTime);
console.log(timeDifferences); // Output: [-15, 5, 0, -20]
