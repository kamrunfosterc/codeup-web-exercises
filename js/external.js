"use strict"
//console.log("hello world");
//console.log("Hello from external JavaScript");
//alert("Welcome to my website!");
//var favorite_color = prompt("What is your favorite color?");
//alert("Great, " + favorite_color + " is my favorite color too!");
//alert("Hello World!");
//var confirmed = confirm('Are you sure you want to do XYZ?');
//console.log(confirmed); // will be either true or false

//var userInput = prompt('Please type something:');
//console.log('The user entered: ' + userInput);

console.log("hello world");

// exercise 1 ******** ******* *******
console.log("Hello from external JavaScript");

alert('Welcome to my Website!');

// exercise 2 ******** ******* *******
var fav_color = prompt("What is your favorite color?");
alert("Great, " + fav_color + " is my favorite color too!");

// **** **** Exercise 3 part A movie rental **** ****

alert("Let's check out your three movies.");
alert("Movie rentals are $3.00 per day.");
var movie_per_day = 3.00;

var days_lil_mermaid = 3;// rented for 3 days
var days_brother_bear = 5;// rented for 5 days
var days_hercules = 1;// rented for a day

var total_rental_cost = (days_lil_mermaid + days_brother_bear + days_hercules) * movie_per_day;
console.log(total_rental_cost.toFixed(2));
alert("Your total rental cost is $" + total_rental_cost.toFixed(2));

// **** **** Exercise 3 contractor work **** ****

var google_rate =400;// hourly pay rate
var amazon_rate =380;// hourly pay rate
var facebook_rate =350;// hourly pay rate

hrs_at_google = prompt("How many hours did we work at Google?");// enter 6 hours
hrs_at_amazon = prompt("How many hours did we work at Amazon?");// enter 4 hours
hrs_at_facebook = prompt("How many hours did we work at Facebook?");// enter 10 hours

var amazon_hours = Number(hrs_at_amazon);
var facebook_hours = Number(hrs_at_facebook);
var google_hours = Number(hrs_at_google);

console.log(amazon_hours, facebook_hours, google_hours);


var total_hours = parseInt(amazon_hours + facebook_hours + google_hours);

var total_pay = (google_rate*google_hours)+(amazon_rate*amazon_hours)+(facebook_rate*facebook_hours);

alert("You worked a total of "+ total_hours + " hours this week!");
alert( "Your compensation will be $"+ total_pay + " dollars. Thank you for your efforts!")
console.log(total_hours+ "hours", "$"+total_pay);


// **** **** Exercise 3 getting into class **** ****

var student_numb = prompt("How many students are there and does our schedule conflict with student?");
var schedule_conflict = prompt("Is the a schedule conflict? (True/ False)" );

var welcome = function course(student_numb, schedule_conflict) {
    if (student_numb < 28 && schedule_conflict == false) {
        return "Great news! You've been accepted into class!"
    } else {
        return "Sorry, please apply for a different semester."
    }
}


//Promotional offer Exercise
function product(item, premium_member, expiration) {
    if (item > 2 && expiration == false) {
        return "Congratulations on our product offer!"
    } else if (premium_member == true && expiration == false) {
        return "Premium members always get our promotional offers!"
    } else {
        return "Sorry we can't honor that promotional offer."
    }
}