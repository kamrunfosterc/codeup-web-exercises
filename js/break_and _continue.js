"use strict";
// alert('Break and Continue Exercises');

// BREAK & CONTINUE EXERCISES

console.log("******** Kamrun Foster version ********");

var totalStartingCones = Math.floor(Math.random() * 50) + 50;
console.log("We have " + totalStartingCones + " to sell today!");// code is good up to here
var conesSold = 0; //initial amount sold starting with 0 bc haven't sold anything


do{
    var conesPurchased = Math.floor(Math.random() * 5) + 1;// generates random number to be purchased each time
    var notEnoughCones = ((totalStartingCones - conesSold) > 0);// when we run out of cones

     if((conesSold + conesPurchased) > notEnoughCones){
        console.log("You bought " + conesPurchased + " cones, I have " + notEnoughCones +" left." );// display how many cones were bought
        break;
     }

     console.log("You bought "+ conesPurchased + " cones");
     conesSold = conesSold + conesPurchased;
     console.log("We've sold " + conesPurchased + " cones so far!");

     if (notEnoughCones < 0){
         console.log("We are out of ice cream cones!");
     }
} while(conesSold > conesPurchased);
console.log("Awesome! We have sold all of our cones!!!");


console.log("******** break continue odd #  ********");

// MY odd number CODE
// code is suppose to count 1-50 & skip odd number entry we put in there
for (let oddNumb = ""; oddNumb <= 50; oddNumb ++){
    oddNumb = parseInt(prompt("Pick an odd number between 1 & 50 "));
    if (oddNumb % 2 === 0){
        alert("That's not an odd number!");
        continue;// should skip pass any even numbers after number entry
    }
    console.log("This is an odd Number, " + oddNumb );

    if (oddNumb % 2 !== 1){// !== 1 accepts value, logs answer, repeats
        // if !== 0, will accept value and end loop
        alert(oddNumb + " is a nice choice!");
        break;
        //oddNumb = confirm("Please pick a number between 1 & 50 ");
    }
    console.log(oddNumb);
}


