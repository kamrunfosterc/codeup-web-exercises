// # Objects and Arrays Practice
//
// This is practice to help you with Objects and arrays. There are no test associated with these exercises, so you will need to test them manually.
//
// 1. Create a function called `removeDuplicates` that accepts an array of strings and returns the array with all duplicate elements filtered out.
//     ### Examples
    ```js
removeDuplicates(["bob","squid","samantha","bob"]);
// Should return the following
["bob","squid","samantha"]

removeDuplicates(["tilda","tilda"]);
// Should return the following
["tilda"]

removeDuplicates(["2016-02-13","1994-12-21","2016-02-13","2016-02-13","2005-11-29"]);
// Should return the following
["1994-12-21","2016-02-13","2005-11-29"]
```

// 2. Create a function called `max` that accepts an array of numbers and returns the largest number from that array.
//     ### Examples
    ```js
max([4,34,193,2,345,46,0]);
// Should return the following 345

max([-34,83,21,38,-2039,3.2]);
// Should return the following 83

max([54.5,2,34,-93]);
// Should return the following 54.5
```

// 3. Create a function called `mostOccuringNumber` that accepts an array of numbers and returns the number that occurs the most within that array.
//     ### Examples
    ```js
mostOccuringNumber([8,93,28,8,27,-62,32,8,-62]);
// Should return the following 8

mostOccuringNumber([8,93,-62.0,28,27,-62,32,8,-62]);
// Should return the following -62

mostOccuringNumber([73.5,8,0,-3,3.50,8.25,3.50]);
// Should return the following 3.5
```

// 4. Create a function called `whoIsPassing` that accepts an array of objects, where each object is a student's name and class average (from 0 to 100). Your function will return an array of objects where each object is a student's name and whether he/she is passing. Note that a class average of 60 and higher is passing.
//     ### Examples
    ```js
var students = [
    {
        name: "Phill Rundy",
        classAverage: 53
    },
    {
        name: "Samuel Moore",
        classAverage: 71
    },
    {
        name: "Mark Tendly",
        classAverage: 84
    },
    {
        name: "Dough Mosh",
        classAverage: 87
    },
    {
        name: "Bran Thomb",
        classAverage: 93
    },
    {
        name: "Mario Yushi",
        classAverage: 82
    },
    {
        name: "Nathan Skywalker",
        classAverage: 52
    }
]

whoIsPassing(students);
// Should return the following
[
    {
        name: "Phill Rundy",
        passing: false
    },
    {
        name: "Samuel Moore",
        passing: true
    },
    {
        name: "Mark Tendly",
        passing: true
    },
    {
        name: "Dough Mosh",
        passing: true
    },
    {
        name: "Bran Thomb",
        passing: true
    },
    {
        name: "Mario Yushi",
        passing: true
    },
    {
        name: "Nathan Skywalker",
        passing: false
    }
]
```

// 5. Create a function called `dateStringToObject` that accepts a date in the following string format "YYYY-MM-DD" and returns an object that contains month, day, and year properties.
//     ### Examples
    ```js
dateStringToObject("2016-2-13");
// Should return the following {month: 2, day: 13, year: 2016}

dateStringToObject("2005-11-29");
// Should return the following {month: 11, day: 29, year: 2005}

dateStringToObject("1994-12-21");
// Should return the following {month: 12, day: 21, year: 1994}
```

// 6. Create a function called `reverseString` that that accepts a string and returns a string with the characters in reverse order.
//     ### Examples
    ```js
reverseString("squid");
// Should return the following "diuqs"

reverseString("tilda");
// Should return the following "adlit"

reverseString("2016-02-13");
// Should return the following "31-21-6102"
```

// 7. Create a function called `numberInfo` that accepts a number and returns an object with the properties isPositive, isEven, isZero. The properties should either be true or false based on if the parameter meets the criteria.
//     ### Examples
    ```js
numberInfo(-1);
// Should return the following
{
    isPositive: false,
    isEven: false,    
    isZero: false
}

numberInfo(6);
// Should return the following
{
    isPositive: true, 
    isEven: true,
    isZero: false
}

numberInfo(0);
// Should return the following
{
    isPositive: false,
    isEven: true,
    isZero: true
}
```






// 1st time for first problem
// function max(arrayOfNumbers){
//     //google how to get largest number in array
//     return Math.max(...arrayOfNumbers);
// } // ... takes away array bracket const arr1 = [1,2,3]; --> console.log(Math.max(...arr1))

// 2nd time
// function max(arrayOfNumbers){
//     //google how to get largest number in array
//     var largestNumber;
//     for (let i = 0; i < arrayOfNumbers.length; i++){
//         // arrayOfNumbers[i];
//         if (largestNumber === undefined){// the first largest number we never defined
//             largestNumber = arrayOfNumbers[i];// will store 'current largest' number
//         }
//         if (arrayOfNumbers[i] > largestNumber){//checks current vs previous looped largest number
//             console.log("i got in here");
//             largestNumber = arrayOfNumbers[i]// new large number is set here if new is larger than old
//         }
//     }
//     return largestNumber;
// }
// console.log(max([4,34,193,2,345,46,0]));
// 3rd attempt, google search result
// function max(input){
//     if(toString.call(input) !== "[object Array]")
//         return false;
//     return Math.max.apply(null, input);
// }
//
// console.log(max([4,34,193,2,345,46,0]));
// console.log(max([-34,83,21,38,-2039,3.2]));
// console.log(max([54.5,2,34,-93]));
//4th time FOR EACH METHOD
// function max(arrayOfNumbers){ // need to see this to practice
//     //google how to get largest number in array
//     var largestNumber;
//     arrayOfNumbers.forEach(function (singleNumber){
//         if (largestNumber === undefined){// the first largest number we never defined
//             largestNumber = arrayOfNumbers[i];// will store 'current largest' number
//         }
//         if (arrayOfNumbers[i] > largestNumber){//checks current vs previous looped largest number
//             console.log("i got in here");
//             largestNumber = arrayOfNumbers[i]// new large number is set here if new is larger than old
// }})

// ************ ************ ************ ************ ************ ************

// problem 4 1st attempt whos passing
// function whoIsPassing(arrayOfStudents){
//     var passingResults = [];// set up of empty array
//
//     for (var i = 0; i < arrayOfStudents; i++){
//
//         if (arrayOfStudents[i].classAverage >= 60){
//             //this means they are passing
//             passingResults.push({
//                 name: arrayOfStudents[i].name,//pulling array of students
//                 passing: true,
//             })
//         } else {
//             //this means student is failing
//             passingResults.push({
//                 name: arrayOfStudents[i].name,
//                 passing: false,
//             })
//         }
//     }
//     return passingResults;
// }
//
// var students = [
//     {
//         name: "Phill Rundy",
//         classAverage: 53
//     },
//     {
//         name: "Samuel Moore",
//         classAverage: 71
//     },
//     {
//         name: "Mark Tendly",
//         classAverage: 84
//     },
//     {
//         name: "Dough Mosh",
//         classAverage: 87
//     },
//     {
//         name: "Bran Thomb",
//         classAverage: 93
//     },
//     {
//         name: "Mario Yushi",
//         classAverage: 82
//     },
//     {
//         name: "Nathan Skywalker",
//         classAverage: 52
//     }
// ]
//
// console.log(whoIsPassing(students));

// 2nd attempt on #4
// function whoIsPassing(arrayOfStudents){
//     var passingResults = [];// set up of empty array
//
//     for (var i = 0; i < arrayOfStudents; i++){
//
//         var isCurrentStudentPassing = (arrayOfStudents[i].classAverage >= 60);// created a boolean variable vs what we did above
//
//         passingResults.push(
//                 {
//                     name: arrayOfStudents[i].name,//pulling array of students
//                     passing: isCurrentStudentPassing,
//                 }
//             )
//     }
//     return passingResults;
// }
//
// var students = [
//     {
//         name: "Phill Rundy",
//         classAverage: 53
//     },
//     {
//         name: "Samuel Moore",
//         classAverage: 71
//     },
//     {
//         name: "Mark Tendly",
//         classAverage: 84
//     },
//     {
//         name: "Dough Mosh",
//         classAverage: 87
//     },
//     {
//         name: "Bran Thomb",
//         classAverage: 93
//     },
//     {
//         name: "Mario Yushi",
//         classAverage: 82
//     },
//     {
//         name: "Nathan Skywalker",
//         classAverage: 52
//     }
// ]// created array of objects to pass through our method/ function
//
// console.log(whoIsPassing(students));

//1st attempt #5
function dateStringToObject(string){
    var splitString = console.log(string.split("-"));// adding - in between each value entry for separation
    return {month: splitString[1], day: splitString[2], year: splitString[0]}//return array as object after placing dashes here
    // var objectDate = new Object(); alternative way to work
    // objectDate.year = 2021;
    // objectDate.month = 7;
    // objectDate.day = 8;
    // return objectDate
}

console.log(dateStringToObject("2016-2-13"));
console.log(dateStringToObject("2005-11-29"));
console.log(dateStringToObject("1994-12-21"));
// dateStringToObject("2016-2-13");
// // Should return the following
// {month: 2, day: 13, year: 2016}
//
// dateStringToObject("2005-11-29");
// // Should return the following
// {month: 11, day: 29, year: 2005}
//
// dateStringToObject("1994-12-21");
// // Should return the following
// {month: 12, day: 21, year: 1994}

// $6
function reverseString(str){
    //attempt 1
    // var splitReverseJoin = str.split().reverse().join("");
    // console.log(splitReverseJoin);
    //
    // also attempt 2
    var revString = "";//setting up
    for (let i = str.length -1; i>= 0;i--){
        revString += string.charAt(i);//charAt grabs specific character at specific position

    }
    return revString;
}
// dateStringToObject("2016-2-13");
// // Should return the following
// {month: 2, day: 13, year: 2016}
//
// dateStringToObject("2005-11-29");
// // Should return the following
// {month: 11, day: 29, year: 2005}
//
// dateStringToObject("1994-12-21");
// // Should return the following
// {month: 12, day: 21, year: 1994}

// #7 1st attempt
// function numberInfo(number){
//     var isNumberPostive = (number > 0);// stores a boolean value
//     var isNumberEven = (number %2 === 0);
//     var isNumberZero = (number === 0);
//
//     return {
//         isPositive: isNumberPostive, //(number > 0)
//         isEven: isNumberEven, //(number %2 === 0)
//         isZero: isNumberZero, // (number === 0);
//     }
// }

console.log(numberInfo(-1));
console.log(numberInfo(6));
console.log(numberInfo(0));


// problem #1
// source: https://levelup.gitconnected.com/7-ways-to-remove-duplicates-from-array-in-javascript-cea4144caf31
function removeDuplicates(arrayOfStrings){
    // google js how to remove duplicates from array
    // a set is a non-duplicated array when you pass one to it

    // option 1: *** var set1 = new Set(["sumit","sumit","amit","anil","anish"]); ***
    // option 2: var arr = ["bob","squid","samantha","bob"];
    // function removeDuplicates(data){
    //     return [...new Set(data)];


    var uniqueStrings = [];// stores duplicated arrays
    for (var i = 0; i < arrayOfStrings.length; i++){

        if (uniqueStrings.includes(arrayOfStrings[i])){
            //if it already includes that unique word, do nothing else move down
        }
        else{
            uniqueStrings.push(arrayOfStrings[i]);
        }
    }
    return uniqueStrings
}
// removeDuplicates(["bob","squid","samantha","bob"]);
// // Should return the following
// ["bob","squid","samantha"]
//
// removeDuplicates(["tilda","tilda"]);
// // Should return the following
// ["tilda"]
//
// removeDuplicates(["2016-02-13","1994-12-21","2016-02-13","2016-02-13","2005-11-29"]);
// // Should return the following
// ["1994-12-21","2016-02-13","2005-11-29"]

//prob 3     using an associative array (useful for finding data)
// try to turn this into OBJECT and look for properties/ value
// COMPETITIVE algorithm coding
function mostOcurringNumber(numbers){
    // associative array's
    // 1. count number of times each number occurs
    var counts = [];
    for (let i = 0; i < numbers.length; i++){// fori + tab
        var aNumber = numbers[i];
        if (counts[aNumber] === undefined){
            counts[aNumber] = 1;// allows us to be able to increment by adding a value for undefined of one
        }
        counts[aNumber]++// gives us access to counts element at index "aNumber"
    }
    console.log(counts);

    //2. scan through associative array and keep track of value/ highest count
    var maxCount = 0;
    var winningNumber = "";
    for (const countsKey in counts){
        console.log("the counts element at index "+ countsKey + " is value "+ counts[countsKey]);// helps to track in english
        var currentCount = counts[countsKey];
        // when currentCount is > maxCount, we have a new winner so far
        if (currentCount > maxCount){
            // update 2 things when we have a new winner
            maxCount = currentCount
            winningNumber = countsKey;
        }
    }
    return winningNumber;
}

// console.log(mostOccuringNumber([8, 93, 28, 8, 27, -62, 32, 8, -62]));;
// // Should return the following 8
//
// console.log(mostOccuringNumber([8, 93, -62.0, 28, 27, -62, 32, 8, -62]));;
// // Should return the following -62
//
// console.log(mostOccuringNumber([73.5, 8, 0, -3, 3.50, 8.25, 3.50]));;
// // Should return the following 3.5


