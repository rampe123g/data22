// Q 3
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.


// Solution


const personName: string = "John Doe";

console.log("Lowercase:", personName.toLowerCase());

console.log("Uppercase:", personName.toUpperCase());

console.log("Titlecase:", titleCase(personName));

function titleCase(str: string): string {
  return str.replace(/\w\S*/g, (word) => {
    return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
  });
}

