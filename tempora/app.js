const grandClockTime = "15:00";

const clockTimes = [
  "14:45", // Clock 1
  "15:05", // Clock 2
  "15:00", // Clock 3
  "14:40"  // Clock 4
];

function parseTime(time) {
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
}

function calculateTimeDifference(clockTimes, grandClockTime) {
  const grandClockMinutes = parseTime(grandClockTime);
  return clockTimes.map(clockTime => parseTime(clockTime) - grandClockMinutes);
}

const timeDifferences = calculateTimeDifference(clockTimes, grandClockTime);
console.log(timeDifferences); // Output: [-15, 5, 0, -20]
