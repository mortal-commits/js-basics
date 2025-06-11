// 1. primitive datatypes
// These are call by value.
/*
    1.String
    2.Numbers
    3.Boolean
    4.Null(empty)
    5.undefined(not defined yet)
    6.symbol(to give uniqueness to value)
    7.bigInt(bigger number in size)
*/
    let name = 'ben';//string
    let age = 10; //number
    let score = 10.32; // number
    let isLoggedIn = true; // boolean
    let tempOutside = null; //null (empty)
    let userEmail;// is not defined or undefined
    let bigInt = 98349597349857n;
    /*
    let a = 2;
    let b = 2;
    console.log(a === b); returns true
    */
    let a = Symbol(2);
    let b = Symbol(2);
    // console.log(a === b); // This will return false because both are different;
    

// 2. Non-primitive(Reference type)
// These are reference to original value
/*
    1.Arrays
    2.Objects
    3.Functions
*/

let heroes = ["batman", "superman"];// This is array similar to lists in python
let newObject = {
    name : "ben",
    age : 10
};// Object: Similar to dictionaries in python.

let newFunction = function (){
    console.log('hello world')
}; // This is a function in js

// typeof funcition 
console.log(typeof heroes);
console.log(typeof bigInt);
