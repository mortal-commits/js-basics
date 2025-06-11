let score = "33";
// console.log(typeof score);

let valueInNumber = Number(score);// to convert any element to number
// console.log(typeof valueInNumber);

// But when, score is "33abc"
score = "33abc";
// console.log(typeof score);

valueInNumber = Number(score);
// console.log(typeof valueInNumber);
// console.log(valueInNumber); // outputs NaN


/*
if a string with just number converts to number it easily do it, but when there is a character in string it converts it but the value is "NaN".

// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0


*/

//  ****Number to Boolean****
let number = 1;
let boolNumber = Boolean(number);
console.log(boolNumber);
console.log(typeof boolNumber);

// 1 or any other number => true; 0 => false
// "new"(string) => true
// ""(empty string) => false

// ****To String****

// 33 => "33" will convert correct

