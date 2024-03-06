"use strict";

// Теоретичні питання:
//     1. За допомогою властивостей keyCode або key
//     2. keyCode містить числовий код клавіші, а key - символьне представлення клавіші
//     3. keydown: відслідковує момент натискання клавіші
//        keypress: виникає при натисканні клавіші, яка генерує друкований символ
//        keyup: відслідковує момент відпускання клавіші



document.addEventListener('keydown', function(event) {
    const key = event.key.toUpperCase();

    const buttons = document.querySelectorAll('.btn');
  

    buttons.forEach(function(btn) {
      btn.classList.remove('new-color');
    });
  

    buttons.forEach(function(btn) {
      const buttonText = btn.textContent.toUpperCase();

      if (buttonText === key) {
        btn.classList.add('new-color');
      }
    });
  });