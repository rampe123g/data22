// Q 17
//  Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.


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

// Inform only two people invited
console.log('\nSorry, we can only invite two people for dinner.\n');

// Remove guests until only two names remain
while (guestList.length > 2) {
    let removedPerson: string = guestList.pop()!;
    console.log('\n Sorry, ' + removedPerson + ', we can\'t invite you to dinner.\n');
}

// Print a message to the two people still on the list
console.log('\nFinal Guest List:');
for (let person of guestList) {
    console.log(person + ', you are still invited to dinner.');
}

// Remove the last two names from the list
guestList.pop();
guestList.pop();

// Print the empty list
console.log('\nEmpty Guest List:');
console.log(guestList);






export{}