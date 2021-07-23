const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

// const higherManagementUsers = users.filter(function (user){
//     if (user.job === 'ceo'){
//         return true;
//     } else{
//         return false;
//     }
//
//     // if (user.job === 'intern'){
//     //     return true;
//     // } else{
//     //     return false;
//     // }
//
//
// })

//2. Use .filter to create an array of user objects where each user object has at
// least 3 languages in the languages array.
let threePlusLang = users.filter(function (user){
    return user.languages.length >= 3;// returns length of users longer than 3 languages
})
console.log(threePlusLang);


//3. Use .map to create an array of strings where each element is a user's
// email address

let emailAddresses = users.map(function (user){
    return user.email;// extracts email from each user
})
console.log(emailAddresses);

//4. Use .reduce to get the total years of experience from the list of users.
// Once you get the total of years you can use the result to calculate the
// average.
    // PART 1
let totalYearsExp = users.reduce(function (accumulator, user){
    //default initial value of accumulator is always 1, we define it below in
    //brackets
    return accumulator + user.yearsOfExperience;
},0)
console.log(`Total years of experience `,totalYearsExp);

    //PART 2
let avgExp = totalYearsExp/ users.length;// returns average
console.log(`Average years of experience `,avgExp);

//5. Use .reduce to get the longest email from the list of users.
let longestEmail = users.reduce(function (currentLongest, user){
    // current longest is .where we start from to compare results
    if (user.email.length > currentLongest.email.length){
        return user;
    }else {
        return currentLongest;
    }
},users[0])
console.log(`The user with the longest email is: `,longestEmail.email, longestEmail);

//6. Use .reduce to get the list of user's names in a single string.
// Example: Your instructors are: ryan, luis, zach, fernando, justin.
let nameString = users.reduce(function (accumulator, user){
    if (accumulator === ""){
        return `Your instructors are: ` + user.name;
    } else {
        return accumulator + `, ` + user.name;
    }
},``)
console.log(nameString);

// note: could do #6 with map function
let nameStringMap = users.map(function (user){
    return user.name;
})
console.log(`Your instructors are: `,nameStringMap,`.`);


//$$$$$$$$$$$ $$$$$$$$$$$ $$$$$$$$$$$ $$$$$$$$$$$ $$$$$$$$$$$ $$$$$$$$$$$
// BONUS
//$$$$$$$$$$$ $$$$$$$$$$$ $$$$$$$$$$$ $$$$$$$$$$$ $$$$$$$$$$$ $$$$$$$$$$$
// Use .reduce to get the unique list of languages from the list of users.

let concatLangs = users.reduce(function (accumulator, user){
    return accumulator.concat(user.languages);
    // pulls languages but has repeats at this time
}, [])//need to start with empty array
console.log(`languages known `,concatLangs);


// let uniqueLangs = concatLangs.reduce(function (accumulator, currentValue){
//     if (accumulator.indexOf(currentValue) === -1){// also think of .includes
//         //only push this in if it is a repeat value
//         // -1 means it can't be found
//         accumulator.push(currentValue);
//     } return accumulator;
//         //only push this in if it is a repeat value
// },[])
// console.log(uniqueLangs);

let uniqueLangs = concatLangs.reduce(function (accumulator, currentValue){
    if (accumulator.includes(currentValue)){// also think of .includes
        //only push this in if it is a repeat value
        // -1 means it can't be found
        return accumulator;
    } else {
        accumulator.push(currentValue);
        return accumulator;
    }
    //only push this in if it is a repeat value
},[])// accumulator where we start/ put values into
console.log(uniqueLangs);
// could also use the set class to help store unique values





