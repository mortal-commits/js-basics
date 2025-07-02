// Video 23
// "this" keyword and arrow functions
// "this" is used to denote current context

const user = {
    username: "ben",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website.`);//Here "this" is used instead of name of object just to denote the current context.

        console.log(this);
    }
}

user.welcomeMessage();
user.username = "sam";//the element for the current context changes.
user.welcomeMessage();

// console.log(this)
// Current context in node environment is {} but window object in browser console.
// In browser the global object is "window object".

// USING "this" IN FUNCTION

function two(){
    let username = "ben";
    console.log(this);
    // console.log(this.username);//This won't work.
}//There is many elements as global object in the function.

// DEFINING ARROW FUNCTIONS

const newFunction = () => {
    console.log(this);//This returns {} in arrow functions.
}

/*
SYNTAX FOR ARROW FUNCTIONS:

() => {}

    OR

const addTwo = (num1, num2) => {
    return num1 + num2
}

//Implicit Return in arrow function

const addTwo = (num1, num2) =>  (num1 + num2);
const addTwo = (num1, num2) =>  num1 + num2;//Can write this also
//For single line functions only
// return in curly braces is mandatory but not in paranthesis

// Explicit Return in arrow function
// Where the return keyword has to be written explicitely with curly braces


*/

// Returning object with arrow function

const addTwo = (newObject) => ({username: "hitest"});//(Note: It will return the function because their is a return keyword by default before the parenthesis.)

// Using arrow functions with arrays

