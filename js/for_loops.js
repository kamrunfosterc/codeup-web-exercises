'use strict';


//https://java.codeup.com/javascript-i/loops/
// Exercise 2
console.log('*************** Exercise 2 ***************')

function showMultiplicationTable(x) {
    for(let value = 1; value <= 10; value++){
        //var x = 7;
        //var table = x*value;
        console.log(x + ' * '+ value + " = " + x*value);
    }
}
showMultiplicationTable(7);

// Exercise 3 >> good example of if not working will run on n on and not stop if not done right
console.log('*************** Exercise 3 ***************')
function generateRandomNumber() {
    for(let x = 0; x <= 200; x++){
        let x = Math.floor(Math.random() * 100) + 10;
        if (x % 2 === 0){
            console.log('this number is even ' + x);
        } else {
            console.log('this number is odd ' + x);
        }
    }
}
generateRandomNumber()


/*
CODE FOR LATER
for (let ev = 0; ev <=10; ev++){
let random = Math.floor(Math.random() * (200 - 1)) + 1;
// do stuff with random numbers
}
 */


// Exercise 4
console.log('*************** Exercise 4 ***************')
function tree(){
    for (let x=1; x<10; x++){ // gives us certain rows

        var num1 = "";
        num1 = x;
        for (let y = 1; y<x; y++){ // how wide we want rows to be
            num1 = num1 + x.toString();
        }
        console.log(num1.toString());
    }
}
tree();

// Exercise 5
console.log('*************** Exercise 5 ***************')
for (let value = 100; value >= 0; value -= 5){
    console.log(value);
}

// floor vs ceiling: ceil() rounds number upwards to nearest integer and returns result, floor() method rounds number
// downward to nearest integer and returns result

// kathleen number
// for (var index = 1, number = ""; index < 10; index++){
//     number += '1';
//     console.log(index * number);
// }