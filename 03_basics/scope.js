// Video 21 (Block and Global scope)


if (true){
    //This is block scope
    let a = 10;
    const b = 20;
    var c = 30;
    //These differ from the outside scope.
    //If these values goes outside scope it causes bugs.
}

// console.log(a);//This won't print because it is limited to the scope
// console.log(b);//This won't print also
// console.log(c);//This will print becuase it doesn't follow block scope rule.


