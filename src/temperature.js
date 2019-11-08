const readlineSync = require("readline-sync");

const temperature = Number(readlineSync.question("\nEnter a temperature: "));
const scale = String(readlineSync.question("Enter a scale: "))

const FAHRENHEIT_FREEZING = 32;
const FAHRENHEIT_BOILING = 212;
const CELSIUS_FREEZING = 0;
const CELSIUS_BOILING = 100;
const KELVIN_FREEZING = 273;
const KELVIN_BOILING = 373;


if (temperature < (Number.MIN_SAFE_INTEGER) || temperature > Number.MAX_SAFE_INTEGER) {
      console.log("\nInvalid.")

} else if (temperature <= FAHRENHEIT_FREEZING && scale == "F") {
      console.log("\nSolid.")

} else if ((temperature > FAHRENHEIT_FREEZING && temperature < FAHRENHEIT_BOILING) && scale == "F") {
      console.log("\nLiquid")

} else if (temperature >= FAHRENHEIT_BOILING && scale == "F") {
      console.log("\nGas.")

} else if (temperature <= CELSIUS_FREEZING && scale == "C") {
      console.log("\nSolid.")

} else if ((temperature > CELSIUS_FREEZING && temperature < CELSIUS_BOILING) && scale == "C") {
      console.log("\nLiquid.")

} else if (temperature >= CELSIUS_BOILING && scale == "C") {
      console.log("\nGas.")

} else if (temperature <= KELVIN_FREEZING && scale == "K") {
      console.log("\nSolid.")

} else if ((temperature > KELVIN_FREEZING && temperature < KELVIN_BOILING) && scale == "K") {
      console.log("\nLiquid.")

} else if (temperature >= KELVIN_BOILING && scale == "K") {
      console.log("\nGas.")

} else {
      console.log("\nInvalid.")
}
