// Calculator 


import inquirer from 'inquirer';

async function main() {
    try {
        const answers = await inquirer.prompt([
            {
                type: 'input',
                name: 'num1',
                message: 'Enter the first number'
            },
            {
                type: 'input',
                name: 'num2',
                message: 'Enter the second number'
            },
            {
                type: 'list',
                name: 'operation',
                choices: ['+', '-', '*', '/'],
                message: 'Enter your operation'
            },
        ]);

        const num1 = parseFloat(answers.num1);
        const num2 = parseFloat(answers.num2);
        const operation = answers.operation;

        if (isNaN(num1) || isNaN(num2)) {
            console.log('Invalid input. Please enter valid numbers.');
            return;
        }

        if (operation == "+") {
            sum(num1, num2);
        } else if (operation == "-") {
            sub(num1, num2);
        } else if (operation == "*") {
            mul(num1, num2);
        } else if (operation == "/") {
            divide(num1, num2);
        } else {
            console.log('Invalid operation');
        }
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

function sum(num1: number, num2: number) {
    const result = num1 + num2;
    console.log("Sum", result);
}

function sub(num1: number, num2: number) {
    const result = num1 - num2;
    console.log("Subtract", result);
}

function mul(num1: number, num2: number) {
    const result = num1 * num2;
    console.log("Multiply", result);
}

function divide(num1: number, num2: number) {
    const result = num1 / num2;
    console.log("Divide", result);
}

main();
