// TRUTHY AND FALSY VALUES
// Some values are considered to be true and some to be false in js and hence they are called truthy or falsy values.

const userEmail = "ben@something.ai";

if(userEmail){
    console.log("Got user email.");
}else{
    console.log("Don't have user email.");
}
//Here a string in userEmail is considered true and an empty string is falsy value.

/*
FALSY VALUES:
    false, 0, -0, BigInt 0n, null, undefined, '', NaN  //All these are false values

TRUTHY VALUES:
    // Every value except falsy values are truthy values. Some of them are:
    "0", "false", " ", [], {}, function(){}(empty function)
*/

// CHECKING IF ARRAY IS EMPTY
if (userEmail.length === 0){

}//checks if array is empty

// CHECKING IF OBJECT IS EMPTY
const emptyObj = {};

if(Object.keys(emptyObj).length === 0){

}//Checks if the object is empty.


// NULLISH COALESCING OPERATOR (??): NULL, UNDEFINED.

let val1;
val1 = 5 ?? 10;
console.log(val1);//output: 5 **second value is fallback default  here**

val1 = null ?? 10;
console.log(val1);//output: 10 

val1 = undefined ?? 20;
console.log(val1);//output: 20

val1 = null ?? 10 ?? 20;
console.log(val1);//output: 10 **first is default and null and undefined are ignored second value is fallback **

//Null and Undefined will be ignored 

// TERNIARY OPERATOR
/*
syntax:
    condition ? true : false;
*/

const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");


