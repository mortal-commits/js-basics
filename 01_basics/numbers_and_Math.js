// Video 12

//creating a number
const number = 100;

// creating a number object
const numberObj = new Number(200);//This is a number object.

//methods:
    //toString
// console.log(number.toString().length);//converts number to string

    //tofixed : display number to specific precision
let number1 = 1100.323423;
// console.log(number1.toFixed(2));//output: 100.32 (precise to 2 digits after .)

    //toPrecision : converts number to a precise length of total significant digits.
// console.log(number1.toPrecision(3));//output: 1003

    //toLocaleString : format numbers with , according to different country
let number2 = 100000000;
// console.log(number2.toLocaleString('en-IN'));//('en-IN' for india, default according to american)

    //functions for Number datatype
// console.log(Number.MAX_SAFE_INTEGER);

// *************Math Library****************

//Functions for Math
    //abs
// console.log(Math.abs(-5));//convert only -ve to +ve

    //round
// console.log(Math.round(4.5));//To round of number to nearest integer

    //ceil
// console.log(Math.ceil(4.15));//To round number to highest integer

    //floor
// console.log(Math.floor(4.2));//To round number to lowest integer

    //Math.min
// console.log(Math.min(4, 23, 12, 34 ,2 ));//Give smallest of array

    //Math.max
// console.log(Math.max(4, 23, 12, 34 ,2));//Give largest of array


    //Math.random
// console.log(Math.random());//Generate random number between 0-1
//Formula to generate random number between any range

const min = 1;
const max = 7;

console.log(Math.floor((Math.random()* (max-min)) + min));
//Note: max is not included in the generation


