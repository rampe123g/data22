// Q6
// Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.


// Solution

let whiteSpaceName : string = "\t Hajra M.Anees \n";
console.log("Name with whitespace", whiteSpaceName);
 
const strippedName: string = whiteSpaceName.trim();
console.log("Stripped Name ", strippedName);

export{}

