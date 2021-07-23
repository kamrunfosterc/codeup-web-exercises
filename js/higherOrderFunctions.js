"use strict"

//EXAMPLE 1

//can uncomment diff numbers array to compare values
// let numbers = [1,2,3,4,5,6,7,8,9,10];
let numbers = [1,-22,32,4,-5,61,17,8,9,10];
const filteredNumbers = numbers.filter(function (singleNumber){
    //filter looks for true/false to return
    //if true it adds to array
    if (singleNumber > 5){
        return true;// pushes results to filterNumbers array
    } else{
        return false;// won't push result
    }
    //
    // if (singleNumber % 3 === 0){
    //     return true
    // } else {
    //     return false
    // }// only returns and pushes if number is div by 3
});
console.log(filteredNumbers);

//EXAMPLE 2
//returning
const users = [
    {name: 'walter', job:'intern'},
    {name: 'sally', job:'associate'},
    {name: 'tim', job:'ceo'},
    {name: 'butler', job:'workerB'},
    {name: 'shay', job:'cio'}

]
const higherManagementUsers = users.filter(function (user){
    if (user.job === 'ceo'){
        return true;
    } else{
        return false;
    }

    // if (user.job === 'intern'){
    //     return true;
    // } else{
    //     return false;
    // }


})

const interns = users.filter(function (user){
    return user.job === 'intern'
})

const workers = users.filter(user => user.job === 'workerB')
// const interns = users.filter(internFilterCallback)

console.log('Here are all the higher management users', higherManagementUsers);
console.log(`Here are all the interns`, interns);
console.log(`Here are all the workers`, workers);


// METHOD: MAP METHOD
// can call map method on the numbers and users objects above
// allows us to return new array by changing original in some form

const doubleNumber = numbers.map(function (number) {
    return number * 2;
    //takes new array from original multiplying by 2
});
console.log(doubleNumber);

const halfNumber = numbers.map(number => ({bob: number / 2}));
console.log(halfNumber);

const employeesDetails = [
    {name: 'walter', job:'intern', pay:12},
    {name: 'sally', job:'associate', pay:13},
    {name: 'tim', job:'ceo', pay:15},
    {name: 'butler', job:'workerB', pay:10},
    {name: 'shay', job:'cio', pay:7.25}
]
//say we want to give each a raise

console.log(`old details`, employeesDetails);
const employeePay = employeesDetails.map(function (employee){
    employee.pay*= 1.05;
    return employee;
})


console.log(`Updated pay details, 5% raise `,employeePay);
//at this time is updating original even though it shouldn't be doing so...?


//Reduce METHOD
// want to sum up current sum using old methods
let total = 0;// declared outside loop, persist properly now
for (let i = 0; i < numbers.length; i++) {
    // let total = 0;// this resets every iteration bc inside loop
    total+= numbers[i];
    console.log(total);
}


//basic example
const sum = numbers.reduce((currentTotal, currentNumber)=>{
    return currentTotal + currentNumber;
    // goes through array and adds current total to number we are on in array
},0);// 0 reps starting value vs creating a total = 0
console.log(`reduce method used here`,sum);// does same as above fori loop
//returns: reduce method used here 115

const randomNumbers = [58,82,102,4343,2];

const largestNumber = randomNumbers.reduce(function (currentHighestNumber, number){
    if (number > currentHighestNumber){
        return number
    }else {
        return currentHighestNumber
    }
},0)
console.log(`Largest number reduced`,largestNumber);
// returns: Largest number reduced 4343


// LEARN USE CASE and where you want to use this... more likely to use filter in this course
// filter/ sort are more common for us at this point
// THERE are more Higher Order functions to learn




