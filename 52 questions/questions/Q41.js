// Q 41
// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
var magician = ['Chris Angel', 'Dynamo', 'David Blaine'];
function show_magicians(magicianNames) {
    for (var _i = 0, magicianNames_1 = magicianNames; _i < magicianNames_1.length; _i++) {
        var magician_1 = magicianNames_1[_i];
        console.log(magician_1);
    }
}
// Call the function and pass the array of magician names
show_magicians(magician);
