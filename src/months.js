const readlineSync = require("readline-sync");

let month = (readlineSync.question("\nEnter a month: "));
let days = month.toLowerCase();

switch (days){
  case (days = "jan" || "january" ):
    console.log("\n31 days.");
    break;
  case (days = "feb" || "february"):
    console.log("\n28 or 29 days.");
    break;
  case (days = "mar" || "march" ):
    console.log("\n31 days.");
    break;
  case (days = "apr" || "april"):
    console.log("\n30 days.");
    break;
  case (days = "may"):
    console.log("\n31 days.");
    break;
  case (days = "jun" || "june"):
    console.log("\n30 days.");
    break;
  case (days = "jul" || "july"):
    console.log("\n31 days.");
    break;
  case (days = "aug" || "august"):
    console.log("\n31 days.");
    break;
  case (days = "sep" || "september"):
    console.log("\n30 days.");
    break;
  case (days = "oct" || "october"):
    console.log("\n31 days.");
    break;
  case (days = "nov" || "november"):
    console.log("\n30 days.");
    break;
  case (days = "dec" || "december"):
    console.log("\n31 days.");
    break;
default:
  console.log ("\nInvalid.\n")
  break;
}
