let userNumber = +prompt('Enter Number');
let noNumber = false;

for (let i = 5; i < userNumber; i += 5) {
    console.log(i);
    noNumber = true;
}

if (!noNumber) {
    console.log("Sorry, no numbers");
}