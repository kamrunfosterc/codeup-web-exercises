"use strict";


function sayhello(name){// name of function & parameter
    return "Hello, " + name + "!";// bc a parameter of our function, name is declared
}

var helloMessage = sayhello("Kam");
console.log(helloMessage);


var myName = "K.Foster"
helloMessage = sayhello(myName);
console.log(helloMessage);
// // Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
var random = Math.floor((Math.random() * 3) + 1);

function isTwo(number){
    return number == 2;
}
console.log(isTwo(1)); // not returning correct t/f
console.log(isTwo(2));
console.log(isTwo(3));

/**

 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
*/

function isTwo(number){
    if (number = 2){
        return(true);
    } else {
        return false;
    }
    console.log(isTwo(random));

}

function calculateTip(tipPercent, totalBill){
    var tipAmount = totalBill * tipPercent;
    return tipAmount;
}
console.log(calculateTip(0.20, 20)); // returns 4
console.log(calculateTip(0.25, 25.50)) // returns 6.375
console.log(calculateTip(0.15, 33.42)); // returns 5.013

var totalBill = 20;
var tipPercentage = 0.2;
totalBill = prompt('Enter the total bill' );
tipPercentage = prompt('Enter the tip amount');
alert('The tip should be' + calculateTip(tipPercentage, totalBill).toFixed(2));
/**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 * > var originalPrice = 100;
 * > var dicountPercent = .2; // 20%
 * > applyDiscount(originalPrice, dicountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */

function applyDiscount(price, dicountPercent){
    var result = price -(price * dicountPercent);
    return result;
}
console.log(applyDiscount(45.99, 0.12));
