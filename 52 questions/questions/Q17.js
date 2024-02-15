"use strict";
// Q 17
//  Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
Object.defineProperty(exports, "__esModule", { value: true });
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
var guestList = ['Eric', 'Bob', 'Ali'];
console.log(guestList[0], 'you are invited to dinner.');
console.log(guestList[1], 'you are invited to dinner.');
console.log(guestList[2], 'you are invited to dinner.');
// Can't Make it 
var cannotMakeFood = guestList[1];
console.log("\n unfortunately ".concat(cannotMakeFood, " Cannot make it to the dinner.\n"));
// replace person 
var newPerson = 'Albert';
guestList[1] = newPerson;
// print second set 
console.log(guestList[0], 'you are invited to dinner.');
console.log(guestList[1], 'you are invited to dinner.');
console.log(guestList[2], 'you are invited to dinner.');
// fonud bigger dinner table 
console.log("\n Guys we found a bigger dinner table. \n");
// add guest in beginning 
var beginningPerson = 'Isaac ';
guestList.unshift(beginningPerson);
// add new guest in middle
var insertIndex = 2;
var middlePerson = 'Roman';
guestList.splice(insertIndex, 0, middlePerson);
// add guest in end
var endPerson = 'Marie';
guestList.push(endPerson);
// Print a new set of invitation messages
console.log('\nFinal Guest List:');
for (var _i = 0, guestList_1 = guestList; _i < guestList_1.length; _i++) {
    var person = guestList_1[_i];
    console.log(person + ', you are invited to dinner.');
}
// Inform only two people invited
console.log('\nSorry, we can only invite two people for dinner.\n');
// Remove guests until only two names remain
while (guestList.length > 2) {
    var removedPerson = guestList.pop();
    console.log('\n Sorry, ' + removedPerson + ', we can\'t invite you to dinner.\n');
}
// Print a message to the two people still on the list
console.log('\nFinal Guest List:');
for (var _a = 0, guestList_2 = guestList; _a < guestList_2.length; _a++) {
    var person = guestList_2[_a];
    console.log(person + ', you are still invited to dinner.');
}
// Remove the last two names from the list
guestList.pop();
guestList.pop();
// Print the empty list
console.log('\nEmpty Guest List:');
console.log(guestList);
