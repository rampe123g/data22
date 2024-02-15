// Q 19
// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.



// Solution
let places: string[] = ['Turkey', 'Saudia', 'Thailand', 'India', 'Malaysia'];

// original order.
console.log("Original Order:", places);

// array in alphabetical order without modifying the actual list.
let alphabeticalOrder: string[] = [...places].sort();
console.log("Alphabetical Order:", alphabeticalOrder);

// your array is still in its original order by printing it.
console.log("Original Order (after alphabetical sorting):", places);

// your array in reverse alphabetical order without changing the order of the original list.
let reverseOrder: string[] = [...places].sort().reverse();
console.log("Reverse Alphabetical Order:", reverseOrder);

// your array is still in its original order by printing it again.
console.log("Original Order (after reverse alphabetical sorting):", places);

// • Reverse the order of your list. Print the array to show that its order has changed.
let reversedList: string[] = [...places].reverse();
console.log("Reversed Order:", reversedList);

// • Reverse the order of your list again. Print the list to show it’s back to its original order.
let originalOrderAgain: string[] = [...reversedList].reverse();
console.log("Original Order Again:", originalOrderAgain);

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
let sortedAlphabetical: string[] = [...places].sort();
console.log("Sorted Alphabetical Order:", sortedAlphabetical);

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
let sortedReverseAlphabetical: string[] = [...places].sort().reverse();
console.log("Sorted Reverse Alphabetical Order:", sortedReverseAlphabetical);

// Dinner Guests: Print a message indicating the number of people you are inviting to dinner.
console.log("\nDinner Guests:");
console.log(`You are inviting ${places.length} people to dinner.`);
