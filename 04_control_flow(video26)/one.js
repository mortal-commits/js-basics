// Video 26
// if-else_if-else statements
// switch cases
// operators and shorthands

// IF STATEMENTS
const isUserLoggedIn = true;
/*
//Basic syntax of if statements

    if(conditions){
    code to run;
    }//Code will only run if the condition mentioned is true.

*/
// CONDITIONAL OPERATORS
// <(less than), >(greater than), <=(less than equel to ), >=(greater than equal to ), == (is equal to?), !=(is not equal to?), ===(is equal to but also checks for same datatypes.("stricter equal")), !==(stricter not equal)

// making a small program to check whether the person is a newborn, teenager or old

const age = 15;

if(age < 2){
    console.log("The person is a newborn.");
}
console.log("thanks for checking")//This will print everythime becuase it is outside the if scope.
if(age < 20){
    console.log("Age is lesser than 20.");
}else{
    console.log("Age is greater than 20.");
}

// SHORTHAND FOR IF STATEMENT
const balance = 1000;
if(balance > 500) console.log("test");//Implicit scope but for just one condition, more conditions can be written but is not readable at all.

// IF ELSE-IF ELSE NESTING

if(balance < 500){
    console.log("less than");
}else if(balance < 750){
    console.log("less than 750");
}else if(balance <900){
    console.log("less than 900");
}else{
    console.log("less than 1200.")
}


// CHECKING MULTIPLES CONDITIONS IN IF STATEMENTS
isUserLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (isUserLoggedIn && debitCard ){
    console.log("Allowed to buy course.");//More than one conditions can be checked and every one of them should be true.
}

if (loggedInFromEmail || loggedInFromGoogle){
    console.log("User logged in.");//Any one of the multiple conditions should be true.
}






