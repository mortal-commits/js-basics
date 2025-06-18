// video 16
//Object made using constructor makes them singleton object.
// Object made using literals are normal objects
/*
Object.create()//This is creating object using constructor.
*/

//"Object Literals".

// ****Adding symbol to object****
const mySym = Symbol("key1");

const JsUser = {
    name: "Ben",
    [mySym]: "mykey1",//Symbol needs to be difned in [].
    age: 18,
    "full name": "ben 10",
    location: "US",
    email: "ben@google.com",
    isLoggedIn: false,
    lastLogInDays: ["monday", "saturday"],
};//Object creation using literals.
// name key is string but denoted as a key.

// *****Accessing Objects*****
    //1. Using.
// console.log(JsUser.email);
    //2. Using []

// console.log(JsUser["email"]);//need to define it as string otherwise it won't work
//"full name" can't be defined using .

// console.log(JsUser["full name"]);



//Changing values in object
JsUser.email = "ben@chatgpt.com";

//Locking change for object
    //Freeze method
// Object.freeze(JsUser);//Won't throw error if you change an element of the object but the changes won't take place.
// console.log(mySym);

//Adding functions to objects
JsUser.greeting = function() {
    console.log("Hello JS user");
};
// console.log(JsUser.greeting);// throwing function returnback due to not using (). output: [Function (anonymous)]
// console.log(JsUser.greeting());//Correct way.


// Using Object elements to create functions to add them back to the same object
    // "This" keyword

JsUser.greetingTwo = function() {
    console.log(`Hello JS user, ${this.name}`);//using "this" keyword in place of element name
}
// console.log(JsUser.greetingTwo());