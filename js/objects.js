'use strict';
document.write('Objects Exercises');

(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
    console.log("\n *** First & Last name todo *** ")
    var person = {};
    person = {
        firstName: 'Amari',
        lastName: 'Foster',

    }; console.log(person.firstName, person.lastName);

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
    console.log("\n *** sayHello method *** ")
    //var sayHello;
    person.sayHello = function (){
        return "Hello from " + person.firstName + " " + person.lastName + "!";
    };
    console.log(person.sayHello());

    // /** TODO:
    //  * HEB has an offer for the shoppers that buy products amounting to
    //  * more than $200. If a shopper spends more than $200, they get a 12%
    //  * discount. Write a JS program, using conditionals, that logs to the
    //  * browser, how much Ryan, Cameron and George need to pay. We know that
    //  * Cameron bought $180, Ryan $250 and George $320. Your program will have to
    //  * display a line with the name of the person, the amount before the
    //  * discount, the discount, if any, and the amount after the discount.
    //  *
    //  * Uncomment the lines below to create an array of objects where each object
    //  * represents one shopper. Use a foreach loop to iterate through the array,
    //  * and console.log the relevant messages for each person
    //  */
    // console.log("\n *** Attention HEB Shoppers! *** ")
    // var shoppers = [
    //     {name: 'Cameron', amount: 180},
    //     {name: 'Ryan', amount: 250},
    //     {name: 'George', amount: 320}
    // ];
    // shoppers.forEach(function (shoppers) {
    //     shoppers.discount.foreach(function(amount >= 200) {
    //
    //         console.log(); // condition is 12% discount on purchases over $200
    //         // display name, amount before and after (if applicable)
    //         return
    //     });
    // });
// if (shoppers[0].title)


    // /** TODO:
    //  * Create an array of objects that represent books and store it in a
    //  * variable named `books`. Each object should have a title and an author
    //  * property. The author property should be an object with properties
    //  * `firstName` and `lastName`. Be creative and add at least 5 books to the
    //  * array
    //  *
    //  * Example:
    //  * > console.log(books[0].title) // "The Salmon of Doubt"
    //  * > console.log(books[0].author.firstName) // "Douglas"
    //  * > console.log(books[0].author.lastName) // "Adams"
    //  */

    console.log("\n *** Books *** ")
    var books = {};
    books = [
        {title: "Harry Potter & the Sorcerer's Stone",
            author: {
            firstName: "J.K", lastName: "Rowlings",}},
        {title: "One Hundred Years of Solitude",
            author: {
                firstName: "Gabriel", lastName: "Garcia",}},
        {title: "The Great Gatsby",
            author: {
                firstName: "F.Scott", lastName: "Fitzgerald",}},
        {title: "War and Peace",
            author: {
                firstName: "Leo", lastName: "Tolstoy",}},
        {title: "JavaScript, The Definitive Guide",
            author: {
                firstName: "David", lastName: "Flanagan",}},
        ];
    console.log(books[0].title, books[0].author.firstName, books[0].author.lastName);
    console.log(books[1].title, books[1].author.firstName, books[1].author.lastName);
    console.log(books[2].title, books[2].author.firstName, books[2].author.lastName);
    console.log(books[3].title, books[3].author.firstName, books[3].author.lastName);
    console.log(books[4].title, books[4].author.firstName, books[4].author.lastName);

    //  * TODO:
    //  * Loop through the books array and output the following information about
    //  * each book:
    //  * - the book number (use the index of the book in the array)
    //  * - the book title
    //  * - author's full name (first name + last name)
    //  *
    //  * Example Console Output:
    //  *
    //  *      Book # 1
    //  *      Title: The Salmon of Doubt
    //  *      Author: Douglas Adams
    //  *      ---
    //  *      Book # 2
    //  *      Title: Walkaway
    //  *      Author: Cory Doctorow
    //  *      ---
    //  *      Book # 3
    //  *      Title: A Brief History of Time
    //  *      Author: Stephen Hawking
    //  *      ---
    //  *      ...
    //  */

    console.log("\n *** Looping through Books *** ")

    for (let i = 0; i < 5; i++){
        var book_numb = i + 1;
        let x = books[i].title;
        let y1 = books[i].author.firstName;
        let y2 = books[i].author.lastName;
        //console.log(y1);
        console.log("Book #" + book_numb + " " + x + " " + y1 + " " + y2);
    }



    // /**
    //  * Bonus:
    //  * - Create a function named `createBook` that accepts a title and author
    //  *   name and returns a book object with the properties described
    //  *   previously. Refactor your code that creates the books array to instead
    //  *   use your function.
    //  * - Create a function named `showBookInfo` that accepts a book object and
    //  *   outputs the information described above. Refactor your loop to use your
    //  *   `showBookInfo` function.
    //  */

})();
