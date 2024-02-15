// Q 16 
// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
 
// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.


// Solution
let guestList: string[] = ['Eric', 'Bob', 'Ali'];

console.log(guestList[0],'you are invited to dinner.');
console.log(guestList[1],'you are invited to dinner.');
console.log(guestList[2],'you are invited to dinner.');

// Can't Make it 
let cannotMakeFood : string = guestList[1];
console.log(`\n unfortunately ${cannotMakeFood} Cannot make it to the dinner.\n`);

// replace person 
let newPerson : string = 'Albert';
guestList[1] = newPerson;


// print second set 
console.log(guestList[0],'you are invited to dinner.');
console.log(guestList[1],'you are invited to dinner.');
console.log(guestList[2],'you are invited to dinner.');

// fonud bigger dinner table 
console.log("\n Guys we found a bigger dinner table. \n");

// add guest in beginning 
let beginningPerson: string = 'Isaac ';
guestList.unshift(beginningPerson);

// add new guest in middle
let insertIndex: number = 2;

let middlePerson: string = 'Roman';
guestList.splice(insertIndex, 0, middlePerson);
 
// add guest in end
let endPerson: string = 'Marie';
guestList.push(endPerson);

// Print a new set of invitation messages
console.log('\nFinal Guest List:');
for (let person of guestList) {
    console.log(person + ', you are invited to dinner.');
}
export{}

