//stack(primitive type) and heap(non-primitive type)

// primitive type uses stack memory while non-primitive type uses heap memory

//Example 1(stack):
let idOne = "ben";
let idTwo = idOne;
idTwo = "raw";
console.log(idOne);
console.log(idTwo);

// Here a copy of idOne is created which is assigned to idTwo so there is no change in idOne if we change idTwo This is example of stack memory

//Example 2(heap):
let obj1 = {
    id : "ben",
    age : 10
};
let obj2 = obj1;
obj2.id = "raw";
console.log(obj1.id);
console.log(obj2.id);
// Here both are same because the obj2 was just the same refernce to the original object. both the variables are reference to that one single object.
//So change in any of them changes the original object.
