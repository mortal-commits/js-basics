// video 17
// making objects with constructor
const tinderUser = new Object();//Object made using constructor "now".

tinderUser.id = "abc123";
tinderUser.name = "sam";
tinderUser.isLoggedIn = false;

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname:{
            firstname: "ben",
            lastname: "stokes",
        },
    },
}

// if you want to access nested element
// console.log(regularUser.fullname.userfullname.lastname);


// console.log(regularUser.fullname?.userfullname.lastname);//? is used to avoid error if fullname not found(optional chaining);

// Combining objects

const obj1 = {1: "a", 2: "b",};
const obj2 = {3: "c", 4: "d",};

const obj3 = {obj1, obj2} //output: { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }
//This will work but both arrays will be added seperately in another array.
// console.log(obj3);

// Using assign operator
// const obj4 = Object.assign({}, obj1, obj2);//{} is optional parameter which will make sure result is object.

//Using spread operator
const obj4 = {...obj1, ...obj2};//spreading objects using ... and then adding them to another array.

// Accessing element from an object in an array.
const users = [
    {
        id: 1,
        email: "a@gmail.com",
    },
    {
        id: 2,
        email: "b@gmail.com",
    },
    {
        id: 3,
        email: "c@gmail.com",
    },
    {
        id: 4,
        email: "d@gmail.com",
    },
];
//to access email from the first element of the array which further is an object =>
    // console.log(users[1].email);

// Extracting every keys from object to an array.

const newArray = Object.keys(tinderUser);
const newArrayValues = Object.values(tinderUser);

// Extracting enteries from objects
const newArrayEntries = Object.entries(tinderUser);
// console.log(newArrayEntries);
// Output: [ [ 'id', 'abc123' ], [ 'name', 'sam' ], [ 'isLoggedIn', false ] ]// add both key, value into individual array in format ['key', 'value'].

//checking values in objects
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));






