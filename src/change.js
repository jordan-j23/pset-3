const readlineSync = require("readline-sync");

const MIN = 0.01;
const MAX = 0.99;

let quarters = 0;
let dimes = 0;
let nickels = 0;
let pennies =0;

const amount = Number(readlineSync.question("\nEnter a dollar amount: "));

if (Number.isNaN(amount)) {
  console.log("\nInvalid")  // print your error message here
} else if (amount < MIN || amount > MAX) {
  console.log("\nInvalid") // print your error message here
} else {
    // write your code for making change here
}
