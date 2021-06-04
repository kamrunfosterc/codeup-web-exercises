"use strict";

// BREAK & CONTINUE EXERCISES
for (var index = prompt("Pick a number between 1 & 50 "); index <= 50; index ++){
    if (index % 2 == 0){
        continue;
    }
    console.log("This is an odd Number, " + index );
}