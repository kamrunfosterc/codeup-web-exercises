// TODO: Create a function named countSpaces that accepts a string and returns the total number of spaces in the string.

// TODO: Add validation to function above, if the argument pass is not a string it should return false.

function countSpaces(totalNumberOfSpaces){
    if (typeof  totalNumberOfSpaces !== 'string'){
        return false;
    }
    return totalNumberOfSpaces.length;
}
var counting = countSpaces("Akuna Matata");
console.log(counting);
// i misunderstood and counted the number of characters and not the number of spaces in a string



// July 6th 2021
// TODO: Create a function named capitalizeAllNames that accepts an array of strings and returns the array with all of its elements capitalized.
// Example:  capitalizeAllNames(["bob","Seth","TOFU","Toyota"]) ---- returns ----> ["BOB","SETH","TOFU","TOYOTA"]
function capitalizeAllNames(names){
    var arr1 = ["bob","Seth","TOFU","Toyota"];
    for (var i = 0;  i <= arr1.length; i++){// first attempt
        var arr2 = arr1[i].toUpperCase();
        return arr2;
    }
}


console.log(capitalizeAllNames());
// TODO: Create a function named capitalizeFirstLetter that accepts an array of strings and returns the array with all of the first letters in
//  each string being capitalized while having the rest of the string lowercase look at the example below for reference.
// Example:  capitalizeFirstLetter(["bob","Seth","TOFU","Toyota"]) ---- returns ----> ["Bob","Seth","Tofu","Toyota"]
function capitalizeFirstLetter(){

}

// July 7th 2021
// TODO: Create a method on the object down below named getFullName that when called returns the users full name using the "this" key term.
// Example: personOne.getFullName() ---- returns ----> "silvia floopertan"
var personOne = {
    firstName: "silvia",
    lastName: "floopertan",
    ageInYears: 34,
    heightInInches: 65,
    getFullName: function() {return (this.firstName + " " + this.lastName);}
        // this.firstName[0].toUpperCase() + this.firstName.substr(1); for number 2
}
console.log(personOne.getFullName());

// TODO: Create a method on the object down below named getNicelyFormattedFullName that when called returns the
//  users full name with both first letters in the names being capitalized look at example down below for more reference.
// Example: personOne.getNicelyFormattedFullName() ---- returns ----> "Dan Valdarez"
var personTwo = {
    firstName: "dan",
    lastName: "valdarez",
    ageInYears: 61,
    heightInInches: 73,
    getNicelyFormattedFullName: function (){
        return (this.firstName[0].toUpperCase() + this.firstName.slice(1) +" "+this.lastName[0].toUpperCase() + this.lastName.slice(1));
        // return (this.firstName[0].toUpperCase() + this.firstName.substr(1) +" "+ this.lastName[0].toUpperCase() + this.lastName.substr(1));
    }
}
console.log(personTwo.getNicelyFormattedFullName());

// TODO: Create a method on the object below that gives us the behavior that the example implies.
// Example: personThree.intro() ---- returns ----> "Hello, My name is Arlene Martinez and I am 25 years old"
var personThree = {
    firstName: "arlene",
    lastName: "martinez",
    ageInYears: 25,
    heightInInches: 62,
    intro: function (){
        return "Hello, My name is Arlene Martinez and I am 25 years old";
    }
}
console.log(personThree.intro());


// July 8th 2021
// Part 1
// TODO: Create a function that takes an array of strings and returns an array of objects
//  where each object has 2 properties: originalString and countOfLetters
// Example: input: ["hello", "dave"]
//          returns: [
//                    { "originalString":"hello", lengthOfOriginalString:5 },
//                    { "originalString":"dave", lengthOfOriginalString:4 }
//                   ]

function arrayOfStringsToObjects(arrString){
    var arrayOfObj = [];
    for (let i = 0; i < arrString.length; i++){
       // arrString[i] // allows us to grab the array
        console.log(arrString[i]);
        arrayOfObj.push({originalString: arrString[i], lengthOfOriginalString: arrString[i].length});
    }
    return arrayOfObj;
}
var arrayOfObjects = arrayOfStringsToObjects(["hello","dave"]);
console.log(arrayOfObjects);


// function originalCount(input){ 2ND attempt
//     var input = [];
//     for (var i = 0, i < input.length, i++)
//     {
//         var input = [{
//             originalString: input[0],
//             lengthOfOriginalString: input[0].length,
//         }];
//         return input;
//     }
// }
    // } console.log(originalCount("hello"));
    // var originalStrings = [];
    // var lengthOfOriginalStrings = [];
    // var arr1 = [{"originalString":"", lengthOfOriginalString:""}, {"originalString":"", lengthOfOriginalString:""}];
    // arr1.originalStrings = "hello" "dave";


// Part 2
// TODO: Create a function that takes the array of objects from PART 1
//  and returns a string of all of the originalStrings concatenated with spaces in between
// Example: input: [
//                    { "originalString":"hello", lengthOfOriginalString:5 },
//                    { "originalString":"dave", lengthOfOriginalString:4 }
//                  ]
//          returns: "hello dave"
function arrayOfObjectsToStrings(arrayOfObjects){
    var stringResults = [];// declare empty array for results
    arrayOfObjects.forEach(function (singleObject){
        stringResults.push(singleObject.originalString);// pushes the value into stringResults array
    })
    return stringResults.join(" ");
}
console.log(arrayOfObjectsToStrings(arrayOfObjects));

// TODO: Create a function named getTallUsers that accepts an array of objects. The objects in the array will be in the same format
//  as PersonOne, PersonTwo, and PersonThree. The functions job is to return an array of users that have heightInInches equal to or greater than 65.
var people = [personOne,personTwo,personThree];

// Example: getTallUsers(people)
// ---- returns ----> [{firstName: "silvia", lastName: "floopertan", ageInYears: 34, heightInInches: 65},
//


