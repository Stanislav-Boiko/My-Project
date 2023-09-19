function someName(operator, firstNumber, secondNumber) {
    switch (operator) {
        case '+':
            return firstNumber + secondNumber;
        case '-':
            return firstNumber - secondNumber;
        case '*':
            return firstNumber * secondNumber;
        case '/':
            return firstNumber / secondNumber;
        default:
            return "Unsupported operator";
    }
}

let firstNumber =+ prompt('Enter first number');
let secondNumber =+ prompt('Enter second number');
let operator = prompt('Enter operator');

console.log(someName(operator, firstNumber, secondNumber));