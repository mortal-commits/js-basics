//LOOP FOR OBJECT
const myObject = {
    js: 'javascript',
    py: 'python',
    cpp: "c++",
    rb: "ruby",
    sw: "swift"
}
// For iterating objects "for in" loops are used

for (const a in myObject) {
    console.log(a);
}// Will access keys

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

// Using forin for array
const programming = ["js", "rb", "py", "java", "cpp"];

for (const key in programming) {
    console.log(key);
}//key will extract indexes as indexes are keys in arrays.

// Using forin to extract value from loop
for (const key in programming) {
    console.log(programming[key]);//This will print values.
}

// TRYING FORIN FOR MAPS

const map = new Map();
map.set('IN', "India");
map.set("USA", "United States Of America");
map.set("Fr", "France");
map.set('IN', "India");

for (const key in map) {
    console.log(key);//This won't print anything
}
//maps are not iteratable by forin loops
