let userNumber = +prompt('Enter Number');

for (let i = 0; i < userNumber; i++) {
    if (i % 5 == 0) {
        console.log(i);
    } else if ( userNumber <= 5 ) {
        console.log("Sorry, no numbers");
    }
}