// video 20 (Rest operator and accessing objects, arrays in functions)

// REST OPERATOR (...)similar as spread operator but used for returning values combined.

function calculateCartPrice(num1) {
    return num1;
}//normal function
console.log(calculateCartPrice(200, 400, 500))//400 and 500 won't print.

//Using rest operator
function calculateCartPrice1(...num1){
    return num1;
}//This will return every parameter passed by user.

console.log(calculateCartPrice1(200, 400, 500));//Now 400 and 500 will print too

//Using rest operator with another arguments
function calculateCartPrice2(val1, val2, ...num1){
    return num1;
}
console.log(calculateCartPrice2(200, 400, 500, 1000));//This will take 200 and 400 as val1 and val2 respectively. And the rest as num1(hence rest operator).

// Accessing objects in functions
const user = {
    username: "ben",
    price: 200,
};
function handleObject(anyobject){
    console.log(`Username is: ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject(user);

handleObject({
    username:"ben",
    price: 300,
})//Can be used as this also

// Accessing ARRAYS in functions

const myNewArray = [200, 400, 100, 200];

function returnSecondElement(anArray) {
    return anArray[1];
}//Will return second value.

console.log(returnSecondElement(myNewArray));
console.log(returnSecondElement([3,2,4,1,5,6]));
