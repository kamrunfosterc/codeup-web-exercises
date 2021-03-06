"use strict"; // leave this line here :)

// Keep this function definition in order to test expected vs. actual results
const assert = function(actual, expected, message = "") {

    // This compares primitive values and collections. If they differ, throw an error.
    if(JSON.stringify(actual) !== JSON.stringify(expected)) {
        console.error('[assert] expected:    ' + JSON.stringify(expected))
        console.error('[assert] instead got: ' + JSON.stringify(actual))

        throw Error("Assert failed in " + message);
    }
};


// Keep this function here in order to add correct questions to the counter
function addToDone(message) {
    var node = document.createElement("LI");                 // Create a <li> node
    var textnode = document.createTextNode(message);         // Create a text node
    node.appendChild(textnode);                              // Append the text to <li>
    node.classList.add("finished");
    document.querySelector(".correct ul").appendChild(node);
    document.querySelector("#count").innerHTML = document.querySelectorAll('.finished').length + " of 101";
}


// Welcome to 101 Exercises in JS
// If you get "ReferenceError: someVariableName is not defined", that means you need to create a variable

// Exercise #0, Example Problem:
// Example problem setup: Create a variable named doingJSRightNow and assign it the boolean true.
// The line below creates the variable named doingJSRightNow and assigns the boolean value true
// To complete Exercise #0, uncomment the following line of JS
var doingJSRightNow = true

// The lines below will test your answer. If you see an error, then it means that your answer is incorrect or incomplete.
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Not_defined to understand this error message.
assert(doingJSRightNow, true, "Exercise 0");



//  Exercise 1
// On the line below, create a variable named onMarsRightNow and assign it the boolean value of false
// For more on variables, see https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables
var onMarsRightNow = false;
assert(onMarsRightNow, false, "Exercise 1");
addToDone("Exercise 1 is correct.");

// Exercise 2
// For more on arrays, see https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Arrays
// Create a variable named fruits and assign it an array of strings containing the following fruits.
// mango, banana, guava, kiwi, and strawberry.
var fruits = ['mango', 'banana', 'guava', 'kiwi',  'strawberry'];
assert(fruits, ["mango", "banana", "guava", "kiwi", "strawberry"], "Exercise 2");
addToDone("Exercise 2 is correct.");

// Exercise 3
// Create a variable named vegetables and assign it an array of strings containing the following vegetables.
// eggplant, broccoli, carrot, cauliflower, and zucchini
var vegetables = ['eggplant', 'broccoli', 'carrot', 'cauliflower', 'zucchini'];
assert(vegetables, ["eggplant", "broccoli", "carrot", "cauliflower", "zucchini"], "Exercise 3");
addToDone("Exercise 3 is correct.");


// Exercise 4
// Create a variable named numbers and assign it an array of numbers, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
assert(numbers, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "Exercise 4");
addToDone("Exercise 4 is correct.");


// Exercise 5
// Add the string "tomato" to the end of the fruits array.
// *Hint* Recommend finding and using a built-in JS operation to add to an array rather than recreating the array.
fruits.push('tomato');
assert(fruits, ["mango", "banana", "guava", "kiwi", "strawberry", "tomato"], "Exercise 5");
addToDone("Exercise 5 is correct");

// Exercise 6
// add the string "tomato" onto the end of the vegetables array.
// Recommend using the built-in JS operation to add to an array.
vegetables.push('tomato');

assert(vegetables,["eggplant", "broccoli", "carrot", "cauliflower", "zucchini", "tomato"], "Exercise 6");
addToDone("Exercise 6 is correct")


// Exercise 7
// Given the array of numbers defined below, reverse the array of numbers that you created above.
var someNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
someNumbers.reverse();

assert(someNumbers, [10, 9, 8, 7, 6, 5, 4, 3, 2, 1], "Exercise 7")
addToDone("Exercise 7 is correct")



// Exercise 8
// Sort the vegetables in alphabetical order. Recommend finding a way to sort the array with a built-in method
vegetables.sort();
assert(vegetables, ['broccoli', 'carrot', 'cauliflower', 'eggplant', 'tomato', 'zucchini'], "Exercise 8")
addToDone("Exercise 8 is correct.")



// Exercise 9
// Write the code necessary to sort the fruits in reverse alphabetical order
fruits.sort().reverse();
assert(fruits, ['tomato', 'strawberry', 'mango', 'kiwi', 'guava', 'banana'], "Exercise 9")
addToDone("Exercise 9 is correct.")


// Exercise 10
// Write the code necessary to produce a single array that holds all fruits then all vegetables in the order as they were sorted above.
// Assign the result to a variable named fruitsAndVeggies.
// *hint* the search engine search here would be "how to combine two arrays in JavaScript", for example.
var fruitsAndVeggies = fruits.concat(vegetables);
assert(fruitsAndVeggies, ['tomato', 'strawberry', 'mango', 'kiwi', 'guava', 'banana', 'broccoli', 'carrot', 'cauliflower', 'eggplant', 'tomato', 'zucchini'], "Exercise 10")
addToDone("Exercise 10 is correct")

// This function generates a random number that is both positive and even
function randomPositiveEvenNumber() {
    var randomNumber = Math.ceil(Math.random() * 100) + 10;
    if(randomNumber % 2 !== 0) {
        return randomPositiveEvenNumber()
    }

    return randomNumber;
}

// this function generates a random number that is both positive and odd
function randomPositiveOddNumber() {
    var randomNumber = Math.ceil(Math.random() * 100) + 10;
    if(randomNumber % 2 === 0) {
        return randomPositiveOddNumber();
    }

    return randomNumber;
}

// this function generates a random number that is both negative and even.
function randomNegativeEvenNumber() {
    var randomNumber = Math.ceil(Math.random() * -100) - 10;
    if(randomNumber % 2 === 0) {
        return randomNumber;
    }

    return randomNegativeEvenNumber();
}

// this function generates a random number that is both negative and odd.
function randomNegativeOddNumber() {
    var randomNumber = Math.ceil(Math.random() * -100) - 10;
    if(randomNumber % 2 === 0) {
        return randomNegativeOddNumber();
    }

    return randomNumber;
}

// The next 4 lines create variables that hold these generated random numbers
var positiveEvenNumber = randomPositiveEvenNumber()
var positiveOddNumber = randomPositiveOddNumber();
var negativeEvenNumber = randomNegativeEvenNumber();
var negativeOddNumber = randomNegativeOddNumber();

// Writing functions
// See https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Functions for help with writing functions
// Be sure to return values from your function definitions. The assert statements will call/run your function(s) for you.


// Example function defintion:
// Write a sayHello function that adds the string "Hello, " to the beginning and "!" to the end of any given input.
function sayHello(name) {
    return "Hello, " + name + "!";
}

assert(sayHello("Jane"), "Hello, Jane!");
assert(sayHello("Pat"), "Hello, Pat!");
assert(sayHello("Astrud"), "Hello, Astrud!");
assert(sayHello("June"), "Hello, June!");
assert(sayHello("World"), "Hello, World!");


// Heres another example function definition
// This plusTwo function takes in a variable and adds the number 2 to it.
function plusTwo(x) {
    return x + 2;
}

assert(plusTwo(3), 5, "3 plus 2 is five")
assert(plusTwo(-2), 0, "-2 plus 2 is zero")
assert(plusTwo(0), 2, "zero plus 2 is two")



// Exercise 11
// Write a function definition for a function named addOne that takes in a number and returns that number plus one
function addOne(number){
    return number + 1;
}


assert(addOne(2), 3, "Exercise 11");
assert(addOne(0), 1, "Exercise 11");
assert(addOne(positiveEvenNumber), positiveEvenNumber + 1, "Exercise 11");
assert(addOne(negativeOddNumber), negativeOddNumber + 1, "Exercise 11");
addToDone("Exercise 11 is correct.")


// The next exercises will be focusing on basic operators in JS
// Exercise 12
// Write a function definition named isPositive that takes in a number and returns true or false if that number is positive.
// Think about the definition of a number that is positive.
// Is 5 positive? Is 0.25 positive? Is 0.00001 positive? Is -0.001 positive?
// Is zero itself positive? What about infinity? What about negative infinity?
// Documentation for comparison operators https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#relational_operators
// HINT - here are example functions using comparison operators https://gist.github.com/ryanorsinger/e843c7d0966993bd8193f0afabe16ae0
// If you get stuck, be sure to check the example code and documentation listed above
function isPositive(number){
    if(number > 0){
        return true;
    } else {
        return false;
    }
}



assert(isPositive(0.25), true, "Exercise 12");
assert(isPositive(0.00001), true, "Exercise 12");
assert(isPositive(Infinity), true, "Exercise 12");
assert(isPositive(0), false, "Exercise 12");
assert(isPositive(-0.001), false, "Exercise 12");
assert(isPositive(positiveOddNumber), true, "Exercise 12");
assert(isPositive(positiveEvenNumber), true, "Exercise 12");
assert(isPositive(negativeOddNumber), false, "Exercise 12");
assert(isPositive(negativeEvenNumber), false, "Exercise 12");
assert(isPositive(-Infinity), false, "Exercise 12");
addToDone("Exercise 12 is correct.")


// Exercise 13
// Write a function definition named isNegative that takes in a number and returns true or False if that number is negative.
function isNegative(number){
    if(number < 0){
        return true;
    } else {
        return false;
    }
}



assert(isNegative(positiveOddNumber), false, "Exercise 13");
assert(isNegative(positiveEvenNumber), false, "Exercise 13");
assert(isNegative(negativeOddNumber), true, "Exercise 13");
assert(isNegative(negativeEvenNumber), true, "Exercise 13");
addToDone("Exercise 13 is correct.")


// Exercise 14
// Write a function definition named isOdd that takes in a number and returns true or false if that number is odd.
function isOdd(x){
    if(x%2 === 0){
        return false;
    } else {
        return true;
    }
}
assert(isOdd(positiveOddNumber), true, "Exercise 14");
assert(isOdd(positiveEvenNumber), false, "Exercise 14");
assert(isOdd(negativeOddNumber), true, "Exercise 14");
assert(isOdd(negativeEvenNumber), false, "Exercise 14");
addToDone("Exercise 14 is correct.")

// Exercise 15
// Write a function definition named isEven that takes in a number and returns true or false if that number is even.
function isEven(y){
    if(y%2 === 0){
        return true;
    } else {
        return false;
    }
}
assert(isEven(2), true, "Exercise 15");
assert(isEven(positiveOddNumber), false, "Exercise 15");
assert(isEven(positiveEvenNumber), true, "Exercise 15");
assert(isEven(negativeOddNumber), false, "Exercise 15");
assert(isEven(negativeEvenNumber), true, "Exercise 15");
addToDone("Exercise 15 is correct.")


// Exercise 16
// Write a function definition named identity that takes in any input and returns that input. Don't overthink this one!
function identity(input){
    return input;
}
assert(identity(fruits), fruits, "Exercise 16");
assert(identity(vegetables), vegetables, "Exercise 16");
assert(identity(positiveOddNumber), positiveOddNumber, "Exercise 16");
assert(identity(positiveEvenNumber), positiveEvenNumber, "Exercise 16");
assert(identity(negativeOddNumber), negativeOddNumber, "Exercise 16");
assert(identity(negativeEvenNumber), negativeEvenNumber, "Exercise 16");
addToDone("Exercise 16 is correct.")


// Exercise 17
// Write a function definition named isPositiveOdd that takes in a number and returns true or false if the value is both greater than zero and odd
function isPositiveOdd(n){
    if((n%2 !== 0) && (n > 0)){
        return true;
    } return false;
}


assert(isPositiveOdd(3), true, "Exercise 17");
assert(isPositiveOdd(positiveOddNumber), true, "Exercise 17");
assert(isPositiveOdd(positiveEvenNumber), false, "Exercise 17");
assert(isPositiveOdd(negativeOddNumber), false, "Exercise 17");
assert(isPositiveOdd(negativeEvenNumber), false, "Exercise 17");
addToDone("Exercise 17 is correct.")


// Exercise 18
// Write a function definition named isPositiveEven that takes in a number and returns true or false if the value is both greater than zero and even
function isPositiveEven(num){
    if((num%2 === 0) && (num > 0)){
        return true;
    } return false;
}
assert(isPositiveEven(4), true, "Exercise 18" );
assert(isPositiveEven(positiveOddNumber), false, "Exercise 18");
assert(isPositiveEven(positiveEvenNumber), true, "Exercise 18");
assert(isPositiveEven(negativeOddNumber), false, "Exercise 18");
assert(isPositiveEven(negativeEvenNumber), false, "Exercise 18");
addToDone("Exercise 18 is correct.")


// Exercise 19
// Write a function definition named isNegativeOdd that takes in a number and returns true or false if the value is both less than zero and odd.
function isNegativeOdd(x){
    if((x%2 !== 0) && (x < 0)){
        return true;
    } return false;
}

assert(isNegativeOdd(-3), true, "Exercise 19" );
assert(isNegativeOdd(positiveOddNumber), false, "Exercise 19");
assert(isNegativeOdd(positiveEvenNumber), false, "Exercise 19");
assert(isNegativeOdd(negativeOddNumber), true, "Exercise 19");
assert(isNegativeOdd(negativeEvenNumber), false, "Exercise 19");
addToDone("Exercise 19 is correct.")


// Exercise 20
// Write a function definition named isNegativeEven that takes in a number and returns true or false if the value is both less than zero and even.
function isNegativeEven(x){
    if((x%2 === 0) && (x < 0)){
        return true;
    } return false;
}
assert(isNegativeEven(-4), true, "Exercise 20" );
assert(isNegativeEven(positiveOddNumber), false, "Exercise 20");
assert(isNegativeEven(positiveEvenNumber), false, "Exercise 20");
assert(isNegativeEven(negativeOddNumber), false, "Exercise 20");
assert(isNegativeEven(negativeEvenNumber), true, "Exercise 20");
addToDone("Exercise 20 is correct.")



// Exercise 21
// Write a function definition named half that takes in a number and returns half the provided number.
function half(n){
    return n/2;
}
assert(half(4), 2, "Exercise 21");
assert(half(5), 2.5, "Exercise 21");
assert(half(positiveOddNumber), positiveOddNumber / 2, "Exercise 21");
assert(half(positiveEvenNumber), positiveEvenNumber / 2, "Exercise 21");
assert(half(negativeOddNumber), negativeOddNumber / 2, "Exercise 21");
assert(half(negativeEvenNumber), negativeEvenNumber / 2, "Exercise 21");
addToDone("Exercise 21 is correct.")



// Exercise 22
// Write a function definition named double that takes in a number and returns double the provided number.
function double(n){
    return n*2;
}
assert(double(4), 8, "Exercise 22");
assert(double(5), 10, "Exercise 22");
assert(double(positiveOddNumber), positiveOddNumber * 2, "Exercise 22");
assert(double(positiveEvenNumber), positiveEvenNumber * 2, "Exercise 22");
assert(double(negativeOddNumber), negativeOddNumber * 2, "Exercise 22");
assert(double(negativeEvenNumber), negativeEvenNumber * 2, "Exercise 22");
addToDone("Exercise 22 is correct.")



// Exercise 23
// Write a function definition named triple that takes in a number and returns triple the provided number.
function triple(n){
    return n*3;
}
assert(triple(4), 12, "Exercise 23");
assert(triple(5), 15, "Exercise 23");
assert(triple(positiveOddNumber), positiveOddNumber * 3, "Exercise 23");
assert(triple(positiveEvenNumber), positiveEvenNumber * 3, "Exercise 23");
assert(triple(negativeOddNumber), negativeOddNumber * 3, "Exercise 23");
assert(triple(negativeEvenNumber), negativeEvenNumber * 3, "Exercise 23");
addToDone("Exercise 23 is correct.")



// Exercise 24
// Write a function definition named reverseSign that takes in a number and returns the provided number but with the sign reversed.
function reverseSign(number){
    return number * (-1);
}
assert(reverseSign(4), -4, "Exercise 24");
assert(reverseSign(-5), 5, "Exercise 24");
assert(reverseSign(positiveOddNumber), positiveOddNumber * -1, "Exercise 24");
assert(reverseSign(positiveEvenNumber), positiveEvenNumber * -1, "Exercise 24");
assert(reverseSign(negativeOddNumber), negativeOddNumber * -1, "Exercise 24");
assert(reverseSign(negativeEvenNumber), negativeEvenNumber * -1, "Exercise 24");
addToDone("Exercise 24 is correct.")



// Exercise 25
// Write a function definition named absoluteValue that takes in a number and returns the absolute value of the provided number
function absoluteValue(x){
    return Math.abs(x);

}
assert(absoluteValue(4), 4, "Exercise 25");
assert(absoluteValue(-5), 5, "Exercise 25");
assert(absoluteValue(positiveOddNumber), positiveOddNumber, "Exercise 25");
assert(absoluteValue(positiveEvenNumber), positiveEvenNumber, "Exercise 25");
assert(absoluteValue(negativeOddNumber), negativeOddNumber * -1, "Exercise 25");
assert(absoluteValue(negativeEvenNumber), negativeEvenNumber * -1, "Exercise 25");
addToDone("Exercise 25 is correct.")



// Exercise 26
// Write a function definition named isMultipleOfThree that takes in a number and returns true or false if the number is evenly divisible by 3.
function isMultipleOfThree(input){
    if(input%3 === 0){
        return true;
    } return false;
}
assert(isMultipleOfThree(3), true, "Exercise 26");
assert(isMultipleOfThree(15), true, "Exercise 26");
assert(isMultipleOfThree(9), true, "Exercise 26");
assert(isMultipleOfThree(4), false, "Exercise 26");
assert(isMultipleOfThree(10), false, "Exercise 26");
addToDone("Exercise 26 is correct.")




// Exercise 27
// Write a function definition named isMultipleOfFive that takes in a number and returns true or false if the number is evenly divisible by 5.
function isMultipleOfFive(number){
    if(number%5 === 0){
        return true;
    } return false;
}
assert(isMultipleOfFive(3), false, "Exercise 27");
assert(isMultipleOfFive(15), true, "Exercise 27");
assert(isMultipleOfFive(9), false, "Exercise 27");
assert(isMultipleOfFive(4), false, "Exercise 27");
assert(isMultipleOfFive(10), true, "Exercise 27");
addToDone("Exercise 27 is correct.")



// Exercise 28
// Write a function definition named isMultipleOfBothThreeAndFive that takes in a number and returns true or false if the number is evenly divisible by both 3 and 5.
function isMultipleOfBothThreeAndFive(g){
    if(g%3 === 0 && g%5 === 0){
        return true;
    } return false;
}
assert(isMultipleOfBothThreeAndFive(15), true, "Exercise 28");
assert(isMultipleOfBothThreeAndFive(45), true, "Exercise 28");
assert(isMultipleOfBothThreeAndFive(3), false, "Exercise 28");
assert(isMultipleOfBothThreeAndFive(9), false, "Exercise 28");
assert(isMultipleOfBothThreeAndFive(4), false, "Exercise 28");
addToDone("Exercise 28 is correct.")




// Exercise 29
// Write a function definition named square that takes in a number and returns the number times itself.
function square(x){
    return x*x;
}
assert(square(3), 9, "Exercise 29");
assert(square(2), 4, "Exercise 29");
assert(square(9), 81, "Exercise 29");
assert(square(positiveOddNumber), positiveOddNumber * positiveOddNumber, "Exercise 29");
addToDone("Exercise 29 is correct.")



// Exercise 30
// Write a function definition named add that takes in two numbers and returns the sum.
function add(x,y){
    return x+y;
}

assert(add(3, 2), 5, "Exercise 30");
assert(add(10, -2), 8, "Exercise 30");
assert(add(5, 7), 12, "Exercise 30");
addToDone("Exercise 30 is correct.")



// Exercise 31
// Write a function definition named cube that takes in a number and returns the number times itself, times itself.
function cube(x){
    return Math.pow(x, 3);
}
assert(cube(3), 27, "Exercise 31");
assert(cube(2), 8, "Exercise 31");
assert(cube(5), 125, "Exercise 31");
assert(cube(positiveOddNumber), positiveOddNumber * positiveOddNumber * positiveOddNumber, "Exercise 31");
addToDone("Exercise 31 is correct.")



// Exercise 32
// Write a function definition named squareRoot that takes in a number and returns the square root of the provided number
function squareRoot(i){
    return Math.sqrt(i);
}

assert(squareRoot(4), 2.0, "Exercise 32");
assert(squareRoot(64), 8.0, "Exercise 32");
assert(squareRoot(81), 9.0, "Exercise 32");
addToDone("Exercise 32 is correct.")




// Exercise 33
// Write a function definition named subtract that takes in two numbers and returns the first minus the second argument.
function subtract(x,y){
    return x-y;
}

assert(subtract(8, 6), 2, "Exercise 33");
assert(subtract(27, 4), 23, "Exercise 33");
assert(subtract(12, 2), 10, "Exercise 33");
addToDone("Exercise 33 is correct.")



// Exercise 34
// Write a function definition named multiply that takes in two numbers and returns the first times the second argument.
function multiply(x,y){
    return x*y;
}
assert(multiply(2, 1), 2, "Exercise 34");
assert(multiply(3, 5), 15, "Exercise 34");
assert(multiply(5, 2), 10, "Exercise 34");
addToDone("Exercise 34 is correct.")



// Exercise 35
// Write a function definition named divide that takes in two numbers and returns the first argument divided by the second argument.
function divide(x,y){
    return x/y;
}

assert(divide(27, 9), 3, "Exercise 35");
assert(divide(15, 3), 5, "Exercise 35");
assert(divide(5, 2), 2.5, "Exercise 35");
assert(divide(10, 2), 5, "Exercise 35");
addToDone("Exercise 35 is correct.")


// Exercise 36
// Write a function definition named quotient that takes in two numbers and returns the quotient of dividing the first argument by the second argument.
function quotient(i,w){
    return parseInt(i/w);
}
assert(quotient(27, 9), 3, "Exercise 36");
assert(quotient(5, 2), 2, "Exercise 36");
assert(quotient(10, 3), 3, "Exercise 36");
addToDone("Exercise 36 is correct.")


// Exercise 37
// Write a function definition named remainder that takes in two numbers and returns the remainder of first argument divided by the second argument.
function remainder(x,y){
    return x%y;
}
assert(remainder(3, 3), 0, "Exercise 37");
assert(remainder(5, 2), 1, "Exercise 37");
assert(remainder(7, 5), 2, "Exercise 37");
addToDone("Exercise 37 is correct.")



// Exercise 38
// Write a function definition named sumOfSquares that takes in two numbers, squares each number, then returns the sum of both squares.
function sumOfSquares(x,b){
    let xSqr = x*x;
    let bSqr = b*b;
    return xSqr+bSqr;
}
assert(sumOfSquares(3, 2), 13, "Exercise 38");
assert(sumOfSquares(5, 2), 29, "Exercise 38");
assert(sumOfSquares(2, 4), 20, "Exercise 38");
addToDone("Exercise 38 is correct.")



// Exercise 39
// Write a function definition named timesTwoPlusThree that takes in a number, multiplies it by two, adds 3 and returns the result.
function timesTwoPlusThree(input){
    return (input*2)+3;
}
assert(timesTwoPlusThree(0), 3, "Exercise 39");
assert(timesTwoPlusThree(1), 5, "Exercise 39");
assert(timesTwoPlusThree(2), 7, "Exercise 39");
assert(timesTwoPlusThree(3), 9, "Exercise 39");
assert(timesTwoPlusThree(5), 13, "Exercise 39");
addToDone("Exercise 39 is correct.")


// Exercise 40
// Write a function definition named areaOfRectangle that takes in two numbers and returns the product.
function  areaOfRectangle(a,b){
    return a*b;
}
assert(areaOfRectangle(1, 3), 3, "Exercise 40");
assert(areaOfRectangle(5, 2), 10, "Exercise 40");
assert(areaOfRectangle(2, 7), 14, "Exercise 40");
assert(areaOfRectangle(5.3, 10.3), 54.59, "Exercise 40");
addToDone("Exercise 40 is correct.")



// Exercise 41
// Write a function definition named areaOfCircle that takes in a number representing a circle's radius and returns the area of the circle
function areaOfCircle(radius){
    let r = Math.pow(radius, 2);
    return Math.PI*r;
}

assert(areaOfCircle(3), 28.274333882308138, "Exercise 41");
assert(areaOfCircle(5), 78.53981633974483, "Exercise 41");
assert(areaOfCircle(7), 153.93804002589985, "Exercise 41");
addToDone("Exercise 41 is correct.")


// Exercise 42
// Write a function definition named circumference that takes in a number representing a circle's radius and returns the circumference.
function circumference(rad){
    return 2*rad*Math.PI;
}
assert(circumference(3), 18.84955592153876, "Exercise 42");
assert(circumference(5), 31.41592653589793, "Exercise 42");
assert(circumference(7), 43.982297150257104, "Exercise 42");
addToDone("Exercise 42 is correct.")


// In earlier exercises, the solution was to use a logical AND.
// In some of the future exercises, the solution will be to use a logical OR.
// The following two example functions are examples that provide a hint on how to as

// Example function where the function returns true if the input is one OR two.
function isOneOrTwo(x) {
    return x == 1 || x == 2
}

// Example function where the input is one of 3 possibilities
function isOneOrTwoOrThree(x) {
    return x == 1 || x == 2 || x == 3
}

// Exercise 43
// Review this code carefully https://gist.github.com/ryanorsinger/5627b954d119dabb3d8c44d56b38c354 if you want more guidance on Exercises 43, 44, and 45.
// Write a function definition named isVowel that takes in value and returns true if the value is a, e, i, o, u in upper or lower case.
function isVowel(vow){
    if (vow === 'a'|| vow === 'e'|| vow === 'i'|| vow === 'o'|| vow === 'u'||
        vow === 'A'|| vow === 'E'|| vow === 'I'|| vow === 'O'|| vow === 'U'){
        return true;
    } else {
        return false;
    }
}
assert(isVowel("a"), true, "Exercise 43");
assert(isVowel("U"), true, "Exercise 43");
assert(isVowel("banana"), false, "Exercise 43");
assert(isVowel("Q"), false, "Exercise 43");
assert(isVowel("y"), false, "Exercise 43");
addToDone("Exercise 43 is correct.")


// Exercise 44
// Write a function definition named hasVowels that takes in value and returns true if the string contains any vowels.
function hasVowels(input){
    var vow = 'aeiou';
    var count = 0;
    for(var x = 0; x < input.length; x++){
        if(vow.toLowerCase().indexOf(input[x]) !== -1){
            count++;
        }
    }
    return count > 0;
}
assert(hasVowels("banana"), true, "Exercise 44");
assert(hasVowels("ubuntu"), true, "Exercise 44");
assert(hasVowels("QQQQ"), false, "Exercise 44");
assert(hasVowels("wyrd"), false, "Exercise 44");
addToDone("Exercise 44 is correct.")


// Exercise 45
// Write a function definition named countVowels that takes in value and returns the count of the nubmer of vowels in a sequence.
function countVowels(value){
    var vow = 'aeiou';
    var count = 0;
    for(var x = 0; x < value.length; x++){
        if(vow.toLowerCase().indexOf(value[x]) !== -1){// copied from #44
            count++;
        }
    }
    return count;
}
assert(countVowels("banana"), 3, "Exercise 45");
assert(countVowels("ubuntu"), 3, "Exercise 45");
assert(countVowels("mango"), 2, "Exercise 45");
assert(countVowels("QQQQ"), 0, "Exercise 45");
assert(countVowels("wyrd"), 0, "Exercise 45");
addToDone("Exercise 45 is correct.")


// Exercise 46
// Write a function definition named removeVowels that takes in string and returns the string without any vowels
function removeVowels(reVowels){
    return reVowels.replace(/[AEIOUaeiou]/g, "");
}
assert(removeVowels("banana"), "bnn", "Exercise 46");
assert(removeVowels("ubuntu"), "bnt", "Exercise 46");
assert(removeVowels("mango"), "mng", "Exercise 46");
assert(removeVowels("QQQQ"), "QQQQ", "Exercise 46");
addToDone("Exercise 46 is correct.")


// Exercise 47
// Write a function definition named startsWithVowel that takes in string and true if the string starts with a vowel
function startsWithVowel(start){
    let startNew = start.charAt(0); // curious why charAt worked but not charCodeAt
    if(startNew === 'a' || startNew === 'e' || startNew === 'i' || startNew === 'o' || startNew === 'u'){
        return true;
    } else {
        return false;
    }
}
assert(startsWithVowel("ubuntu"), true, "Exercise 47");
assert(startsWithVowel("banana"), false, "Exercise 47");
assert(startsWithVowel("mango"), false, "Exercise 47");
addToDone("Exercise 47 is correct.")


// Exercise 48
// Write a function definition named endsWithVowel that takes in string and true if the string ends with a vowel
function endsWithVowel(end){
    var end = end.split('');// can't use let her bc can't be called
    let endNew = end.pop(); // curious why charAt worked but not charCodeAt
    if(endNew === 'a' || endNew === 'e' || endNew === 'i' || endNew === 'o' || endNew === 'u'){
        return true;
    } else {
        return false;
    }
}

assert(endsWithVowel("ubuntu"), true, "Exercise 48");
assert(endsWithVowel("banana"), true, "Exercise 48");
assert(endsWithVowel("mango"), true, "Exercise 48");
assert(endsWithVowel("spinach"), false, "Exercise 48");
addToDone("Exercise 48 is correct.")


// Exercise 49
// Write a function definition named startsAndEndsWithVowel that takes in string and returns true if the string starts and ends with a vowel
function startsAndEndsWithVowel(input){
    //charAt returns a new string consisting of the single UTF-16 code unit located at the specified offset into the string.
    var input1 = input.charAt(0);
    var input2 = input.charAt(input.length - 1);// grab last letter
    if((input2 === 'a' || input2 === 'e' || input2 === 'i' || input2 === 'o' || input2 === 'u')
        && (input1 === 'a' || input1 === 'e' || input1 === 'i' || input1 === 'o' || input1 === 'u')){
        return true; // if end of word has a vowel once we split it
    } else {
        return false;
    }
}
assert(startsAndEndsWithVowel("ubuntu"), true, "Exercise 49");
assert(startsAndEndsWithVowel("banana"), false, "Exercise 49");
assert(startsAndEndsWithVowel("mango"), false, "Exercise 49");
addToDone("Exercise 49 is correct.")


// Exercise 50
// Write a function definition named first that takes in sequence and returns the first value of that sequence.
function first(value){
    return value[0];// returns first value sequence
}
assert(first("ubuntu"), "u", "Exercise 50");
assert(first([1, 2, 3]), 1, "Exercise 50");
assert(first(["JS", "is", "awesome"]), "JS", "Exercise 50");
addToDone("Exercise 50 is correct.")




// Exercise 51
// Write a function definition named second that takes in sequence and returns the second value of that sequence.
function second(value){
    return value[1];// returns second value sequence
}
assert(second("ubuntu"), "b", "Exercise 51");
assert(second([1, 2, 3]), 2, "Exercise 51");
assert(second(["JS", "is", "awesome"]), "is", "Exercise 51");
addToDone("Exercise 51 is correct.")


// Exercise 52
// Write a function definition named third that takes in sequence and returns the third value of that sequence.
function third(value){
    return value[2];// returns second value sequence
}
assert(third("ubuntu"), "u", "Exercise 52");
assert(third([1, 2, 3]), 3, "Exercise 52");
assert(third(["JS", "is", "awesome"]), "awesome", "Exercise 52");
addToDone("Exercise 52 is correct.")


// Exercise 53
// Write a function definition named forth that takes in sequence and returns the forth value of that sequence.
function forth(value){
    return value[3];// returns second value sequence
}
assert(forth("ubuntu"), "n", "Exercise 53");
assert(forth([1, 2, 3, 4]), 4, "Exercise 53");
assert(forth(["JS", "is", "awesome", "right?"]), "right?", "Exercise 53");
addToDone("Exercise 53 is correct.")


// Exercise 54
// Write a function definition named last that takes in sequence and returns the last value of that sequence.
function last(value){
    return value[value.length-1];// returns last value in sequence
}
assert(last("ubuntu"), "u", "Exercise 54");
assert(last([1, 2, 3, 4]), 4, "Exercise 54");
assert(last(["JS", "is", "awesome"]), "awesome", "Exercise 54");
assert(last(["kiwi", "mango", "guava"]), "guava", "Exercise 54");
addToDone("Exercise 54 is correct.")


// Exercise 55
// Write a function definition named secondToLast that takes in sequence and returns the second to last value of that sequence.
function secondToLast(value){
    return value[value.length-2];// returns second to lastvalue sequence
}
assert(secondToLast("ubuntu"), "t", "Exercise 55");
assert(secondToLast([1, 2, 3, 4]), 3, "Exercise 55");
assert(secondToLast(["JS", "is", "awesome"]), "is", "Exercise 55");
assert(secondToLast(["kiwi", "mango", "guava"]), "mango", "Exercise 55");
addToDone("Exercise 55 is correct.")


// Exercise 56
// Write a function definition named thirdToLast that takes in sequence and returns the third to last value of that sequence.
function thirdToLast(value){
    return value[value.length-3];// returns third to last value sequence
}
assert(thirdToLast("ubuntu"), "n", "Exercise 56");
assert(thirdToLast([1, 2, 3, 4]), 2, "Exercise 56");
assert(thirdToLast(["JS", "is", "awesome"]), "JS", "Exercise 56");
assert(thirdToLast(["strawberry", "kiwi", "mango", "guava"]), "kiwi", "Exercise 56");
addToDone("Exercise 56 is correct.")


// Exercise 57
// Write a function definition named firstAndSecond that takes in sequence and returns the first and second value of that sequence as an array
// function firstAndSecond(value){
//   return value(value[0],value.length-3);// returns third to last value sequence
// } first attempt
function firstAndSecond(value){
    var f_n_s = value.slice(0,2);
    return f_n_s;
}

assert(firstAndSecond([1, 2, 3, 4]), [1, 2], "Exercise 57");
assert(firstAndSecond(["JS", "is", "awesome"]), ["JS", "is"], "Exercise 57");
assert(firstAndSecond(["strawberry", "kiwi", "mango", "guava"]), ["strawberry", "kiwi"], "Exercise 57");
addToDone("Exercise 57 is correct.")


// Exercise 58
// Write a function definition named firstAndLast that takes in sequence and returns the first and last value of that sequence as an array
function firstAndLast(value){
    var l_value = value[value.length-1];
    var f_vale = value[0];
    var seq = [f_vale, l_value];
    return seq;
}
assert(firstAndLast([1, 2, 3, 4]), [1, 4], "Exercise 58");
assert(firstAndLast(["JS", "is", "awesome"]), ["JS", "awesome"], "Exercise 58");
assert(firstAndLast(["strawberry", "kiwi", "mango", "guava"]), ["strawberry", "guava"], "Exercise 58");
addToDone("Exercise 58 is correct.")



// Exercise 59
// Write a function definition named firstToLast that takes in sequence and returns the sequence with the first value moved to the end of the sequence.
function firstToLast(fToL){
    fToL.push(fToL.shift());//pushes first value to end of our sequence
    return fToL;
}
assert(firstToLast([1, 2, 3, 4]), [2, 3, 4, 1], "Exercise 59");
assert(firstToLast(["JS", "is", "awesome"]), ["is", "awesome", "JS"], "Exercise 59");
assert(firstToLast(["strawberry", "kiwi", "mango", "guava"]), ["kiwi", "mango", "guava", "strawberry"], "Exercise 59");
addToDone("Exercise 59 is correct.")



// Exercise 60 **** BE ABLE TO EXPLAIN IN PLAIN TERMS WHAT YOU DO HERE
// Write a function definition named sumAll that takes in sequence of numbers and returns all the numbers added together.
function sumAll(numbers){// gives name to function and assigns variable
    var x = 0; // created initial variable for start of sequence
    for(var i = 0; i < numbers.length; i++){//set initial value, condition and incrementation, treating numbers as an array
        var seq = numbers[i]; //create shorthand notation for numbers as an array which loop will loop through starting at pos 0
        x += seq; //x=x+sequence, mathmatical operation to be exectute in order to add numbers all together and return that value
    } return x; // provides result
}
assert(sumAll([1, 2, 3, 4]), 10, "Exercise 60");
assert(sumAll([3, 3, 3]), 9, "Exercise 60");
assert(sumAll([0, 5, 6]), 11, "Exercise 60");
addToDone("Exercise 60 is correct.")



//  Exercise 61
//  Write a function definition named mean that takes in sequence of numbers and returns the average value
function mean(xan){
    var x = 0;
    for (var i = 0; i < xan.length; i++){
        var avg = xan[i];
        x += avg;
    } return x/xan.length; //watch how we are naming things bc got confused on
    // this returns the average sequence of numbers
}
assert(mean([1, 2, 3, 4]), 2.5, "Exercise 61");
assert(mean([3, 3, 3]), 3, "Exercise 61");
assert(mean([1, 5, 6]), 4, "Exercise 61");
addToDone("Exercise 61 is correct.")



// Exercise 62
// Write a function definition named median that takes in sequence of numbers and returns the average value
function median(seq_of_numbers){

    var order = [...seq_of_numbers].slice().sort((x,y) => x-y); //... allows us to set up a concept without defining x,y
    var halfed = Math.floor(order.length / 2);
    if (order.length % 2 === 0){
        var avgVal =  (order[halfed -1] + order[halfed]) / 2;
        return avgVal;
    }
    return order[halfed];
}
// slice allows us to select elements from an array x.slice(1,3)
// sort() sorts an array alphabetically x.sort()
// Math.floor rounds number downward to its nearest integer
//https://www.w3resource.com/javascript-exercises/fundamental/javascript-fundamental-exercise-88.php
//https://discuss.codecademy.com/t/where-did-arr-and-newarr-come-from-and-what-do-they-do-or-mean/376214
//send and receive parameters we use the standard parentheses "( )"
//curly brackets are used to define the start and end of the function

//#Source https://bit.ly/2neWfJ2

assert(median([1, 2, 3, 4, 5]), 3.0, "Exercise 62");
assert(median([1, 2, 3]), 2.0, "Exercise 62");
assert(median([1, 5, 6]), 5.0, "Exercise 62");
assert(median([1, 2, 5, 6]), 3.5, "Exercise 62");
addToDone("Exercise 62 is correct.")

// Exercise 63
// Write a function definition named maxMinusMin that takes in an array of numbers and returns the difference of the maximum minus theminimum.
function maxMinusMin(arrayOfNumbers){
    //returns the difference of the maximum minus the minimum
    // create a max value, a min value and put into variable to rep max-min
    arrayOfNumbers.sort();// puts in order least to greatest
    var max = arrayOfNumbers[arrayOfNumbers.length-1];
    var min = arrayOfNumbers[0]
    var calcValue = max- min;
    return calcValue
}

assert(maxMinusMin([1, 2, 2, 8, 3, 4]), 7, "Exercise 63");
assert(maxMinusMin([1, 1, 2, 3, 9]), 8, "Exercise 63");
assert(maxMinusMin([2, 2, 3, 3, 3, 7]), 5, "Exercise 63");
addToDone("Exercise 63 is correct.")


// Exercise 64
// Write a function definition named productOfAll that takes in sequence of numbers and returns the product of multiplying all the numbers together
function productOfAll(seqOfNumb){
    //returns the product of multiplying all the numbers together
    var product = 1;// tried value of 0 and didn't work for some reason, not sure why
    for (let i = 0; i < seqOfNumb.length; i++) {
        product *= seqOfNumb[i];
    }
    return product;
}
assert(productOfAll([1, 2, 3]), 6, "Exercise 64");
assert(productOfAll([3, 4, 5]), 60, "Exercise 64");
assert(productOfAll([2, 2, 3, 0]), 0, "Exercise 64");
addToDone("Exercise 64 is correct.")


// Exercise 65
// Write a function definition named getHighestNumber that takes in sequence of numbers and returns the largest number.
function getHighestNumber(groupOfNumbers){
    //return largerst number
    groupOfNumbers.sort();// sorting everything into ascending order
    var largest = groupOfNumbers[groupOfNumbers.length-1];
    //bc it's sorted, we pull the last place in the array of numbers[] for groupOfNumbers
    return largest;
}

assert(getHighestNumber([1, 2, 3]), 3, "Exercise 65");
assert(getHighestNumber([1, 5, 2, 3, 4]), 5, "Exercise 65");
assert(getHighestNumber([5, 1, 2, 4, 9]), 9, "Exercise 65");
addToDone("Exercise 65 is correct.")

// Exercise 66
// Write a function definition named getSmallestNumber that takes in sequence of numbers and returns the smallest number.
function getSmallestNumber(setOfNumb){
    //returns the smallest number
    // approach is going to be same as 65 but grabbing first number after sorting
    setOfNumb.sort();// watch out for neg that have larger absolute values than pos numbers
    var smallest = setOfNumb[0];
    return smallest;
}

assert(getSmallestNumber([1, 2, 3]), 1, "Exercise 66");
assert(getSmallestNumber([3, 5, 9, 8, 1]), 1, "Exercise 66");
assert(getSmallestNumber([8, 9, 4, 5, 7]), 4, "Exercise 66");
addToDone("Exercise 66 is correct.")

// Exercise 67
// Write a function definition named onlyOddNumbers that takes in sequence of numbers and returns the odd numbers in an array.
function onlyOddNumbers(arrayOfOddNumbers){
    var oddNumbers = [];
    for (let i = 0; i < arrayOfOddNumbers.length; i++) {
        if (isOdd(arrayOfOddNumbers[i])){
            // initial if argument arrayOfOddNumbers[i]%2 === 1, think it can work but have to figure it out this way
            oddNumbers.push(arrayOfOddNumbers[i]);
        }
    }
    return oddNumbers;
}
assert(onlyOddNumbers([1, 2, 3]), [1, 3], "Exercise 67");
assert(onlyOddNumbers([-5, -4, -3, -2, -1, 1, 2, 3, 4, 5]), [-5, -3, -1, 1, 3, 5], "Exercise 67");
assert(onlyOddNumbers([-4, -3, 1]), [-3, 1], "Exercise 67");
addToDone("Exercise 67 is correct.")



// Exercise 68
// Write a function definition named onlyEvenNumbers that takes in sequence of numbers and returns the even numbers in an array.
// function onlyEvenNumbers(){return !onlyOddNumbers();} thought this might work in theory
function onlyEvenNumbers(evenNumberArray){
    // returns the even numbers in an array
    // copy of 67 but using isEven to check boolean value
    var evenNumbers = [];
    for (let i = 0; i < evenNumberArray.length; i++) {
        if (isEven(evenNumberArray[i])){
            evenNumbers.push(evenNumberArray[i]);
        }
    }
    return evenNumbers;
}
assert(onlyEvenNumbers([1, 2, 3]), [2], "Exercise 68");
assert(onlyEvenNumbers([-5, -4, -3, -2, -1, 1, 2, 3, 4, 5]), [-4, -2, 2, 4], "Exercise 68");
assert(onlyEvenNumbers([-4, -3, 1]), [-4], "Exercise 68");
addToDone("Exercise 68 is correct.")

// Exercise 69
// Write a function definition named onlyPositiveNumbers that takes in sequence of numbers and returns the positive numbers in an array.
function onlyPositiveNumbers(Pos){
    // returns the positive numbers in an array
    var soln = [];
    for (let i = 0; i < Pos.length; i++) {
        if (Pos[i] > 0){
            soln.push(Pos[i]);
        }
    }
    return soln;
}
assert(onlyPositiveNumbers([1, 2, 3]), [1, 2, 3], "Exercise 69");
assert(onlyPositiveNumbers([-5, -4, -3, -2, -1, 1, 2, 3, 4, 5]), [1, 2, 3, 4, 5], "Exercise 69");
assert(onlyPositiveNumbers([-4, -3, 1]), [1], "Exercise 69");
addToDone("Exercise 69 is correct.")


// Exercise 70
// Write a function definition named onlyNegativeNumbers that takes in sequence of numbers and returns the negative numbers in an array.
function onlyNegativeNumbers(arrayOfNegative){
    // returns the positive numbers in an array
    var onlyNeg = [];
    for (let i = 0; i < arrayOfNegative.length; i++) {
        if (arrayOfNegative[i] < 0){
            onlyNeg.push(arrayOfNegative[i]);
        }
    }
    return onlyNeg;
}
assert(onlyNegativeNumbers([1, 2, 3]), [], "Exercise 70");
assert(onlyNegativeNumbers([-5, -4, -3, -2, -1, 1, 2, 3, 4, 5]), [-5, -4, -3, -2, -1], "Exercise 70");
assert(onlyNegativeNumbers([-4, -3, 1]), [-4, -3], "Exercise 70");
addToDone("Exercise 70 is correct.");



// Exercise 71
// Write a function definition named hasEvens that takes in sequence of numbers and returns true if there are any even numbers in the sequence
function hasEvens(evenSeq){
    // returns true if there are any even numbers in the sequence
    // looks like boolean value return
    var hasEvenNumbers = [];// thought i would need but ended up not
    for (let i = 0; i < evenSeq.length; i++) {
        if (evenSeq[i]%2 === 0){
            return true;
        }
    }
    return false;
}
assert(hasEvens([1, 2, 3]), true, "Exercise 71");
assert(hasEvens([2, 5, 6]), true, "Exercise 71");
assert(hasEvens([3, 3, 3]), false, "Exercise 71");
assert(hasEvens([]), false, "Exercise 71");
addToDone("Exercise 71 is correct.");



// Exercise 72
// Write a function definition named countEvens that takes in sequence of numbers and returns the number of even numbers
function countEvens(countedValues){
    // returns the number of even numbers
    var counted = 0;// tried empty array [], but first value is undefined bc no starting point
    for (let i = 0; i < countedValues.length; i++) {
        if (countedValues[i] % 2 === 0) {
            counted++;
        }
    }
    return counted;
}
assert(countEvens([1, 2, 3]), 1, "Exercise 72");
assert(countEvens([2, 5, 6]), 2, "Exercise 72");
assert(countEvens([3, 3, 3]), 0, "Exercise 72");
assert(countEvens([5, 6, 7, 8] ), 2, "Exercise 72");
addToDone("Exercise 72 is correct.")


// Exercise 73
// Write a function definition named hasOdds that takes in sequence of numbers and returns true if there are any odd numbers in the sequence
function hasOdds(oddSeq){
    // returns true if there are any odd numbers in the sequence
    // looks like boolean value return
    var hasOddNumbers = [];
    for (let i = 0; i < oddSeq.length; i++) {
        if (oddSeq[i]%2 === 1){
            return true;
        }
    }
    return false;
}// previous problem helped solve this one problem# 71
assert(hasOdds([1, 2, 3]), true, "Exercise 73");
assert(hasOdds([2, 5, 6]), true, "Exercise 73");
assert(hasOdds([3, 3, 3]), true, "Exercise 73");
assert(hasOdds([2, 4, 6]), false, "Exercise 73");
addToDone("Exercise 73 is correct.")


// Exercise 74
// Write a function definition named countOdds that takes in sequence of numbers and returns a count of the any odd numbers in the sequence
function countOdds(countedValues){
    // returns the number of even numbers
    var counted = 0;// tried empty array [], but first value is undefined bc no starting point
    for (let i = 0; i < countedValues.length; i++) {
        if (countedValues[i] % 2 === 1) {
            counted++;
        }
    }
    return counted;
}
assert(countOdds([1, 2, 3]), 2, "Exercise 74");
assert(countOdds([2, 5, 6]), 1, "Exercise 74");
assert(countOdds([3, 3, 3]), 3, "Exercise 74");
assert(countOdds([2, 4, 6]), 0, "Exercise 74");
addToDone("Exercise 74 is correct.")


// Exercise 75
// Write a function definition named countNegatives that takes in sequence of numbers and returns a count of the number of negative numbers
function countNegatives(negativeValues){
    var negativeCount = 0;
    for (let i = 0; i < negativeValues.length; i++) {
        if (negativeValues[i] < 0){
            negativeCount++
        }
    }
    return negativeCount;
}
assert(countNegatives([1, -2, 3]), 1, "Exercise 75");
assert(countNegatives([2, -5, -6]), 2, "Exercise 75");
assert(countNegatives([3, 3, 3]), 0, "Exercise 75");
addToDone("Exercise 75 is correct.")


// Exercise 76
// Write a function definition named countPositives that takes in sequence of numbers and returns a count of the number of positive numbers
function countPositives(positiveValues){
    var positiveCount = 0;
    for (let i = 0; i < positiveValues.length; i++) {
        if (positiveValues[i] > 0){
            positiveCount++
        }
    }
    return positiveCount;
}
assert(countPositives([1, -2, 3]), 2, "Exercise 76");
assert(countPositives([2, -5, -6]), 1, "Exercise 76");
assert(countPositives([3, 3, 3]), 3, "Exercise 76");
assert(countPositives([-2, -1, -5]), 0, "Exercise 76");
addToDone("Exercise 76 is correct.")


// Exercise 77
// Write a function definition named onlyPositiveEvens that takes in sequence of numbers and returns an array containing all the positive evens from the sequence
function onlyPositiveEvens(numbs){
    //returns an array containing all the positive evens from the sequence
    var PositiveOnly = [];// empty array to store requested values in
    for (let i = 0; i < numbs.length; i++) {
        if (numbs[i] > 0 && numbs[i]%2 === 0){//checking if positive and even
            PositiveOnly.push(numbs[i]);// if check is good, pass into empty array
        }
    }
    return PositiveOnly;// show us empty array
}
// alternatively can also call the function || EITHER WILL RETURN SAME

// function onlyPositiveEvens(numbs){
//     //returns an array containing all the positive evens from the sequence
//     var PositiveOnly = [];// empty array to store requested values in
//     for (let i = 0; i < numbs.length; i++) {
//         if (isPositive(numbs[i]) && isEven(numbs[i])){//CALLING OLDER FUNCTIONS
//             PositiveOnly.push(numbs[i]);// if check is good, pass into empty array
//         }
//     }
//     return PositiveOnly;// show us empty array
// }
assert(onlyPositiveEvens([1, -2, 3]), [], "Exercise 77");
assert(onlyPositiveEvens([2, -5, -6]), [2], "Exercise 77");
assert(onlyPositiveEvens([3, 3, 4, 6]), [4, 6], "Exercise 77");
assert(onlyPositiveEvens([2, 3, 4, -1, -5]), [2, 4], "Exercise 77");
addToDone("Exercise 77 is correct.")


// Exercise 78
// Write a function definition named onlyPositiveOdds that takes in sequence of numbers and returns an array containing all the positive odd numbers from the sequence
function onlyPositiveOdds(numbs){
    //returns an array containing all the positive evens from the sequence
    var PositiveOddOnly = [];// empty array to store requested values in
    for (let i = 0; i < numbs.length; i++) {
        if (isPositive(numbs[i]) && isOdd(numbs[i])){//CALLING OLDER FUNCTIONS
            PositiveOddOnly.push(numbs[i]);// if check is good, pass into empty array
        }
    }
    return PositiveOddOnly;// show us empty array
}
assert(onlyPositiveOdds([1, -2, 3]), [1, 3], "Exercise 78");
assert(onlyPositiveOdds([2, -5, -6]), [], "Exercise 78");
assert(onlyPositiveOdds([3, 3, 4, 6]), [3, 3], "Exercise 78");
assert(onlyPositiveOdds([2, 3, 4, -1, -5]), [3], "Exercise 78");
addToDone("Exercise 78 is correct.")


// Exercise 79
// Write a function definition named onlyNegativeEvens that takes in sequence of numbers and returns an array containing all the negative even numbers from the sequence
function onlyNegativeEvens(numbs){
    //returns an array containing all the positive evens from the sequence
    var NegativeEvenOnly = [];// empty array to store requested values in
    for (let i = 0; i < numbs.length; i++) {
        if (isNegative(numbs[i]) && isEven(numbs[i])){//CALLING OLDER FUNCTIONS
            NegativeEvenOnly.push(numbs[i]);// if check is good, pass into empty array
        }
    }
    return NegativeEvenOnly;// show us empty array
}
assert(onlyNegativeEvens([1, -2, 3]), [-2], "Exercise 79");
assert(onlyNegativeEvens([2, -5, -6]), [-6], "Exercise 79");
assert(onlyNegativeEvens([3, 3, 4, 6]), [], "Exercise 79");
assert(onlyNegativeEvens([-2, 3, 4, -1, -4]), [-2, -4], "Exercise 79");
addToDone("Exercise 79 is correct.")


// Exercise 80
// Write a function definition named onlyNegativeOdds that takes in sequence of numbers and returns an array containing all the negative odd numbers from the sequence
function onlyNegativeOdds(numbs){
    //returns an array containing all the positive evens from the sequence
    var NegativeOddOnly = [];// empty array to store requested values in
    for (let i = 0; i < numbs.length; i++) {
        if (isNegative(numbs[i]) && isOdd(numbs[i])){//CALLING OLDER FUNCTIONS
            NegativeOddOnly.push(numbs[i]);// if check is good, pass into empty array
        }
    }
    return NegativeOddOnly;// show us empty array
}
assert(onlyNegativeOdds([1, -2, 3]), [], "Exercise 80");
assert(onlyNegativeOdds([2, -5, -6]), [-5], "Exercise 80");
assert(onlyNegativeOdds([3, 3, 4, 6]), [], "Exercise 80");
assert(onlyNegativeOdds([2, -3, 4, -1, -4]), [-3, -1], "Exercise 80");
addToDone("Exercise 80 is correct.")


// Exercise 81
// Write a function definition named shortestString that takes in an array of strings and returns the shortest string in the array.
function shortestString(shortStr) {
    var leastAmntOfCharacters = shortStr.reduce((x,y) => x.length <= y.length ? x : y);
    return leastAmntOfCharacters
}
    // for (let i = 0; i < shortStr.length; i++) {
    //     if (shortStr[i].length < smallest.length){}
    //         smallest = shortStr[i];// makes new smallest if argument is met
    //
    // }
    // return smallest; I KNOW IT CAN WORK, JUST ISN'T HAD TO LOOK UP INSTEAD

    //shortStr.sort();// sorting in ascending order| assuming 1st entry is smallest string
// INITIAL THINKING FOR THIS ONE
    // for (let i = 0; i < shortStr.length; i++) {
    //     if (shortStr[i] < shortStr[0]){
    //         shortest = shortStr[i];
    //     }
    // }
    // return shortest;

assert(shortestString(["kiwi", "mango", "strawberry"]), "kiwi", "Exercise 81");
assert(shortestString(["hello", "everybody"]), "hello", "Exercise 81");
assert(shortestString(["mary", "had", "a", "little", "lamb"]), "a", "Exercise 81");
addToDone("Exercise 81 is correct.")


// Exercise 82
// Write a function definition named longestString that takes in sequence of strings and returns the longest string in the array.
function longestString(longStr){
    var mostAmntOfCharacters = longStr.reduce((x,y) => x.length >= y.length ? x : y);
    return mostAmntOfCharacters
}
assert(longestString(["kiwi", "mango", "strawberry"]), "strawberry", "Exercise 82");
assert(longestString(["hello", "everybody"]), "everybody", "Exercise 82");
assert(longestString(["mary", "had", "a", "little", "lamb"]), "little", "Exercise 82");
addToDone("Exercise 82 is correct.")


// Exercise 83
// Write a function definition named getUniqueValues that takes in an array and returns an with only the unique values from that array.
function getUniqueValues(uniqueValueArray){
    var uniqueArray = [];
    //returns an with only the unique (non duplicated values) values from that array
    for (let i = 0; i < uniqueValueArray.length; i++) {
        if (uniqueArray.includes(uniqueValueArray[i])){
            //includes() boolean returns if array includes certain values among entries
            continue;
        }
        uniqueArray.push(uniqueValueArray[i])
    }
    return uniqueArray;
}
assert(getUniqueValues(["ant", "ant", "mosquito", "mosquito", "ladybug"]), ["ant", "mosquito", "ladybug"], "Exercise 83");
assert(getUniqueValues(["b", "a", "n", "a", "n", "a", "s"]), ["b", "a", "n", "s"], "Exercise 83");
assert(getUniqueValues(["mary", "had", "a", "little", "lamb", "little", "lamb", "little", "lamb"]), ["mary", "had", "a", "little", "lamb"], "Exercise 83");
addToDone("Exercise 83 is correct.")


// Exercise 84
// Write a function definition named elementsTimesTwo that takes in an array of numbers and returns an array with each value multiplied by 2.
function elementsTimesTwo(element){
    //returns an array with each value multiplied by 2
    var newElement = [];//note, believe this isn't needed, could just return element w/out need to push
    for (let i = 0; i < element.length; i++) {
        element[i] *= 2;
        newElement.push(element[i]);
    }
    return newElement;
}

assert(elementsTimesTwo([1, 2, 3]), [2, 4, 6], "Exercise 84")
assert(elementsTimesTwo([0, 0, 0]), [0, 0, 0], "Exercise 84")
assert(elementsTimesTwo([5, 10, 15]), [10, 20, 30], "Exercise 84")
addToDone("Exercise 84 is correct.")


// Exercise 85
// Write a function named flatten that takes in an array of arrays. Return the flattened array.
function flatten(flattenedArray){
    var flattened = flattenedArray.reduce((x,y) => x.concat(y));
    //had to look up, also pulled idea from #81
    return flattened;
}

assert(flatten([[1, 2], [3, 4], [5, 6]]), [1, 2, 3, 4, 5, 6], "Exercise 85");
assert(flatten([[1, 2, 3], [1, 2, 3], [1, 2, 3]]), [1, 2, 3, 1, 2, 3, 1, 2, 3], "Exercise 85");
assert(flatten([["tomato", "mango", "kiwi"], ["eggplant", "broccoli"]]), ["tomato", "mango", "kiwi", "eggplant", "broccoli"], "Exercise 85");
addToDone("Exercise 85 is correct.")



// Exercise 86
// Write a function definition named addOneToArray that adds one to every number in an array
function addOneToArray(addingOne){
    //that adds one to every number in an array
    var added = [];
    for (let i = 0; i < addingOne.length; i++) {
        addingOne[i]++;
        added.push(addingOne[i]);
    }
    return addingOne;
}
assert(addOneToArray([1, 2, 3]), [2, 3, 4], "Exercise 86");
assert(addOneToArray([4, 4, 4]), [5, 5, 5], "Exercise 86");
assert(addOneToArray([9, 10, 11]), [10, 11, 12], "Exercise 86");
addToDone("Exercise 86 is correct.")


// Working with JS Objects

// The following objects
const tukeyPaper = {
    "title": "The Future of Data Analysis",
    "author": "John W. Tukey",
    "link": "https://projecteuclid.org/euclid.aoms/1177704711",
    "year_published": 1962
}

const thomasPaper = {
    "title": "A mathematical model of glutathione metabolism",
    "author": "Rachel Thomas",
    "link": "https://www.ncbi.nlm.nih.gov/pubmed/18442411",
    "year_published": 2008
}

// Exercise 87
// Write a function named getPaperTitle that takes in a object and returns the title property
function getPaperTitle(paperObj){
    //takes in a object and returns the title property
    // title is part of the above const,
    var titleObject = paperObj.title;// takes in variable and request title from obj, then return obj below
    return titleObject;
}
assert(getPaperTitle(tukeyPaper), "The Future of Data Analysis", "Exercise 87");
assert(getPaperTitle(thomasPaper), "A mathematical model of glutathione metabolism", "Exercise 87");
addToDone("Exercise 87 is correct.")

// Exercise 88
// Write a function named getYearPublished that takes in an objects and returns the value behind the "year_published" key.
function getYearPublished(yearObj){
    //takes in an objects and returns the value behind the "year_published" key
    var year = yearObj.year_published;
    return year; // similar setip to prev #87
}
assert(getYearPublished(tukeyPaper), 1962, "Exercise 88");
assert(getYearPublished(thomasPaper), 2008, "Exercise 88");
addToDone("Exercise 88 is correct.")

// this code defines a JS object with information about a book.
const book = {
    "title": "Genetic Algorithms and Machine Learning for Programmers",
    "price": 36.99,
    "author": "Frances Buontempo"
}

// Exercise 89
// Write a function named getPrice that takes in a object and returns the price
function getPrice(oriceObj){
    //takes in a object and returns the price
    var pricing = oriceObj.price;
    return pricing;
}
assert(getPrice(book), 36.99, "Exercise 89");
addToDone("Exercise 89 is complete.")



// Exercise 90
// Write a function named getBookAuthor that takes in a object (the above declared book variable) and returns the author's name
function getBookAuthor(authObj){
    //takes in a object (the above declared book variable) and returns the author's name
    var authName = authObj.author;// pulls author in from object created above
    return authName; // similar logic as last few problems
}
assert(getBookAuthor(book), "Frances Buontempo", "Exercise 90");
addToDone("Exercise 90 is complete.")


// The next exercises work with a arrays of objects.
// You'll see arrays of objects over and over again with data in a program.
// Here is our arrays of objects.
const books = [
    {
        "title": "Genetic Algorithms and Machine Learning for Programmers",
        "price": 36.99,
        "author": "Frances Buontempo"
    },
    {
        "title": "The Visual Display of Quantitative Information",
        "price": 38.00,
        "author": "Edward Tufte"
    },
    {
        "title": "Practical Object-Oriented Design",
        "author": "Sandi Metz",
        "price": 30.47
    },
    {
        "title": "Weapons of Math Destruction",
        "author": "Cathy O'Neil",
        "price": 17.44
    }
]


// Exercise 91
// Write a function named getNumberOfBooks that takes in a array of objects and returns the number of objects in that array.
function getNumberOfBooks(booksInLibrary){
    //takes in a array of objects
    // returns the number of objects in that array.
    // assuming we just need to find length of object
    var howManyBooks = booksInLibrary.length;
    return howManyBooks;
}
assert(getNumberOfBooks(books), 4, "Exercise 91");
addToDone("Exercise 91 is complete.")



// Exercise 92
// Write a function named totalOfBookPrices that takes in a array of objects and returns the sum total of all the book prices added together
function totalOfBookPrices(bookPrices){
    //takes in a array of objects
    // returns the sum total of all the book prices added together
    //remember counting need a starting value
    var costOfBooks = 0;
    for (let i = 0; i < bookPrices.length; i++) {
        costOfBooks+=bookPrices[i].price
    }
    return costOfBooks;
}
assert(totalOfBookPrices(books), 122.9, "Exercise 92")
addToDone("Exercise 92 is complete.")


// Exercise 93
// Write a function named getAverageBookPrice that takes in a array of objects and returns the average book price.
function getAverageBookPrice(avgBookCost){
    //takes in a array of objects
    // returns the average book price
    // reminder this is a counting type again
    var totPrice = 0;// Starting point
    for (let i = 0; i < avgBookCost.length; i++) {
        // avg  = total/length of obj
        totPrice+= avgBookCost[i].price;
        var avg = totPrice / avgBookCost.length;
    }
    return avg;// could also --> return totPrice / avgBookCost.length;
}
assert(getAverageBookPrice(books), 30.725, "Exercise 93");
addToDone("Exercise 93 is complete.")


// Exercise 94
// Write a function called highestPriceBook that takes in the above defined array of objects "books" and returns the object containing the title, price, and author of the book with the highest priced book.
// Hint: Much like sometimes start functions with a variable set to zero, you may want to create a object with the price set to zero to compare to each object's price in the array
function highestPriceBook(mostExpensiveBookHere){
    //takes in the above defined array of objects "books"
    //returns the object containing the title, price, and author of the book with the highest priced book.
    // essentially we are looping through obj to find the highest cost or largest price
    var mostExpensive = {
        "price": "0.00"
    }
    for (let i = 0; i < mostExpensiveBookHere.length; i++) {
        if (mostExpensiveBookHere[i].price > mostExpensive.price){
            mostExpensive = mostExpensiveBookHere[i];
            // statement checks for testing variable price, if it's higher than
            //our var mostExpensive then it will replace and become our new mostExpensive
            //before looping back to check rest of object
        }
    }
    return mostExpensive;// shows us what is most expensive book
}
assert(highestPriceBook(books), {
    "title": "The Visual Display of Quantitative Information",
    "price": 38.00,
    "author": "Edward Tufte"
}, "Exercise 94");

addToDone("Exercise 94 is complete")



// Exercise 95
// Write a function called lowestPriceBook that takes in the above defined array of objects "books" and returns the object containing the title, price, and author of the book with the lowest priced book.
// Hint: Much like sometimes start functions with a variable set to zero or float('inf'), you may want to create a object with the price set to float('inf') to compare to each object in the array
function lowestPriceBook(leastExpensiveBookHere){
    //takes in the above defined array of objects "books"
    //returns the object containing the title, price, and author of the book with the lowest priced book.
    var floating = Math.isinf;// tried this but isn't required
    var leastExpensive = {
        "price": Infinity, // float('inf') == Infinity
    }
    for (let i = 0; i < leastExpensiveBookHere.length; i++) {
        if (leastExpensiveBookHere[i].price < leastExpensive.price){
            leastExpensive = leastExpensiveBookHere[i];
        }
    }
    return leastExpensive;// shows us what is most expensive book
}

assert(lowestPriceBook(books), {
    "title": "Weapons of Math Destruction",
    "author": "Cathy O'Neil",
    "price": 17.44
}, "Exercise 95");
addToDone("Exercise 95 is complete.")


const shoppingCart = {
    "tax": .08,
    "items": [
        {
            "title": "orange juice",
            "price": 3.99,
            "quantity": 1
        },
        {
            "title": "rice",
            "price": 1.99,
            "quantity": 3
        },
        {
            "title": "beans",
            "price": 0.99,
            "quantity": 3
        },
        {
            "title": "chili sauce",
            "price": 2.99,
            "quantity": 1
        },
        {
            "title": "chocolate",
            "price": 0.75,
            "quantity": 9
        }
    ]
}


// Exercise 96
// Write a function named getTaxRate that takes in the above shopping cart as input and returns the tax rate.
// Hint: How do you access a key's value on a object? The tax rate is one key of the entire shoppingCart object.
function getTaxRate(shoppingCart){
    //takes in the above shopping cart as input
    //returns the tax rate
    var taxRate = shoppingCart.tax;// grabs shopping cart object and pulls tax information out of it
    return taxRate;// return the tax value
}
assert(getTaxRate(shoppingCart), .08, "Exercise 96");
addToDone("Exercise 96 is complete")



// Exercise 97
// Write a function named numberOfItemTypes that takes in the shopping cart as input and returns the number of unique item types in the shopping cart.
// We're not yet using the quantity of each item, but rather focusing on determining how many different types of items are in the cart.
function numberOfItemTypes(numbOfUniqueItems){
    //takes in the shopping cart as input
    //returns the number of unique item types in the shopping cart
    var ItemsThatAreUnique = [];
    for (let i = 0; i < numbOfUniqueItems.items.length; i++) {//took a while to find .items.length inorder to make this one work
        if (ItemsThatAreUnique.includes(numbOfUniqueItems.items[i].title)){
            //only need to check for one thing that each item has inorder to count them as unique
            continue;
        }
        ItemsThatAreUnique.push(numbOfUniqueItems.items[i].title);// put findings into empty array
    }
    return ItemsThatAreUnique.length;//returns all unique items in the object
}

assert(numberOfItemTypes(shoppingCart), 5, "Exercise 97");
addToDone("Exercise 97 is complete.")

// Exercise 98
// Write a function named totalNumberOfItems that takes in the shopping cart as input and returns the total number all item quantities.
// This should return the sum of all of the quantities from each item type
function totalNumberOfItems(numbOfItemsInCart){
    //takes in the shopping cart as input
    //returns the total number all item quantities
    //return the sum of all of the quantities from each item type
    var totItems = 0;
    for (let i = 0; i < numbOfItemsInCart.items.length; i++) {
        totItems += numbOfItemsInCart.items[i].quantity;
    }
    return totItems;
}
assert(totalNumberOfItems(shoppingCart), 17, "Exercise 98");
addToDone("Exercise 98 is complete.")



// Exercise 99
// Write a function named getAverageItemPrice that takes in the shopping cart as an input and returns the average of all the item prices.
// Hint - This should determine the total price divided by the number of types of items. This does not account for each item type's quantity.\
function getAverageItemPrice(avgItemCost){
    // takes in the shopping cart as an input
    // returns the average of all the item prices
    var totalCost = 0;
    for (let i = 0; i < avgItemCost.items.length; i++) {
        // want to pull price
        totalCost += avgItemCost.items[i].price;
    }
    return totalCost/ avgItemCost.items.length; // total / number of types
}
assert(getAverageItemPrice(shoppingCart), 2.1420000000000003, "Exercise 99");
addToDone("Exercise 99 is complete.")

// Exercise 100
// Write a function named getAverageSpentPerItem that takes in the shopping cart and returns the average of summing each item's quanties times that item's price.
// Hint: You may need to set an initial total price and total total quantity to zero, then sum up and divide that total price by the total quantity
function getAverageSpentPerItem(avgQuantity){
    //takes in the shopping cart
    //returns the average of summing each item's quanties times that item's price.
    var initialPrice = 0;
    var totalQuantity = 0;
    for (let i = 0; i < avgQuantity.items.length; i++) {
        initialPrice += avgQuantity.items[i].price * avgQuantity.items[i].quantity;
        totalQuantity+= avgQuantity.items[i].quantity;
        var PriceAndQuantity = initialPrice/totalQuantity;
    }
    return PriceAndQuantity;
}
assert(getAverageSpentPerItem(shoppingCart), 1.333529411764706, "Exercise 100");
addToDone("Exercise 100 is complete.")


// Exercise 101
// Write a function named mostSpentOnItem that takes in the shopping cart as input and returns the object associated with the item that has the highest price*quantity.
// Be sure to do this as programmatically as possible.
// Hint: Similarly to how we sometimes begin a function with setting a variable to zero, we need a starting place:
// Hint: Consider creating a variable that is a object with the keys "price" and "quantity" both set to 0. You can then compare each item's price and quantity total to the one from "most"
function mostSpentOnItem(value){
    //takes in the shopping cart as input
    //returns the object associated with the item that has the highest price*quantity
    var expense = {
        "price": 0,
        "quantity": 0
    };
    for (let i = 0; i < value.items.length; i++) {
        //var initialPriceNQuantity = purchasingCart.items[i].price * purchasingCart.items[i].quantity;
        //var calcPriceNQuantity = largestExpense.price * largestExpense.quantity;
        if ((value.items[i].price * value.items[i].quantity) > (expense.price * expense.quantity)){
            expense = value.items[i];
        }
    }
    return expense;
}
assert(mostSpentOnItem(shoppingCart), {
    "title": "chocolate",
    "price": 0.75,
    "quantity": 9
}, "Exercise 101");
addToDone("Exercise 101 is complete.")

