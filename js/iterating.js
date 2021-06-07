'use strict';
//alert('exercise');

(function(){// iffy function: no name func, local to function and not avail to people within console
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
console.log('creating a array of 4 people');
    var names = ['Captain Planet','Iron Man', 'Omni Man', 'Blue Marvel'];

    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
    console.log(names);

    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
    console.log('\n*** print each name individually 1 by 1 ***\n');
    console.log(names[0]);

    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
    console.log('\n*** use for loop ***\n');

    for (let number = 0; number < names.length; number++){
        console.log(names[number]);
        // this log is to go through our array
    }
    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
    console.log('\n*** use forEach loop ***\n');
    names.forEach(function(name){
        console.log('Here are the names refractored: ' + name + '.');
    });

    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */
    function newSet(numbers){
        var numbers = [5, 7, 10, 13, 17, 21];

        var first = numbers[0];// returns 5
        var second = numbers[1];// returns 7
        var last = numbers[5];// returns 21
        return newSet(first, second, last);
    }

})();