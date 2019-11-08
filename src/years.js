const readlineSync = require("readline-sync");

const YEAR_MIN = 0;

const YEAR_MAX = Number.MAX_SAFE_INTEGER;

const year = Number(readlineSync.question("\nEnter a year: "));

if (year % 4 === 0) {
  console.log("\n" + year + " is a leap year.");
} else if (year <= YEAR_MIN || year >= YEAR_MAX) {
  console.log("\nInvalid.");
} else {
  console.log("\n" + year + " is not a leap year.");
}
