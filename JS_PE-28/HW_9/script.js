"use strict";

// Теоретичні питання:
//     1. Це дерево веб-сайту
//     2. innerHTML - змінює структуру html разом з тегами , а innerText - тільки текст в елементах (без тегів)
//     3. .getElementsByClassName()(id, Name, TagName) .querySelector() - поки на мою думку зручніший
//     4. HTMLCollection це жива колекція яку не потрібно постійно оновлювати


const featureClassSearch = document.querySelectorAll('.feature');

const featureClassSearch2 = document.getElementsByClassName('feature');

featureClassSearch.forEach(element => {
    element.style.textAlign = "center";
});

console.log(featureClassSearch);
console.log(featureClassSearch2);



const title = document.querySelectorAll('h2');

title.forEach((element) => {
    element.textContent = 'Awesome feature';
})



const featureTitle = document.querySelectorAll('.feature-title');

featureTitle.forEach((element) => {
    element.textContent += '!';
})