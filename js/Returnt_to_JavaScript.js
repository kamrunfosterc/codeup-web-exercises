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






