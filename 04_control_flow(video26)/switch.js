// SWITCH CASE STATEMENT.
/*
switch(key) {
    case value:
    break;

    default:
    break;
}
*/

const month = 3;
switch (month) {
    case 1:
        console.log("January");     
        break;
    case 2:
        console.log("February");     
        break;
    case 3:
        console.log("March");     
        break;
    case 4:
        console.log("April");     
        break;

    default:
        console.log("default case match");
        break;
}
// By default: Every condition after matched condition runs till default.
// That is why we use break in every situation to stop the excecution when condition matches.

// USING STRINGS AND OTHER DATATYPES IN SWITCH


 month = "march";
switch (month) {
    case "jan":
        console.log("January");     
        break;
    case "feb":
        console.log("February");     
        break;
    case "march":
        console.log("March");     
        break;
    case "april":
        console.log("April");     
        break;

    default:
        console.log("default case match");
        break;
}
