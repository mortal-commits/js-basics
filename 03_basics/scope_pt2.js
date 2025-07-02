//Video 22(How scope works in nested functions, control statements, etc)

function one() {
    const username = "ben";

    function two() {
        const website = "youtube";
        console.log(username);
    }
    // console.log(website);//This won't work because website is out of scope
    two();
}
one();

// Same in if-else

if (true){
    const username = "ben";
    if(true) {
        const website = " youtube";
        console.log(username + website);
    }
    // console.log(website);//This will create error because website is out of scope
    
}
// console.log(username);//This also won't work because of the same reason.

//CALLING FUNCTION BEFORE INITIALIZATION

addone(5);//This will run even before initialization
function addone(num){
    return num++;
}

// addTwo(5);//This will create an error and won't run until its initialization.

const addTwo = function(num){
    return num + 2;
}
 