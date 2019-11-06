const readlineSync = require("readline-sync");

const integer = Number(readlineSync.question("\nEnter an integer: "));

if (!Number.isInteger(integer)) {
  console.log("\nInvalid.")
} else if (integer < Number.MIN_SAFE_INTEGER || integer > Number.MAX_SAFE_INTEGER){
  console.log("\nInvalid.")
} else if (integer %2==0) {
  console.log("\nEven.")
} else {
  console.log("\nOdd.")
}
