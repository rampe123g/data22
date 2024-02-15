// Q 42
// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
// let magicians = ["David Copperfield", "David Blaine", "Criss Angel"];
// function show_magicians(magicians: string[]) {
//   for (let index = 0; index < magicians.length; index++) {
//     const element = magicians[index];
//     console.log(`Hello there,`,element);
//   }
// }
// show_magicians(magicians);
// export {};
var magicians = ["David Copperfield", "David Blaine", "Criss Angel"];
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log("Hello there", magician);
    }
}
show_magicians(magicians);
