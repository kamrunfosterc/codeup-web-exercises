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
// i counted the number of characters and not the number of spaces in a string

