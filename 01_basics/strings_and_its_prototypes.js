// video 11

let string = "new string";//This is a string
let string1 = 'This is also a string';// String can be enclosed in ""or '

// concatenation

let string3 = "hello";
let string4 = "world";
// console.log(string3 + string4);// This way is not used that much

//Template string or string interpolation
let name = "ben";
let age = 10;
let newTemplate = `${name} is a boy of age ${age}.`;// inserted variable in curly brackets.
console.log(newTemplate);
console.log(typeof(newTemplate));
// This is template string. You can also write a whole paragraph in it.
/*
****There are two types of string (string primitives & string objects).
    1. String Primitives:
        These are defined simply using single or double quotes.
        Example: 'ben' or "ben".
    2. String objects:
        These are defined using constructor function and "new" is an operator to invoke that function. This makes the string an object and methods applied on in are static methods.
        Example: {0:"b", 1:"e", 2:"n"}

*/

//Way to define string as an object

let newString = new String("Ben");
console.log(newString);
console.log(typeof(newString));


//Methods applied on these string objects are called static methods
//Example of some of them are below:

