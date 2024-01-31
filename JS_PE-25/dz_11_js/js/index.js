const password = document.getElementById('password');

const firstIcon = document.getElementById('first-icon');

const lastPassword = document.getElementById('last-password');

const lastIcon = document.getElementById('last-icon');

const btn = document.getElementById('btn');

btn.addEventListener("click", function(e) {
    e.preventDefault()
    if (password.value === lastPassword.value) {
        alert('You are welcome');
    } else {
        alert('Потрібно ввести однакові значення!!!')
    }
})