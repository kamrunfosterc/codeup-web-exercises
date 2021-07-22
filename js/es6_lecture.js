"use strict"
console.log(Math.pow(5, 3));//returns 125
console.log(5 ** 3);// shorthand to return 125
let user = 'Kam';

for (var i = 0; i < 10; i++) {
    console.log(i);
}
console.log("value of i outside of the loop", i);
//var allows us to access variables outisde of code block
//const, let will keep variable locally within block code

const social = 89432;
console.log(social);// logs number

console.log("I am attempting to change the social number");
// social = 72354;
console.log(social);// this will return error bc can not chng a const


//template strings will replace '' & ""
// we use back ticks `` specifically bc they allow us to use template strings if we want
console.log(user);
console.log(`${user.toUpperCase()} says hi`);// with backticks can put directly into string
console.log(`Your random number is ${Math.random()*100}!`);// easier to do this

let randomNumberHTML = `<p>Your random number is ${Math.random()*100}!</p>`
document.querySelector("body").innerHTML+=randomNumberHTML;// really cool stuff with the DOM manipulation

const people = [`Oswaldo`,`Christian`,`Herman`,];//

// iterable == array or object
for (let person of people) {
    console.log(`our for of loop result ${person}`);
    console.log(i)
    i++
    console.log(`this is the index ${people.indexOf(person)}`);
}
people.forEach(function (person, index){
    console.log(`${person}'s index is -> ${index}`)
})

// **************** **************** ARROW FUNCTIONS **************** ****************

// function sayHello(name){
//     return `Hello from ${name}!`
// }


const sayHello = name => `Hello from ${name}!`;// ARROW version of the above sayHello function
// returns: name => `Hello from ${name}!`
//useful for executing one expression, liner
// good use for storing a function in a variable like above

const seeYouLater = name => {
    const nameToDisplay = name.toUpperCase();
    return `See you later... from ${nameToDisplay}!`
};

const newName = (name, title) => {
    const nameToDisplay = name.toUpperCase();
    return `See you later... from ${title}.${nameToDisplay}!`
};// returns: "See you later... from mr.FOSTER!"

// NOTE:: functions can be called above or below defined function
// where as arrow functions have to be defined first then called

function TxHello(userName = 'Tim',age = '34'){// default value is Tim unless we define it
    return `Hello from ${userName}! Who is ${age} years old.`
}

//old way
var aPerson = {
    name: 'Michael',
    age: 37// manually setting these values
}
console.log(aPerson);

// this version below is helpful at times
let age = 27;
var ePerson = {
    name: 'Michael',
    age // pulls these values down and assigns to property
}
console.log(ePerson);

// const personBuilder = (username, age) => {
//     let userName = username;
//     let userAge = age;
//     return {userName, userAge}
// }
// console.log(personBuilder('Oscar', '68'));

const personBuilder2 = (name, age) => ({name, age})

const aUser = {usersName:"Seth", aged:34}

const {usersName, aged} = aUser

console.log(usersName);
console.log(aged);
// console.log(`the value of variable oscarsName is: ${oscarsName}`);


//OBJECT DESTRUCTURING


//array style is a little more forgiving
const food = [`banana`, `pizza`, `pasta`, `olive`]

const [foodOne, foodTwo] = food;
// by returning it this way it goes in order of way it was built
// not sure of this being used
console.log(foodOne);// returns banana
console.log(foodTwo);// returns pizza... could get rest in sim way
