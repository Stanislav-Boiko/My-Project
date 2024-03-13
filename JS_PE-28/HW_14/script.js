"use strict";


// ТЕоритичні питання:
// 1. В localStorage  дані зберігаються на постійній основі. А в sessionStorage - зберігаються тільки на час тривалості сесії браузера.
// 2. Не зберігати паролі відкритим текстом, безпечніше через sessionStorage і видаляти їх після закриття сесії браузера.
// 3. Автоматично видаляються.


const themeCheckbox = document.getElementById('theme');
const cssLink = document.getElementById('theme-css');

const DARK_CSS = './styleDark.css'
const LIGHT_CSS = './styleLight.css'

themeCheckbox.addEventListener('click', (event) => {
    
    if(event.target.checked){
        cssLink.setAttribute('href', DARK_CSS)
        localStorage.setItem('theme', 'dark')
    }
    else {
        cssLink.setAttribute('href', LIGHT_CSS)
        localStorage.setItem('theme', 'light')
    }
})


const lastTheme = localStorage.getItem('theme') ?? 'light'

if (lastTheme == 'light'){
    cssLink.setAttribute('href', LIGHT_CSS)
}
else {
    cssLink.setAttribute('href', DARK_CSS)
    themeCheckbox.checked = true;
}