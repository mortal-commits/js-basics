// Video 14

// defining array
const myArr = [0, 1, 2, 3, 4, true, null];// can have different datatypes 
// console.log(myArr);

// Arrays are resizable. Cannot access values just the elements like ('element'), either can access by indexes
//Arrays make shallow copies(reference to the original arrays);

// Defining array object 
const newArr = new Array(1, 2, 3, 4);//This will be array object


//Accessing array
// console.log(myArr[2]);//In square the index is defined

// Array methods
    //push : add values at end to array
myArr.push(6);
// console.log(myArr);// 6 is added at the end of the array

    // pop: this removes last element from the array.
myArr.pop();//Removes last element
let poppedElement = myArr.pop();//Can save removed element to a variable

// console.log(myArr);
// console.log(poppedElement);

    // unshift: added the element to start of array
myArr.unshift(9);
// console.log(myArr);//added 9 to start
//But in larger arrays every element needs to shift by one in order to add element to start. That's why it is not preferred.

    // shift
myArr.shift();//Remove the first element from array
// console.log(myArr);


// Methods returning "true" or "false".
// console.log(myArr.includes(1));//This will return true if 1 is in the array.


    // indexOf: return index of an element
// console.log(myArr.indexOf(3));

    // join: joins every element of array and convert it to string
let newString = myArr.join();
// console.log(newString);
// console.log(typeof newString)// will return string.

    // slice: return section of array
let newArr1 = myArr.slice(1, 3);
console.log('original array: ', myArr);
console.log('sliced: ', newArr1);// saved 1 to 3 index in newArr1 3 index "EXCLUDED".

    //splice: return section of array last index "INCLUDED".
console.log('original array: ', myArr);
let spliceArr = myArr.splice(1, 3);

console.log('spliced: ', spliceArr);
console.log('original array: ', myArr);

// in slice the range of elements are returned last index excluded but the original array is unchanged.
// But in splice the range of elements are returned (last index included) but original array in changed where the spliced elements are removed.