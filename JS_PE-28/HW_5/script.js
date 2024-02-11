"use strict";

let firstNumber =  parseInt(prompt("Enter the first number..."));

while(isNaN(firstNumber)) {
    alert("!!! Error !!! Try again");
    firstNumber = parseInt(prompt("Enter the first number again..."));
}
console.log(firstNumber);


let nextNumber = parseInt(prompt("Enter next number..."));

while(isNaN(nextNumber)) {
    alert("!!! Error !!! Try again");
    nextNumber = parseInt(prompt("Enter the next number again..."));
}
console.log(nextNumber);


let operator = prompt("Select one of the available operators: +, -, *, /, **.");

if (operator === '+') {
    console.log(operator);
} else if (operator === '-') {
    console.log(operator);
} else if (operator === '*') {
    console.log(operator);
} else if (operator === '/') {
    console.log(operator);
} else if (operator === '**') {
    console.log(operator);
} else if (operator === '') {
    alert("!!! Error !!! Try again");
    operator = prompt("Select one of the available operators: +, -, *, /, ** again...");
    console.log(operator);
} else {
    alert("!!! Error !!! Try again");
    operator = prompt("Select one of the available operators: +, -, *, /, ** again...");
    console.log(operator);
}


function result(num1, num2, operator) {
    let result
    switch (operator) {
        case '+':
            result = num1 + num2;
            console.log(result);
            break;
        case '-':
            result = num1 - num2;
            console.log(result);
            break;
        case '*':
            result = num1 * num2;
            console.log(result);
            break;
        case '/':
            result = num1 / num2;
            console.log(result);
            break;
        case '**':
            result = num1 ** num2;
            console.log(result);
            break;

        default:
            console.log('!!! Error !!!');
            break;
    }

}

result(firstNumber, nextNumber, operator)


const factorialNumber = parseInt(prompt('Enter any number to find out its factorial...'))

while(isNaN(factorialNumber)) {
    alert("!!! Error !!! Try again");
    factorialNumber = parseInt(prompt("Enter the next number again..."));
}



function factorialOfANumber(num) {
    
    let factorial = 1;
    for (let i = 1; i <= num; i++) {

        factorial *= i;
    }
    console.log(factorial);
    return factorial;
}

factorialOfANumber(factorialNumber)







