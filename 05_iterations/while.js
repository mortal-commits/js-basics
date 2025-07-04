// Video 28

// While loop is very similar to for loops. Syntax is a bit different.
/*
syntax:
    let index = 0; //Initialisation you have to do outside loop by yourself.
    while(condition){
    code
    index ++;//Iterations you have to do inside loop by yourself.
    }

*/
//Printing numbers till 10 from 1
let index = 1;//initialisation
while(index <= 10) { //condition inside ()
    // console.log(index);//code
    index ++;//Incrementing iteration.
}

//Printing table of 9 using while loop
let i = 1;
while (i <= 10) {
    // console.log(`10 * ${i} = ${i*10}`);
    i++;
}

//Printing even numbers from 0 to 20
let j = 2;
while (j <= 20) {
    console.log(j);
    j = j + 2;
}

// Using while loops on array

let myArray = ['flash', "batman", "superman"];

let arr = 0;
while (arr < myArray.length) {
    console.log(myArray[arr]);
    arr++;
}

// DO-WHILE LOOP
// do- while loop is similar to while loop but here the condition is checked at the end of the loop.
/*
syntax:

do{
    code
}while(condition);
*/

let score = 1;

do{
    //console.log(score);//code
    score++;//code
}while(score<=10);//condition in end

score = 11;

do{
    console.log(score);//code
    score++;//code
}while(score<=10);//condition in end
//output = 11
//As do-while loops check the condition at the end the 11 has print and then the condition is checked which turns to be false so the loop terminates.
//Hence the do-while loops

