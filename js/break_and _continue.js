"use strict";

// BREAK & CONTINUE EXERCISES

// Kathleen and Brittney's
        // var oddNumber;
        //
        // console.log("Number to skip is: " + oddNumber);
        // while(true){
        //     oddNumber = parseInt(prompt("Pick an odd number between 1 & 50 "));
        //     if(oddNumber % 2 !== 0){
        //         break;
        //     }
        // }


// MY CODE
    // for (let oddNumb = ""; oddNumb <= 50; oddNumb ++){
    //     oddNumb = parseInt(prompt("Pick an odd number between 1 & 50 "));
    //     if (oddNumb % 2 === 0){
    //         alert("That's not an odd number!");
    //         continue;// should skip pass any even numbers after number entry
    //     }
    //     console.log("This is an odd Number, " + oddNumb );
    //
    //     if (oddNumb % 2 !== 0){
    //         alert(oddNumb + " is a nice choice!");
    //         break;
    //         //oddNumb = confirm("Please pick a number between 1 & 50 ");
    //     }
    // }

// DO WHILE loop exercise
//var allCones = Mc


// // kathleen version
// var allConesAvail = Math.floor(Math.random() * (100-50)) + 50;
// console.log("The number of cones I can sell" + allConesAvail);
//
// let totalgone = 0; //starts total sold at 0
// do {
//     let purchased = Math.floor(Math.random() * (5-1)) + 1;
//
//     if((totalgone + purchased) > totalgone){
//         console.log("Sorry, Can't do sell "+ purchased);
//         continue;
//     }
//     console.log("My customer bought "+ purchased);
//     totalgone = totalgone + purchased;
//     console.log("I've sold this many " + totalgone)
//
//
// } while (totalgone < allConesAvail);
//
//
// console.log("we don't have enough cones");// if remaining amount is larger than what we have
// console.log("We can't sell you " + + " we only have " + + " left, Sorry.");// can't sell you 6 i only have 3
// console.log("YAY! is sold them all! No more cones "); // we are done
//
// do { //writing games, checking out shopping cart, input validation
//     // do stuff
//     alert('Busy, doing stuff!')
//     notDone = confirm("Do again? ");
// } while(notDone);


//WHAT WE DID, NEED TO PRACTICE THIS ONE!!! AND UNDERSTAND

// // Determine the total ice cream to be sold
// let totalCones = Math.ceil(Math.random() * (100 - 50) + 50);
// console.log("Total to be sold: " + totalCones);
//
// // running total
// let total = 0;
//
// do {
//     // How many cones were bought
//     let bought = Math.ceil(Math.random() * (5 - 1) + 1);
//
//     if (total + bought > totalCones) {
//         continue;
//     }
//     total = total + bought;
//     console.log("Customer bought: " + bought);
//     console.log("Total Sold: " + total);
// } while (total < totalCones);

console.log("******** Sherma'n Hall version ********");

var totalConSell = Math.floor(Math.random() * 50) + 50;
console.log("The total number of cones I can sell is: " + totalConSell);
let totalSold = 0;

do{
    var conesBought = Math.floor(Math.random() * 5) + 1;
    var notEnough = (totalConSell - totalSold);
    if ((totalSold + conesBought) > totalConSell){
        console.log("I'm sorry, I can't sell you " + conesBought + " cones, I only have "+ notEnough + " cones left");
        continue;
    }
    console.log("My customer bought " + conesBought + " cones!");
    totalSold = totalSold + conesBought;

    console.log("I've sold " + conesBought + " cones!");

} while (totalSold < totalConSell);
console.log("YAY! I've sold them all!");

console.log("******** Kamrun Foster version ********");

//INSIDE LOOP
// note we are allowing up to 5 cones to be purchased each time max
// we need to subtract that amount from total amount remaining

var totalStartingCones = Math.floor(Math.random() * 50) + 50;
console.log("We have " + totalStartingCones + " to sell today!");

var conesSold = 0; //intial amount sold starting with 0 bc haven't sold anything
do{
    var conesPurchased = Math.floor(Math.random() * 5) + 1;// generates random number to be purchased each time
    var noMoreCones = (totalStartingCones - conesSold);// when we run out of cones
    conesSold = conesSold + conesPurchased;

    console.log('You bought ' + conesPurchased + " cones, I have " + );// display how many cones were bought
    console.log('');// how many have we sold
    console.log('');//
    if (totalStartingCones === 0){
        console.log("Sorry we are all out of ice cream Cones")
    }
} while(totalStartingCones > conesSold);
console.log('');// shows we completed and can go home for day










