"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var name = "\t Hajra M.Anees \n";
console.log(name);
var personName = "\t   Engr. Jalal Saleem\n";
// Print the name with whitespace
console.log("Original Name:");
console.log(JSON.stringify(personName)); // JSON.stringify to display whitespace characters
// Strip whitespace from the name
var strippedName = personName.trim();
// Print the stripped name
console.log("\nStripped Name:");
console.log(JSON.stringify(strippedName));
