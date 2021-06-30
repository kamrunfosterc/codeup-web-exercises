"use strict"
8 > 7 // expression boolean

var name = 'MARK';
var hasthenameMark = (name.toLowerCase() === "Mark".toLowerCase());

if (hasthenameMark) {
    // if condition of if statement is true, its code body will run
    alert("Hey I know somebody named Mark!");
} else {
        alert("Hey your not Mark!!!");
}

// alert("Your name is mark is a " + hasthenameMark + " statement.");

var aNumber = 78;

if (aNumber%2 === 0){ //nested if statements
    // is even/ divisible by 3
    if (aNumber % 3 === 0){
        // even and its divisible by 3
    } else{
        // is Even but not divisible by 3
    }
    // is even
} else{
    // is odd
    // not even
}
// ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** *****

if (aNumber % 2 === 0 && aNumber % 3 === 0 && typeof(aNumber) !== "boolean"){
    // aNumber is even & divisible by 2 and divisible by 3
    console.log(aNumber + " is a number")
} else{
    console.log(aNumber + " ,sorry, please select another number.")
}

// ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** *****
if ((aNumber % 2 === 0 || aNumber % 3 === 0) && aNumber > 24){
    // aNumber is divisible by 2 or 3 and is greater than 24
    console.log("looks good, proceed");
}


// ***** ***** ***** ***** ***** FUNCTION ***** ***** ***** ***** ***** ***** *****

function multiplyTwoNumbers(myParameter1, myParameter2){ // basic function
    return myParameter1 + myParameter2;
}
console.log("call to multiply 2 numbers is: " + multiplyTwoNumbers(4,5));
console.log("call to multiply 2 numbers is: " + multiplyTwoNumbers(10,20));

//write function that concatenates string of first and last name
// first and last name cannot be blank
//returns an empty string if either first or last name are blank
function firstAndLastName(firstName, lastName){
    if (firstName.length < 1){
        console.log("ERror: First name cannot be blank!");
        return "";
    }
    if (lastName.length < 1){
        console.log("ERror: last name cannot be blank!");
        return "";
    }
    return firstName + " " + lastName;
}

console.log("firstAndLastName bob and smith: " + firstAndLastName("bob","smith"));
console.log("firstAndLastName bob and <blank>: " + firstAndLastName("bob"," "));
console.log("firstAndLastName <blank> and smith: " + firstAndLastName(" ","smith"));

//return shortened version of full name given first and last name
// i.e. at most 10 characters of full name
// if name is longer than 10 chars, return first 7 characters and...
function shortenedFullName(firstName, lastName){
    var shortName = firstAndLastName(firstName, lastName);
    return shortName;
}

console.log(shortenedFullName("larry","hoover"))





