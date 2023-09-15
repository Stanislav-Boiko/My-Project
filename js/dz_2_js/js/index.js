
let userName = prompt("Введіть Ваше ім`я");
let userAge = + prompt("Скільки Вам років?");

if (userAge < 18) {
    alert('You are not allowed to visit this website.');
}
else if (userAge <= 22) {
   let resultConfirm = confirm('Are you sure you want to continue?');

   if (resultConfirm) {
       alert(' Welcome ' + userName);
   }
   else {
       alert('You are not allowed to visit this website.');
   }
}
else  {
    alert(' Welcome ' + userName );
    
}

if (userName === '' || !Number(userAge) || !userAge) {
    userName = prompt("Введіть Ваше ім`я", [userName]);
    userAge = prompt("Скільки Вам років?", [userAge]);
}
