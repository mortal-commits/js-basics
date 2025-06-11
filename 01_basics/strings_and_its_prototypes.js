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
// console.log(newTemplate);
// console.log(typeof(newTemplate));
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
// console.log(newString);
// console.log(typeof(newString));


//Methods applied on these string objects are called static methods
//Example of some of them are below:

//Find string length
let text = "kjsdkfajshdkfh";
// console.log(text.length);

//Extracting string characters
/*     Four methods are:
        1. at(position)
        2. charAt(position)
        3. charCodeAt(position)
        4. Using property access [] like in arrays
*/
// at method
const newName = "ben";
// console.log(newName.at(2));
//newer method and supports negative indices

// charAt method
text = "hello";
// console.log(text.charAt(0));
// older method but not support negative indices

//charCodeAt method
//used to return ascii code of a specific character from string
text = "*";
// console.log(text.charCodeAt(0));

//property access to string

text = "hello world";
// console.log(text[0]);


/*
Extracting String Parts:
    1. Slice(start, end)
    2. Substring(start, end)
    3. Substr(start, length)
*/

// slice method extracts a part of a string and returns the extracted part in a new string.End not included.

text = "Hello World";
let newText = text.slice(0, 5);
//console.log(newText.length);

//substring method: similar to slice but negative indices are treated as 0. if you omit second parameter it will slice rest of the string

// console.log(text.substring(0, 5));

//substr method is different from slice. the difference is that second parameter specifies length in substr.

// console.log(text.substr(0, 5));

/*
Converting to upper or lowercase
    1. toUpperCase();
    2. toLowerCase();
*/
//toUpperCase turns string to uppercase

// console.log(text.toUpperCase());

//toLowerCase turns string to lowercase

// console.log(text.toLowerCase());

//concat method adds two or more strings

let newText1 = "Hello";
let newText2 = "World";

// console.log(newText1.concat(" ", newText2));

/*
Trim methods trim string from whitespaces
    1. trim()
    2. trimStart()
    3. trimEnd()
*/

//trim method removes whitespace from both sides

text = "   Hello World!    ";
// console.log(text.trim());

//trimStart removes whitespace from start

// console.log(text.trimStart());

// trimEnd removes whitespace from end

// console.log(text.trimEnd());

/*
padStart and padEnd adds a specific character at starting or ending multiple times until it reaces desired length.
*/

//padStart
text = "5";
// console.log(text.padStart(5, "as"));

//padEnd
// console.log(text.padEnd(5, "0"));

//repeat method returns a string with number of copies of string. It returns new string. It does not change original string

text = "Hello World";
// console.log(text.repeat(2));

//replace method replaces a specified value with another value in a string.It replaces just the first match

//replace("value to change", "value to be changed with")

text = "please visit my city";
// console.log(text.replace("my", "our"));

//replaceAll method replaces all of the occurances of a particular word in a string.

text = "I love cats. Cats are very easy to love. Cats are very popular."
// console.log(text.replaceAll("Cats", "Dogs"));
// console.log(text.replaceAll("cats","dogs"));

// replace all using regular expression or regex

// console.log(text.replaceAll(/Cats/g,"Dogs"));//here in regex every character or special character is used to define special condition for example g is for global where it will replace all of the instances of cats from sentences.

//Converting string to an Array

//split method is ued to convert string to array

console.log(text.split(" "))// this will split everytime where there is a space in sentence and put them in an array.

/*
Summary:
    methods to return specific part of string:
        1.at(index)//same as charat but support -ve index
        2.charAt(index)// old don't support -ve
        3.charCodeAt(index)// return ascii code
        4.string[index]// select using index
    extracting specific part of string:
        1.slice(start, end)end not included
        2.substring(start, end)-ve not supported
        3.substr(start, length)removed in latest update
    convert to upper or lower case
        1.toUpperCase();
        2.toLowerCase();
    to concat
        1.first.concat("occurence", second);
    to trim whitespaces
        1.trim()remove whitespace from both ends
        2.trimStart()remove from start
        3.trimEnd()remove from end
    padding(add any letter repeatedly to string)
        1.padStart("whattoadd", maxlengthofstring);
        2.padEnd("whattoadd", maxlengthofstring);
    repeat any string
        1.repeat(howmanytimes)
    replace string
        1.replace("what", "towhat")
        2.replaceAll("what", "towhat")
    convert to array
        1.split("fromwheretospli(fromspacesorcommas)")
*/