"use strict";



const myArrey = ["travel", "hello", "eat", "ski", "lift"];

const newArrey = myArrey.filter((value) => value.length > 3)

console.log(newArrey);



const users = [
    {
        name: 'Alex',
        age: 34,
        sex: "man"
    },
    {
        name: 'Andrew',
        age: 18,
        sex: "man"
    },
    {
        name: 'Mary',
        age: 28,
        sex: "woman"
    },
    {
        name: 'Anna',
        age: 31,
        sex: "woman"
    },
];

const filterUsers = users.filter(user => user.sex.startsWith('man'));

console.log(filterUsers);



function filterBy(arr, typeExclude) {
    return arr.filter(value => typeof value !== typeExclude);
}

console.log(filterBy(['hello', 'world', 23, '23', null], 'string'));