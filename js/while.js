'use strict';

console.log('*************** WHILE loops ***************')

var index = 0; //have to initize each condition before entering loop
while (index < 8){// ran when we aren't sure how many times we need to run something
    // do something
    console.log(index);
    index++;
}
//loop TO KEEP IN TOOL BOX
var notDone = true;
while (notDone){
    //do something
    notDone = confirm("Do you want to go again? ");
}

// DO LOOP basic, keep in tool box
notDone = true;
do { //writing games, checking out shopping cart, input validation
    // do stuff
    alert('Busy, doing stuff!')
    notDone = confirm("Do again? ");
} while(notDone);

// BREAK loops example, not running bc it's an infinite loop
// while(true){
//     alert('Here!');
//     break;
// }

// CONTINUE example, using in case of emergency, seldomly used in class

// for (var i = 1; i < 100; i++){
//     if (i % 2 === 0){
//         //number isn't even
//         // odd numbers aren't as cool
//         // skip rest of loop and continue w/ next iteration
//         continue;
//     }
//     console.log("Here is a lovely even number: " + i);
// }

