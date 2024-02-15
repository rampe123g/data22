// Q 41
// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.



// Solution
let magician: string[] =['Chris Angel', 'Dynamo', 'David Blaine'];

function show_magicians(magicianNames: string[]): void {
    for (const magician of magicianNames) {
        console.log(magician);
    }
}

// Call the function and pass the array of magician names
show_magicians(magician); 