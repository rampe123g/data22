// import inquirer from "inquirer";
// type ansType = {
//     userGuess: number
// }
// const generateNumber = Math.floor(Math.random() * 10);
// const answers = inquirer.prompt([
//     {
//         type: 'number',
//         name: 'userGuess',
//         message: 'write your guess between 1 to 10:'
//     }
// ])
// const {userGuess} = answers;
// console.log(userGuess, "userGuess", generateNumber, 'sys');
// if(userGuess === generateNumber){    
//     console.log("Yeah your answer is correct you win!");
// }else {
//     console.log("Try Again Better luck next time!");
// }
import inquirer from "inquirer";
const generateNumber = Math.floor(Math.random() * 10);
const main = async () => {
    const answers = await inquirer.prompt([
        {
            type: 'number',
            name: 'userGuess',
            message: 'Write your guess between 1 to 10:'
        }
    ]);
    const { userGuess } = answers;
    console.log(userGuess, "userGuess", generateNumber, 'sys');
    if (userGuess === generateNumber) {
        console.log("Yeah, your answer is correct. You win!");
    }
    else {
        console.log("Try Again. Better luck next time!");
    }
};
main();
