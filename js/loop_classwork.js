'use strict';

// FOR loop is a 'pre-test' loop
var message = '';

for (var index = 0; index <= 10; index++){
    message = message + index + '\n';
    // ** if we want to limit scope index to for loop sub "var" to "let" **
    // i.e. let index = 0;
}
console.log(" For Loop example ");
console.log(message);
// alert(message);

var howmany = prompt('How many, pick a number less than 10? ');
for (let index = 0; index <= 10; index++){
    howmany = howmany + 'index is: ' + index + '\n';
    // index -4 instead of index ++ will go by 4's decrement
}
console.log(howmany);
alert(howmany )

