const readlineSync = require("readline-sync");

const GRADE_MIN = 0;
const GRADE_MAX = 100;

const grade = readlineSync.question("\nEnter a grade: ");

if (grade >= 90 && grade <= 100) {
  console.log("\nYou received an A.");
} else if (grade >= 80 && grade <= 89) {
  console.log("\nYou received a B.");
} else if (grade >= 70 && grade <= 79) {
  console.log("\nYou received a C.");
} else if (grade >= 60 && grade <= 69) {
  console.log("\nYou received a D.");
} else if (grade >= 0 && grade <= 59) {
  console.log("\nYou received an F.");
} else {
  console.log("\nInvalid.")
}
