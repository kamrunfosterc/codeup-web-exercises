'use strict';

//alert('hello blue');

(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    console.log('Original \n' + planetsString + '\n');
    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
    console.log('\n*** Exercise 1 ***');
    var planetsArray = planetsString.split(',');// converts string to array
    console.log(planetsArray);


    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */
    console.log('\n*** Exercise 2 ***');
    var planetsString = planetsArray.join(" <br> ");
    console.log(planetsString);
    document.write(planetsString); // will print your planet string to the web page with the planets each on a new line

    console.log('\n*** Exercise 2 Bonus ***');
    <ul>
        <li>Mercury</li>
        <li>Venus</li>
        <li>Earth</li>
        <li>Mars</li>
        <li>Jupiter</li>
        <li>Saturn</li>
        <li>Uranus</li>
        <li>Neptune</li>
    </ul>


// document.write(newPlanetsString);
})();








