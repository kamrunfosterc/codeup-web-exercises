"use strict";

/* ########################################################################## */

function analyzeColorIf(colorName){
    if (colorName === 'blue') {
        return "blue is the color of the sky";
    }
    else if (colorName === 'red') {
        return "Strawberries are red";
    }
    else if (colorName === 'cyan') {
        return "I don't know anything about cyan";
    }
    else {
        return colorName + " is not one of the three colors to chose from";
    }
}

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'cyan'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];

console.log(analyzeColorIf(randomColor));
// ******** ******** ******** ******** ******** ******** ********
function analyzeColor(colorName) {
    switch (colorName){
        case "blue":
            return "blue is the color of the sky";
        case "red":
            return "Strawberries are red";
        case "cyan":
            return "I don't know anything about cyan";
        default:
            return colorName + " is not one of the  colors recognized, please refresh";
    }
}

console.log(analyzeColor(randomColor));
console.log('****************************************');

var userColor = prompt("Please choose a color ")
alert(analyzeColor(userColor));
alert(analyzeColorIf(userColor));
console.log(analyzeColor(userColor),(analyzeColorIf(userColor)));
/* ########################################################################## */

/**
 * TODO:
 "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.

 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
console.log('****************************************');

function calculateTotal(luckyNumber, totalAmount){
    switch (luckyNumber) {
        case 0:
            return totalAmount;
        case 1:
            return totalAmount - (totalAmount * 0.10);
        case 2:
            return totalAmount - (totalAmount * 0.25);
        case 3:
            return totalAmount - (totalAmount * 0.35);
        case 4:
            return totalAmount - (totalAmount * 0.50);
        case 5:
            return 0 + " You get this free!";
    }
}
console.log(calculateTotal(0,100));
console.log(calculateTotal(1,100));
console.log(calculateTotal(2,100));
console.log(calculateTotal(3,100));
console.log(calculateTotal(4,100));
console.log(calculateTotal(5,100));


/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
// var luckyNumber = Math.floor(Math.random() * 6);

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */