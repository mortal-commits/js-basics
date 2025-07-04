// Video 19

// If you want to do same task multiple times whenever you need it while you code use functions.

// For example:
// console.log("B");
// console.log("E");
// console.log("N");

//If you want to print about three lines multiple times whenever you want you can make a function and call it in your code at any given point.

// function structure:
    // function //(keyword) sayMyName (Name of the function) (parameters) {
        // scope
    // };

function sayMyName() {
    console.log("B");
    console.log("E");
    console.log("N");
}

// sayMyName(this is name) () this is to call the funciton;

sayMyName();

// Adding numbers using functions
function addTwoNumbers(number1, number2){
    console.log(number1 + number2);
}
addTwoNumbers(3,4);//This will jsut print the value but won't save it anywhere.

// Returning a value from the function
// function addAnotherNumbers(number1, number2){
//     let result = number1 + number2;
//     return result;//Returning the result when calling the function.
//     console.log("hello")//This won't run because anyting after return won't run.
// }

function addAnotherNumbers(number1, number2){
    return number1 + number2;//Easier way to rewrite above function.
}

function loginUserMessage(username) {
    return `${username} just logged in.`;
}

loginUserMessage("ben");//It won't print anythig because it is made just for returning
// console.log(loginUserMessage("ben"));//"ben" here is a parameter but while defining function it was argument.

//Avoiding undefined in functions

function sayHello(user){
    if(user === undefined){
        console.log("please enter a user.");
        return;
    }
    return `Hello ${user}!`;
}

//Above function can also be defined as below

function sayHello2(user){
    if(!user){
        console.log("please enter a user.");
        return;
    }
    return `Hello ${user}!`;
}

// giving default values

function sayHello3(user = "sam"){//"sam" here is default value
    return `Hello ${user}!`;
}