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


    console.log("\n *** Attention HEB Shoppers! *** ")
   // var shoppers = {}; //object iteration works better in a 'forOf'
    var shoppers = [// keep in array form bc forEach works best with array iteration
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];// placed objects inside an array

    var discountPercent = 0.12;
    shoppers.forEach(function (shopper){// wrap forEach around stuff below
        var discount = shopper.amount * discountPercent;// create discount var
        var discountTotal = shopper.amount - discount;// create total discount bill var

        console.log(shopper.name + ":\n" + "Your total would've been $" + shopper.amount.toFixed(2) + " before discount!");

        if (shopper.amount <= 200){// if statement to give expected messages
            console.log(shopper.name + ":\n" + "Your total spent after discount: $" + shopper.amount.toFixed(2));
        } else {
            console.log(shopper.name + ":\n" + "Your total spent after discount: $" + discountTotal.toFixed(2));
        }
    });

    // MOST RECENT VERSION OF THOUGHTS

    // var total = shoppers.amount;
    // console.log(total);
    //
    // shoppers.forEach(function(shoppers){
    //     shoppers.forEach(function(discount){
    //         console.log(shoppers[0].name + " before discount, your total is: " + shoppers[0].amount + "!")
    //     });
    //
    //     if (shoppers.amount > 200){
    //         var discount = 0.12;
    //         let newTotal = (shoppers.amount - (shoppers.amount * discount));
    //         console.log(newTotal);
    //     } else {
    //         return "Sorry, your discount expired."
    //     }
    // });
    // console.log(shoppers[0].name + " before discount, your total is: " + shoppers[0].amount + "!");



    // OLD VERSION OF THOUGHTS
    // shoppers.forEach(function (shoppers) {
    //     shoppers.discount.foreach(function(amount >= 200) {
    //
    //         console.log(); // condition is 12% discount on purchases over $200
    //         // display name, amount before and after (if applicable)
    //         return
    //     });
    // });
// if (shoppers[0].title)


    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

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

    console.log(books[0].title + " " + "by " + books[0].author.firstName, books[0].author.lastName);
    console.log(books[1].title + " " + "by " + books[1].author.firstName, books[1].author.lastName);
    console.log(books[2].title + " " + "by " + books[2].author.firstName, books[2].author.lastName);
    console.log(books[3].title + " " + "by " + books[3].author.firstName, books[3].author.lastName);
    console.log(books[4].title + " " + "by " + books[4].author.firstName, books[4].author.lastName);

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    console.log("\n *** Looping through Books *** ")

    for (let i = 0; i < 5; i++){
        var book_numb = i + 1;
        let x = books[i].title;
        let y1 = books[i].author.firstName;
        let y2 = books[i].author.lastName;
        //console.log(y1);
        console.log("Book #" + book_numb + " " + x + "\n " + y1 + " " + y2);
        console.log(' --- --- ');
    }

//Kathleen has an updated forEach on this prob above

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

    console.log(" *** BONUS *** ")
    console.log(" *** create book *** ")

    function createBook(){
        var create_book = {};// declared new array
        create_book = {
            title: prompt("What is the name of your favorite book? "),
            author: {
                firstName : prompt("What is the authors first name? "),
                lastName : prompt("What is the authors last name? "),
            }
        };
        console.log(create_book);

        var fav_book = create_book.title;
        var fav_author = create_book.author;
        console.log(fav_book, fav_author);
        // // var created_book =
        // console.log(fav_book + ": is my favorite book!", "\nThe author is: " + fav_author);
        // above RETURNS what i believe i want but isn't required for this function
    }
    createBook();
    console.log(" *** show book info *** ")

    // var bookTest = createBook("Discord's Apple", "Carrie Vaughn");
    // console.log(bookTest);
    // books.push(bookTest);
    // console.log(books);
    //this should help to tie in to our function below

    function showBookInfo(fav_book,fav_author){
        var createBook = createBook;
        // var fav_book = createBook(title); //createBook.title;
        // var fav_author = createBook.createbook.author //createBook.author;
        // var created_book =
        console.log(fav_book + ": is my favorite book!", "\nThe author is: " + fav_author);
        // document.write(created_book);

        // accepts a book object & outputs info described above
        //refactored loop to use this function
    }
    //showBookInfo();


    console.log(' -Kathleen Bonus work --')
    function createdBook(title, author){
        var name = author.split("");
        console.log(name[0]);
        console.log(name[1]);
        return {
            title : title,
            author : {
                f_name : name[0],
                l_name : name[1],
            },
        }
    }
    console.log(createdBook('this book here', 'Sir William' ));
    //document.write(createdBook('this book here', 'aint nobody know'));

    let books = [];
    books.push(createdBook());
    books.push(createdBook());
    books.push(createdBook());
    books.push(createdBook());
    books.push(createdBook());

})();
