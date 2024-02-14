"use strict";

const product = {
    name: 'ASUS TUF Gaming F15',
    price: 39999,
    discount: 35499,
}

console.log(product.discount);


const user = {
    name: prompt('Введіть Ваше ім`я'),
    age: +prompt('Ввудіть Ваш вік'),
}

function userHello(name, age) {
    return alert(`Привіт, ${name} . Тобі ${age} років!`);
}

userHello(user.name,user.age)


const newUser = Object.create(user);