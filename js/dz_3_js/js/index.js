// let userNumber =+prompt('Enter Number');

// for (let i=0; i<userNumber; i++ ) {
//     if (i % 5 === 0) {
//         console.log(i);
//     } else {
//         console.log("Sorry, no numbers");
//     }
    
// }


let userNumber =+ prompt('Enter Number');
let noNumber = false;

for (let i = 5; i < userNumber; i += 5) {
    console.log(i);
    noNumber = true;
}

if (!noNumber) {
    console.log("Sorry, no numbers");
}