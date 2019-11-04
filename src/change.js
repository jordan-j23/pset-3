const readlineSync = require("readline-sync");

const MIN = 0.01;
const MAX = 0.99;
const QUARTER = 25;
const DIME = 10;
const NICKEL = 5;
const PENNY = 1;

const amount = Number(readlineSync.question("\nEnter a dollar amount: "));

if (Number.isNaN(amount)) {
  console.log("\nInvalid.")
} else if (amount < MIN || amount > MAX) {
  console.log("\nInvalid.")
} else {
  let convertAmount = Math.round(amount * 100);

  const quartersRemaining = Math.floor(convertAmount / QUARTER);
  convertAmount = convertAmount % QUARTER;
  const dimesRemaining = Math.floor(convertAmount / DIME);
  convertAmount = convertAmount % DIME;
  const nickelsRemaining = Math.floor(convertAmount / NICKEL);
  convertAmount = convertAmount % NICKEL;
  const penniesRemaining = Math.floor(convertAmount / PENNY);
  convertAmount = convertAmount % PENNY;
  console.log("\n" + quartersRemaining + " quarters, " + dimesRemaining + " dimes, " + nickelsRemaining + " nickels, and " + penniesRemaining + " pennies.");
}
