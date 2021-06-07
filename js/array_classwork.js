'use strict';
//alert('Array classwork JS ');

let test = [];
// array is a memory that store  more than one thing

test = [100, 100, 90, 95, 98, 100];// numeric array

var fosters = [];
fosters = ['kamrun', 'ashley', 'amari'];

var stuff = [1, 2, 3, 'a', 'b', 'c', fosters];

console.log(fosters);
console.log(stuff);// displays stuff array
console.log(fosters[2]);// pulls index #2 from fosters array

console.log('\n*** Use for loop to go through whole array ***');

for (let number = 0; number < stuff.length; number++){
    console.log(stuff[number]);
    // this log is to go through our array
}

console.log('\n*** For-Each loop on shapes ***');

// syntax
// someArray.forEach(function(element, index, array){} IMPORTANT IMPORTANT IMPORTANT

var shapes = ['square', 'rectangle', 'circle', 'triangle'];

shapes.forEach(function(shape){
    console.log('Here is a lovely shape: ' + shape + '.');
});

console.log('\n*** Alternate FOR loop on shapes above ***');

//alternatively
for (let numb = 0; numb < shapes.length; numb++){
    console.log('Here is a lovely shape: ' + shapes[numb] + '.');
}

// Arrays
//     .push() to the end of the array
//     .pop() takes off the end of array
//     .unshift() adds to beginning of array
//     .shift removes from beginning
//     .lastIndexOf() gives last of duplicate
//     .indexOf() to see what number in array
//     .slice(input) slices array before input doesnt modify just shows how it looks
//     .reverse() reverses array modifies or changes OG value
// colors.sort() sorts in Alphabetical order
//     .join() puts array together
//     .splt(input) takes out the input in the string
//     .splice(indexOf.(), 2) value1, number of deletions