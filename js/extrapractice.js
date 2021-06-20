function isNumeric(input){
    input = parseFloat(input);
    if (isNaN(input) || typeof (input) === 'undefined' || typeof (input)=== 'boolean'){
        return false;
    }
    return true;
//     function isNumeric(input){
//         if(isNumeric(input) && typeof input === 'string'){
//             return true;
//         } else{
//             return false;
//         }
//     }
}//#3 complete


// array.length is something to understand
function addUp(x) {
    var sum = 0;
    if (isNumeric(x)) {
    for (var i = 0; i <= 0; i++) {
            sum = sum + i;
            // sum+=i; shorthand
        } else {
            return NaN;
        }
    }
    return sum;
}

// GOOD LESSON
var arrayOfNumbers = [2,4,5,6,7,8,9,11,12,13,15];

function getOdds(array){
    var bucketarray = []; // bucket is only for adding to this

    for (var i = 0; i < array.length; i++){ //looping through passed array
        if (array[i]%2 !== 0){ // check for odd values in array
            bucketarray.push(array[i]);// adds odd numbers to bucketarray
        }
    }
    return bucketarray;
}

console.log(getOdds(arrayOfNumbers));

// create useful function code list to pull from .... a toolbox