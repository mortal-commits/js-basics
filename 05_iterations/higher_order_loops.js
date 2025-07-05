//Video 29

//FOR OF LOOP  
const arr = [1, 2, 3, 4, 5];

//["", "", ""]
//[{}, {}, {}]

//Iteration for array using for of loop
/*
syntax for normal for loop used with array:
for(const i = 0; i<=array.length; i++){
    code
}
now for iterating array this much code is not needed to write.

*/

for (const value of arr) {
    console.log(value);    
}//easily iterate arrays writing much code

//FOR OF LOOP FOR STRING
const greetings = "Hello world!";
for (const greeting of greetings) {
    if(greeting == " "){
        console.log(",");
        continue;
    }
    console.log("Each character: ", greeting);
}

// MAPS: map is an object similar to normal objects.
/*
Syntax:
Map(3) {
  'IN' => 'India',
  'USA' => 'United States Of America',
  'Fr' => 'France'
}
*/
const map = new Map();
map.set('IN', "India");
map.set("USA", "United States Of America");
map.set("Fr", "France");
map.set('IN', "India");//This won't add as maps don't allow duplicate values.

console.log(map);
//For of loop for maps

for (const key of map) {
    console.log(key);
}//This will print both key-value pair

//for extracting key and values differently
for(const [a, b] of map){//[key, value] destructures the map into individual key-vl
    console.log(a, ":->", b);
}

//TRYING FOROF ON OBJECTS
const myObject = {
    "game1": "NFS",
    "game2": "spiderman",
    "game3": "rdr",
}
for (const [key, Value] of myObject) {
    // console.log(key, value);//This won't print anything
}
//objects are not iteratable by forof loops. 