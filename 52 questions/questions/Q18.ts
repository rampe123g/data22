// Q 18
// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.

// • Print your array in its original order.

// • Print your array in alphabetical order without modifying the actual list.

// • Show that your array is still in its original order by printing it.

// • Print your array in reverse alphabetical order without changing the order of the original list.

// • Show that your array is still in its original order by printing it again.

// • Reverse the order of your list. Print the array to show that its order has changed.

// • Reverse the order of your list again. Print the list to show it’s back to its original order.

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

// Q 18
// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in an array. Make sure the array is not in alphabetical order.



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




