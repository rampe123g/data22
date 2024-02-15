"use strict";
// Q 16 
// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
Object.defineProperty(exports, "__esModule", { value: true });
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
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
