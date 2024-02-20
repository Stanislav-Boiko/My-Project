"use strict";

function isPalindrome(str) {
    
    let sourceStr = str.replace(/\s/g, "").toLowerCase();

    let reversedStr = "";

    for (let i = sourceStr.length -1; i >= 0; i--) {
        reversedStr += sourceStr[i];
    }

    return sourceStr === reversedStr;
}



function checkingStringLength(str, num) {

    if (str.length <= num) {
        console.log(true);
    } else {
        console.log(false);
    }
    return;
}


function calculateAge(birthDate) {

    const dob = new Date(birthDate);
    
    const currentDate = new Date();

    const ageDifference = currentDate.getTime() - dob.getTime();

    const millisecondsInYear = 1000 * 60 * 60 * 24 * 365.25;

    const age = Math.floor(ageDifference / millisecondsInYear);
    
    return age;
}

const birthDate = prompt("Введіть вашу дату народження у форматі РРРР-ММ-ДД:");

const age = calculateAge(birthDate);

console.log("Ваш вік: " + age + " років");

