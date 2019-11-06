const readlineSync = require("readline-sync");

const number = Number(readlineSync.question("\nEnter three numbers."));
const numbFirst= Number(readlineSync.question("\n"));
const numbSec = Number(readlineSync.question(""));
const numbTrd = Number(readlineSync.question(""));

if (Number.isNaN(numbFirst) || Number.isNaN(numbSec) || Number.isNaN(numbTrd)) {
console.log("\nInvalid.");
}
else if ((numbFirst < Number.MIN_SAFE_INTEGER || numbFirst > Number.MAX_SAFE_INTEGER) || (numbSec < Number.MIN_SAFE_INTEGER || numbSec > Number.MAX_SAFE_INTEGER ) || (numbTrd < Number.MIN_SAFE_INTEGER || numbTrd > Number.MAX_SAFE_INTEGER)) {
  console.log("\nInvalid.");
}
else {
  if (numbFirst<numbSec && numbSec<numbTrd) {
  console.log("\nStrictly increasing.");
  }
  else if (numbFirst<=numbSec && numbSec<=numbTrd) {
  console.log("\nIncreasing.");
  }
  else if (numbFirst==numbSec && numbSec==numbTrd) {
  console.log("\nEqual.");
  }
  else if (numbFirst>=numbSec && numbSec>=numbTrd) {
  console.log("\nDecreasing.");
  }
  else if (numbFirst>numbSec && numbSec>numbTrd) {
  console.log("\nStrictly decreasing.");
  }
  else {
    console.log("\nUnordered.");
  }
}
