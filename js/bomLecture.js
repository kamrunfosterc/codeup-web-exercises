// BOM: browser object method
var intervalProcess = setInterval(codeToBeExecuted, 1000)

function codeToBeExecuted() {
    var person = { // creating a person **** OBJECT ****
        name: "Kamrun", // value pair
        age: 24,
        getInfo: function () {
            return "This is " + this.name + " and he is " + this.age + " years old." //what is this
        }
    }

    person.height = "68inches"; //dynamically added later to add this to the person however

    console.log(person.getInfo());
    console.log(person.height);


in
    browser, console
    we
    type
    setTimeout(function () { //delays info sharing
        console.log("Hello there, it's good to see you.")
    }, 3000) //time it in miliseconds, so 3000 = 3 seconds

}

setInterval()
function killTheRepeat(){
    clearInterval(intervalProcess);
}
