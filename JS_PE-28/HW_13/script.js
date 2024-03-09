"use strict";

// Теоритичні питання: 
// 1. event.preventDefault() використовується для скасування стандартної поведінки браузера
// 2. Замість того, щоб додавати обробники подій до кожного елемента, ми додаємо один обробник подій до спільного батьківського елемента, і він реагує на події, що виникають в будь-якому з дочірніх елементів.
// 3. DOMContentLoaded, load, beforeunload/unload



document.querySelector('.tabs').addEventListener('click', function(event) {
    if (event.target.classList.contains('tabs-title')) {
        const tabName = event.target.textContent.trim();
        const tabsContent = document.querySelectorAll('.tabs-content li');
        
        tabsContent.forEach(function(content) {
            if (content.textContent.includes(tabName)) {
                content.style.display = 'block';
            } else {
                content.style.display = 'none';
            }
        });

        const tabsTitles = document.querySelectorAll('.tabs-title');
        tabsTitles.forEach(function(title) {
            title.classList.remove('active');
        });
        event.target.classList.add('active');
    }
});