// Q 24
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
// Tests for equality and inequality with strings
var string1 = "Hello";
var string2 = "World";
console.log(string1 === string2); // False
console.log(string1 !== string2); // True
// Tests using the lower case function
var lowerCaseString = "LowerCase";
console.log(lowerCaseString.toLowerCase() === "lowercase"); // True
// Numerical tests
var num1 = 10;
var num2 = 5;
console.log(num1 === num2); // False
console.log(num1 !== num2); // True
console.log(num1 > num2); // True
console.log(num1 < num2); // False
console.log(num1 >= num2); // True
console.log(num1 <= num2); // False
// Tests using "and" and "or" operators
var isSunny = true;
var isWarm = false;
console.log(isSunny && isWarm); // False (both conditions need to be true)
console.log(isSunny || isWarm); // True (at least one condition needs to be true)
// Test whether an item is in an array
var fruits = ["Apple", "Banana", "Orange"];
console.log(fruits.includes("Banana")); // True
// Test whether an item is not in an array
var vegetables = ["Carrot", "Broccoli", "Spinach"];
console.log(!vegetables.includes("Tomato")); // True
