// Q 23
// Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
var car = 'subaru';
// Test 1
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru'); // Should be True
// Test 2
console.log("Is car == 'honda'? I predict False.");
console.log(car == 'honda'); // Should be False
// Test 3
console.log("Is car === 'subaru'? I predict True.");
console.log(car === 'subaru'); // Should be True
// Test 4
console.log("Is car === 'Subaru'? I predict False.");
console.log(car === 'Subaru'); // Should be False
// Test 5
console.log("Is car !== 'toyota'? I predict True.");
console.log(car !== 'toyota'); // Should be True
// Test 6
console.log("Is car !== 'subaru'? I predict False.");
console.log(car !== 'subaru'); // Should be False
// Test 7
console.log("Is car.startsWith('sub')? I predict True.");
console.log(car.startsWith('sub')); // Should be True
// Test 8
console.log("Is car.length > 5? I predict False.");
console.log(car.length > 5); // Should be False
// Test 9
console.log("Is car.includes('aru')? I predict True.");
console.log(car.includes('aru')); // Should be True
// Test 10
console.log("Is car.charAt(2) == 'b'? I predict True.");
console.log(car.charAt(2) == 'b'); // Should be True