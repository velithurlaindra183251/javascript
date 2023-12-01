//Date and Time

//There are 4 ways of creating new Date Object

/* new Date();
new Date(year, month, day, hours,minutes, seconds, milliseconds);// 7 arguments
new Date(milliseconds);
new Date(date string);
 */

//Date objects are created with the new Date() constructor

//const currDate = new Date();
//console.log(currDate);

/* console.log(new Date().toLocaleString());// 09/30/2022 7:14:20 AM
console.log(new Date().toString());// Fri Sep 30 2022 07:16:19 GMT+0530 (India Standard Time) */

//console.log(Date.now())

//7 Parameter Date

/* var d = new Date(2018, 11, 24, 10, 33, 30, 0);
console.log("Date : ", d);
console.log("Date1 : ", d.toLocaleString()); */

/* var d = new Date(2021, 0);
console.log(d.toLocaleString()); */

//String to date Object
/* var d = new Date("October 13, 2021 11:13:00");
console.log(d.toLocaleString());// 10/13/2021, 11:13:00 */

//Milliseconds to Date Object
/* var d = new Date(1609574531435);
console.log(d.toLocaleString());

var d1 = new Date(1609574531435*2);
console.log(d1.toLocaleString()); */

/* var d = new Date(0);
console.log(d.toLocaleString());// 1/1/1970, 5:30:00 AM */

//Date Methods

//const curDate = new Date();

/*  // How to get the individual date
console.log(curDate.toLocaleString());
console.log(curDate.getFullYear());
console.log(curDate.getMonth()); // 0-11 ==> Jan - Dec
console.log(curDate.getDate());
console.log(curDate.getDay()); 
 */
 // How to set the individual date
/* console.log(curDate.setFullYear(2022));
console.log(curDate.setFullYear(2021, 10, 5));
console.log(curDate.setMonth(10));
console.log(curDate.setDate(21));
console.log(curDate.toLocaleString()); //11/5/2022, 7:45:00 AM  */

// Time Methods

/* const curTime = new Date();
//How to get the individual Time

console.log(curTime.getTime());
console.log(curTime.getHours());
console.log(curTime.getMinutes());
console.log(curTime.getSeconds());
console.log(curTime.getMilliseconds()); */

// let currTime = new Date();
//How to set the individual Time
//console.log(currTime.setTime());
console.log(currTime.setHours(5));
console.log(curTime.setMinutes(5));
console.log(curTime.setSeconds(5));
console.log(curTime.setMilliseconds(10));
console.log(curTime.toLocaleString()); 

// Math Object

//PI
/* var piaValue = Math.PI;
console.log(piaValue); */

//Round
/* let num = 10.58;
console.log(Math.round(num)); //11 */

/* //Math.pow()

//Math.pow(x,y) ==> it will return x to the power of y
console.log(Math.pow(2, 3)); // 2 * 2 * 2 ==> 8
console.log(2**3); // 2 * 2 * 2 ==> 8 */

/* //Math.sqrt()
//Math.sqrt(x) => returns the sqrt of x

console.log(Math.sqrt(25)); //5
console.log(Math.sqrt(81)); //9
console.log(Math.sqrt(66)); //8.12403840463596 */

/* // Math.abs()

// Math.abs(x) => returns the absolute (positive) value of x

console.log(Math.abs(-55)); //55
console.log(Math.abs(-55.5)); //55.55
console.log(Math.abs(4-6)); // 2 */

/* // Math.ceil()
// Math.ceil(x) => rounded up to the nearest integer

console.log(Math.ceil(4.51)); // 5
console.log(Math.round(4.51)); // 5
console.log(Math.ceil(99.1)); // 100
console.log(Math.round(99.1)); // 99 */

/* // Math.floor()
// Math.floor(x) => returns the vaule of x rounded down to its integer
console.log(Math.floor(4.7)); //4
console.log(Math.floor(99.1)); //99
console.log(Math.floor(105.5689898)); //105 */

/* // Math.min()
// Math.min() ==> can be used to find the lowest value in a list of arguments

let lowestResult = Math.min(0, 150, 30, 20, -8, -200, 80);
console.log(lowestResult); // -200 */

/* // Math.max()
// Math.max() ==> can be used to find the highest value in a list of arguments

let highestResult = Math.max(0, 150, 30, 20, -8, -200, 80);
console.log(highestResult); //150 */

/* // Math.random()
// Math.random() ==> returns a random number between 0 and 1

let myRandomNumb = Math.floor(Math.random() * 1000);
console.log(myRandomNumb); */

// Math.trunc()
// Math.trunc() ==> method returns the integer part of a number

console.log(Math.trunc(4.6)); //4
console.log(Math.floor(4.6)); //4
console.log(Math.trunc(-99.1)); //-99
console.log(Math.floor(-99.1)); //-100