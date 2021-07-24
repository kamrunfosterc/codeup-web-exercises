'use strict';
//PART 1 HANDLE AN API PROMISE

// 1. Create a file named promises.js inside of your js directory and link it
// to an HTML file of your choice.

// 2. Generate a Personal Access Token for the GitHub API.

//3. Create a function that accepts a GitHub username, and returns a promise
// that resolves returning just the date of the last commit that user made.
// Reference the github api documentation to achieve this.
function promisesExercises(){
    return fetch('https://api.github.com/users', {headers: {'Authorization': gitHubAPIPersonalToken}})
        .then(function (gitUser){
            console.log(gituser);
        });
}


// PART 2 CREATE YOUR OWN PROMISE

// const myPromise = new Promise((resolve, reject) => {
//     if (Math.random() > 0.5) {
//         resolve();
//     } else {
//         reject();
//     }
// });



