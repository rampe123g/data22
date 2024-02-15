// Q 19
// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Solution
var places = ['Turkey', 'Saudia', 'Thailand', 'India', 'Malaysia'];
// original order.
console.log("Original Order:", places);
// array in alphabetical order without modifying the actual list.
var alphabeticalOrder = __spreadArray([], places, true).sort();
console.log("Alphabetical Order:", alphabeticalOrder);
// your array is still in its original order by printing it.
console.log("Original Order (after alphabetical sorting):", places);
// your array in reverse alphabetical order without changing the order of the original list.
var reverseOrder = __spreadArray([], places, true).sort().reverse();
console.log("Reverse Alphabetical Order:", reverseOrder);
// your array is still in its original order by printing it again.
console.log("Original Order (after reverse alphabetical sorting):", places);
// • Reverse the order of your list. Print the array to show that its order has changed.
var reversedList = __spreadArray([], places, true).reverse();
console.log("Reversed Order:", reversedList);
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
var originalOrderAgain = __spreadArray([], reversedList, true).reverse();
console.log("Original Order Again:", originalOrderAgain);
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
var sortedAlphabetical = __spreadArray([], places, true).sort();
console.log("Sorted Alphabetical Order:", sortedAlphabetical);
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
var sortedReverseAlphabetical = __spreadArray([], places, true).sort().reverse();
console.log("Sorted Reverse Alphabetical Order:", sortedReverseAlphabetical);
// Dinner Guests: Print a message indicating the number of people you are inviting to dinner.
console.log("\nDinner Guests:");
console.log("You are inviting ".concat(places.length, " people to dinner."));
