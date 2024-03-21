"use strict";

// Теоретичні питання:
//     1. setInterval , наприклад : викликає функцію безліч разів з вказаним інтервалом. А setTimeout спрацьовує лише 1 раз і через вказаний час.
//     2. clearTimeout або clearInterval


const changeTextBtn = document.getElementById('changeTextBtn');
const resultDiv = document.getElementById('result');

changeTextBtn.addEventListener('click', () => {
  setTimeout(() => {
    resultDiv.textContent = 'Операція виконана успішно';
  }, 3000);
});



const countdownDiv = document.getElementById('countdown');
let count = 10;

function countdown() {
  if (count === 0) {
    countdownDiv.textContent = 'Зворотній відлік завершено';
    clearInterval(timer);
  } else {
    countdownDiv.textContent = count;
    count--;
  }
}

const timer = setInterval(countdown, 1000);