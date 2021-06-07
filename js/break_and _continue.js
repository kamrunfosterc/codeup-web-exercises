"use strict";

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






