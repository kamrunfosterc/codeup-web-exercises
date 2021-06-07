'use strict';

//alert('this is an alert');

(function(){
    "use strict";

    var planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];

    /**
     * TODO:
     * Read each console log below, and write some javascript code to perform
     * the step that it describes
     */
    console.log('\n*** Exercise 1 ***')
    console.log('Adding "The Sun" to the beginning of the planets array.');
    planets.unshift('Sun');// code
    console.log(planets);

    console.log('\n*** Exercise 2 ***')
    console.log('Adding "Pluto" to the end of the planets array.');
    planets.push('Pluto');
    console.log(planets);

    console.log('\n*** Exercise 3 ***')
    console.log('Removing "The Sun" from the beginning of the planets array.');
    planets.shift();// removes first item in array, sun
    console.log(planets);

    console.log('\n*** Exercise 4 ***')
    console.log('Removing "Pluto" from the end of the planets array.');
    planets.pop(); //removes from end of array, pluto
    console.log(planets);

    console.log('\n*** Exercise 5 ***')
    console.log('Finding and logging the index of "Earth" in the planets array.');
    console.log(planets.indexOf("Earth"));

    console.log('\n*** Exercise 6 ***')
    console.log("Reversing the order of the planets array.");
    console.log(planets.reverse());// reverses order

    console.log('\n*** Exercise 7 ***')
    console.log("Sorting the planets array.");
    console.log(planets.sort());// sorts the array in aplha order

})();