//video 15
const marvel_heroes = ["thor", "Ironman", "spiderman"];
const dc_heroes = ["Batman", "superman", "flash"];

// if you push an array into another array result will be not usable as follows:
// marvel_heroes.push(dc_heroes);
// console.log(marvel_heroes);
// output: [ 'thor', 'Ironman', 'spiderman', [ 'Batman', 'superman', 'flash' ] ] array in array.

//accessing arrays in arrays
// console.log(marvel_heroes[3][1]);

//Adding every element to a single array
const new_heroes = marvel_heroes.concat(dc_heroes);

// console.log(new_heroes);

//*****Better version to do it */
    //spread operator

const all_new_heroes = [...marvel_heroes, ...dc_heroes];// spread two or more arrays in single array and add it to another array.

// console.log(all_new_heroes);

    // Flat: Nested array to single array
const another_array = [1, 2, 3, [4, 5, 6], 7, [8, 9, [10, 11]]];
// Will add every element of the array in a single array
// Can define depth of the merge (can be array in array(1) or array in array in anoter array(2))
//Infinity defines that add every element from any depth to the array.
const second_array = another_array.flat(Infinity);
// console.log(second_array);
/* output: [
   1, 2, 3, 4,  5,
   6, 7, 8, 9, 10,
  11
]*/
// Checking if an element is an array
console.log(Array.isArray("Hello World"));
// Checks if the element given is an array

// Converting to arrays
const third_Array = Array.from("Hello world");
//converts any element to array(For object method is different);

// console.log(third_Array);
 /*
output: [
  'H', 'e', 'l', 'l',
  'o', ' ', 'w', 'o',
  'r', 'l', 'd'
]
*/

//Giving object as an element to from method
// console.log(Array.from({name: "ben"}));//giving object to from.
//output: [] (empty array)

//Need to specify if you want to make array from keys, value.

// Returning array from set of elements
let score1 = 100;
let score2 = 200;
let score3 = 300;

number_Array = Array.of(score1, score2, score3);
//output: [100, 200, 300];


