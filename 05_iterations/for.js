// Video 27
// Basic of for loops

/*
Syntax: 

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    //Scope of the for loop.
}

for(declaration of variable; condition check; iteration){
    code block;    
}
*/

// Using if with loops
for (let i = 0; i <= 10; i++) {
    const element = i;
    if(element == 5){
        //console.log("5 is reached.");
    }
    //console.log(element);
}
// We can use if statements inside for loops.

for (let i = 0; i <= 10; i++) {
    // console.log(`Outer loop value: ${i}.`);
    for (let j = 0; j <= 10; j++) {
        //console.log(`Inner loop value ${j} and inner loop ${i} `);
        
    }
    
}

//Printing tables using loops

for (let i = 1; i <= 10; i++) {
    console.log(`\nTable for ${i}`);
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i*j}`);        
    }
    
}

// Using arrays with for loop

let myArray = ["flash", "batman", "superman"];

for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    console.log(element);
}

// BREAK AND CONTINUE
// Break: Is used to stop code execution after break statement.
//for example: 

for (let i = 1; i <= 20; i++) {
    if (i == 5) {
        // console.log(`Detected 5`);
        break;
    }
    // console.log(`Value of i is ${i}`);    
}//The loop will break after the break is executed in the if statement
//Nothing will be executed and the program will break out of the loop.

//Continue: Will just skip a single iteration after "continue" statement.

for (let i = 1; i <= 20; i++) {
    if (i == 5) {
        console.log(`Detected 5`);
        continue;
    }
    console.log(`Value of i is ${i}`);    
}