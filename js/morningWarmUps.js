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
    for (var i = 0;  i <= arr1.length; i++){
        var arr2 = arr1[i].toUpperCase();
        return arr2;
    }
    // for(var i = 0; i < array2.length; i++){
    //     array2[i] = array2[i].toUpperCase();
    // }
}
console.log(capitalizeAllNames());
// TODO: Create a function named capitalizeFirstLetter that accepts an array of strings and returns the array with all of the first letters in
//  each string being capitalized while having the rest of the string lowercase look at the example below for reference.
// Example:  capitalizeFirstLetter(["bob","Seth","TOFU","Toyota"]) ---- returns ----> ["Bob","Seth","Tofu","Toyota"]
function capitalizeFirstLetter(){

}




