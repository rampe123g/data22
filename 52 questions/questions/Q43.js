// Q 43
// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
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
var magicians = ["David Copperfield", "David Blaine", "Criss Angel"];
function showMagicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
function makeGreat(copyMagicians) {
    var greatMagicians = [];
    for (var _i = 0, copyMagicians_1 = copyMagicians; _i < copyMagicians_1.length; _i++) {
        var magician = copyMagicians_1[_i];
        // Add "Great" to each magician's name and push it to the greatMagicians array
        greatMagicians.push("Great " + magician);
    }
    return greatMagicians;
}
// Call makeGreat with a copy of the original array
var greatMagicians = makeGreat(__spreadArray([], magicians, true));
// Call showMagicians with the original array
console.log("Original Magicians:");
showMagicians(magicians);
// Call showMagicians with the new array containing "Great" added to each magician's name
console.log("\nGreat Magicians:");
showMagicians(greatMagicians);
