// Q 43
// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.


// let magicians = ["David Copperfield", "David Blaine", "Criss Angel"];

// function showMagicians(magicians: string[]) {
//     let gratMagicians: string[] = [];
//     for (let magician of gratMagicians) {
//         console.log(magician);
//     }
// }

// function makeGreat(copyMagicians: string[]): string[] {
//     let greatMagicians: string[] = [];
//     for (let magician of greatMagicians) {
//         console.log(magician);
        
//     }
//     return greatMagicians;
// }

// // Call makeGreat with a copy of the original array
// let greatMagicians = makeGreat([...magicians]);

// // Call showMagicians with the original array
// console.log("Original Magicians:");
// showMagicians(magician);

// // Call showMagicians with the new array containing "Great" added to each magician's name
// console.log("\nGreat Magicians:");
// showMagicians(greatMagicians);

let magicians = ["Bob", "Eric", "Adam"];

function showMagicians(magicians: string[]) {
    for (let magician of magicians) {
        console.log(magician);
    }
}

function makeGreat(copyMagicians: string[]): string[] {
    let greatMagicians: string[] = [];
    for (let magician of copyMagicians) {
        greatMagicians.push("Great " + magician);
    }
    return greatMagicians;
}

// Call makeGreat with a copy of the original array
let greatMagicians = makeGreat([...magicians]);

// Call showMagicians with the original array
console.log("Original Magicians:");
showMagicians(magicians);

// Call showMagicians with the new array containing "Great" added to each magician's name
console.log("\nGreat Magicians:");
showMagicians(greatMagicians);
