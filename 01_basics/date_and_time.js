// Video 13

let myDate = new Date();
// console.log(myDate);
let newDate = Date();
// console.log(typeof newDate);

//methods for date 
// to locale string
    // console.log(myDate.toLocaleString());//output:
    // 6/12/2025, 9:20:16 AM

    // console.log(myDate.toDateString());
    //output: Thu Jun 12 2025

    // console.log(myDate.toISOString());
    // output: 2025-06-12T09:21:35.086Z

    // console.log(myDate.toJSON());
    //output: 2025-06-12T09:26:51.457Z

    // console.log(myDate.toLocaleDateString());
    //output: 6/12/2025

    // console.log(myDate.toLocaleTimeString());
    //output: 9:28:14 AM

    // console.log(myDate.toTimeString());
    //output: 09:28:54 GMT+0000 (Coordinated Universal Time)


//specific date

let mySpecificDate = new Date(2023, 0, 3);
// console.log(mySpecificDate);
//output:2023-01-03T00:00:00.000Z
//formatted//console.log(mySpecificDate.toLocaleString());

// Timestamp

let myTimeStamp = Date.now();
// console.log(myTimeStamp);

// console.log(mySpecificDate.getTime());//To get time of specific date.


// convert to second
let newTime = Date.now();
newTime = Math.floor(newTime/1000);//converted to seconds, but compare only in milisecond.

//to extract time, date, month, year
//for time
let date1 = new Date;
// console.log(date1.toLocaleString());
// console.log(date1.getTime());

//for date
// console.log(date1.getDate());

//for month
// console.log(date1.getMonth() + 1);

//for year
// console.log(date1.getFullYear());


/*To locale string method overview */

newDate = Date.toLocaleString('default', {
    
});
console.log(newDate);