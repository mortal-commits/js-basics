const accountId = 2464;
let accountName = 'Jake@google.com';
var accountPass = 234234;
accountCity = 'Delhi';

// let us try to update every value

// accountId = 2324; // This will create an error because you can't update const variable

accountName = 'ben@google.com';
accountPass = 234452;
accountCity = 'Mumbai'; // You can create or define a variable without using any keyword in js. You should always avoid it.

console.log(accountName); // Used to print the variable on screen

console.table([accountId, accountName, accountPass, accountCity]) // This will print all values in a tabular form 

// All of the variables are updated. Don't use var always use let or const.Because var causes issues with scope.