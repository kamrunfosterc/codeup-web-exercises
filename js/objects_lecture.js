'use strict';
// one way to create object in JS
 var car = new Object();

//Alternate way to create object
 var car = {}; // can assign properties/ initial values
 car = { //key value pairs
     year: 2012,
     make: 'Honda',
     model:'Civic',
 };
 console.log(car);
 document.write(car.year +' '+ car.make +' '+ car.model);// displays information on webpage

// can add values to objects ...
// i.e. car.numberOfCylinders = 4: adds this key value pair
// i.e. car['numberOfSeats'] = 5; this is BEST WAY to create DYNAMICALLY properties

console.log('\n Create a Person')
var person = {};
person = {
    name: "Rango",
    heightInInches: 68,
    age: 45,
}
car.owner = person; //NESTED object

var child = {};
child = {
    name: "Mylz",
    heightInInches: 21,
    age: 2,
}

person.son = child;
car['owner'] = person;
console.log(car);
console.log(" \n *** Creating a Method ***");

car.info = function (){// created function that allows us to call
    return car.year +', '+ car.make +','+ car.model;
}

car.info1 = function infoFunction(name){// created function that allows us to call >>> KEEP FUNCTIONS SIMPLE IN OBJECTS!!
    if (name !== undefined){
        return "Hi, my name is  " + name + " and I own a " + " " + car.year +', '+ car.make +','+ car.model;
    }
    return this.year +', '+ this.make +','+ this.model; // replacing car == 'this'
}

console.log(car.info1);
// 'this' keyword comes into play, where info needs to come from the current property we are on
//car.info1 = infoFunction;
//info: infoFunction;