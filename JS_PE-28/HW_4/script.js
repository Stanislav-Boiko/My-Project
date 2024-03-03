"use strict";

let a = +prompt('Enter first nгmber...');


while(isNaN(a) || !a) {
    alert("!!! Error !!! Try again");
    a = +prompt("Enter the first number again...");
}


let b = +prompt("Enter next number...");

while(isNaN(b) || !b) {
    alert("!!! Error !!! Try again");
    b = +prompt("Enter the next number again...");
}


let min;

let max;

if(a > b) {
    min = b;
    max = a;
} else {
    min = a;
    max = b;
}

for(let i = min; i <= max; i++) {
    console.log(i);
}


let c = +prompt("Enter a PAIR number...");

while(isNaN(c) || !c || c % 2 !== 0) {
    alert("!!! Error !!! Try again");
    c = +prompt("Enter the PAIR number again...");
}

console.log(c);



