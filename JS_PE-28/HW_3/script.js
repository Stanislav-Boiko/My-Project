"use strict";

const age = prompt("Скілки Вам років???");

const userAge = parseInt(age);

if (!isNaN(userAge)) {
    if (userAge < 0) {
        alert("Ви ще не народились :)");
    } else if (userAge >= 0 && userAge < 12) {
        alert("Ви дитина!");
    } else if ((userAge >= 12) && (userAge < 18)) {
        alert("Ви підліток");
    } else {
        alert("Ви дорослий");
    }
} else {
    alert(`!!! Некоректній запис, або Ви натиснули "Відміна" !!!`);
}


//Завдання з підвищенною складністю

const month = prompt("Напишіть місяць року (українською мовою маленкими літерами) та дізнайтеся скільки в ньому днів");

switch (month) {
    case 'січень':
        alert(`В місяці ${month} 31 день`);
        console.log(`31`);
        break;
    case 'лютий':
        alert(`В місяці ${month} 28 днів (29 днів висок.)`);
        console.log(`28(29)`);
        break;
    case 'березень':
        alert(`В місяці ${month} 31 день`);
        console.log(`31`);
        break;
    case 'квітень':
        alert(`В місяці ${month} 30 денів`);
        console.log(`30`);
        break;
    case 'травень':
        alert(`В місяці ${month} 31 день`);
        console.log(`31`);
        break;
    case 'червень':
        alert(`В місяці ${month} 30 денів`);
        console.log(`30`);
        break;
    case 'липень':
        alert(`В місяці ${month} 31 день`);
        console.log(`31`);
        break;
    case 'серпень':
        alert(`В місяці ${month} 31 день`);
        console.log(`31`);
        break;
    case 'вересень':
        alert(`В місяці ${month} 30 денів`);
        console.log(`30`);
        break;
    case 'жовтень':
        alert(`В місяці ${month} 31 день`);
        console.log(`31`);
        break;
    case 'листопад':
        alert(`В місяці ${month} 30 денів`);
        console.log(`30`);
        break;
    case 'грудень':
        alert(`В місяці ${month} 31 день`);
        console.log(`31`);
        break;
    default:
        alert("!!! Error !!!");
        console.log("!!! Error !!!");
}