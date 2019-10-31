const readlineSync = require("readline-sync");

const MIN = 0.01;
const MAX = 0.99;
const quarters = 0.25;
const dimes = 0;1;
const nickels = 0.05;

const amount = Number(readlineSync.question("\nEnter a dollar amount: "));

if (Number.isNaN(amount)) {
  console.log("\nInvalid")
} else if (amount < MIN || amount > MAX) {
  console.log("\nInvalid")
} else {
  convertAmount = amount * 100;
  const quarters = Math.floor(convertAmount * 25);
  const dimes = Math.floor(convertAmount * 10);
  const nickels = Math.floor(convertAmount * 5);
  const pennies = Math.floor(convertAmount * 1);
}
console.log("\n" + quarters + " quarters, " + dimes + " dimes, " + nickels + "nickels, and " + pennies + " pennies.")
