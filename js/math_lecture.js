'use strict';

function getRandomInt(min, max){
    return Math.floor(Math.random() * (max-min + 1) + min);
    //putting number in random can help test certain specification
}
console.log(getRandomInt(1,2));// coin toss
console.log(getRandomInt(1,52));// card
console.log(getRandomInt(1,6));// dice

console.log(Math.round(23.5234));// round

console.log(Math.floor(23.52340)+ ' floor');// integer smaller than argument
console.log(Math.ceil(23.52340) + ' ceil');

console.log(Math.pow(3, 3));// takes 3 and raises to 3rd power

console.log(Math.sqrt(25)); // square root

console.log(Math.E);// represents the base of 'natural' logarithms, e, approximately 2.718.

console.log(Math.PI);// ratio of circumference of circle to diameter


