const coding = ["js", "ruby", "java", "python", "cpp"];

coding.forEach( function (val) {//taking array[val] by its own.
    // console.log(val);
} )

// USING ARROW FUNCTIONS WITH FOREACH LOOP

coding.forEach( (val) => {
    // console.log(val);
})

// USING PRE-DEFINED FUNCTION IN FOREACH LOOP

function printMe(item){
    // console.log(item);
}
// coding.forEach(printMe);//Just give a reference don't access it by adding ();

coding.forEach((key, value) => {
    // console.log(`key: ${key}, value: ${value}`);//it can extract indexes as key, value pairs.
})

coding.forEach((item, index, arr)=>{
    // console.log(item, index, arr);
})//can extract values, indices and whole array from the given array.

// USING FOREACH ON OBJECTS INSIDE ARRAY.
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
]
//iteration on object in array.

myCoding.forEach((item) => {
    console.log(item.languageFileName);
})//Can iterate through the object elements found in an array.



