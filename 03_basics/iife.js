//Video 24
// Immediately Invoked Function Expressions (IIFE)

// Syntax for named IIFE

(function one() {
    console.log('DB CONNECTED');
})();//The first parenthesis is for function definition and second is the execution call.
//";(semicolon)" is necessary to stop it after.

// (definition)(for paranthesis and parameter);

//Arrow function for unnamed IIFE
( (name) => {
    console.log('DB CONNECTED', name);  
})("ben");//second parenthesis for parameters.

