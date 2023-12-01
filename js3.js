/* var age = 19 ;

if (age > 18) {
    console.log("Eligible for voing");
} */

/* if ( age >= 18 && age > 60 ){
    console.log("Eligible for voing");
    console.log("senior citizen");  
}  */

/* var x = 10;
var y = 10;

if (x === 5 || y ===10) {
    console.log("true statement");//true==true
}

if (x === 10 || y ===1) {
    console.log("true statement 1");//false==true
}

if (x === 10 || y ===1) {
    console.log("true statement 1");//false==true
}
 */


/* what is the value of 3***3 ?//3125
console.log(5**5) ; */

//console.log(5+'Hii');//5Hii

/* var a = 10;
var b = 15;

console.log("value of before a is"+a);//10
console.log("value of before a is"+b);//15
 */
/* var c = b;
b = a
a = c

console.log("value of a is"+a);
console.log("value of a is"+b);
 */


//== - only value
//=== - value and datatype

/* var num1 = 10;
var num2 = '10'

console.log(typeof num1);//number
console.log(typeof num2);//string

console.log(num1 == num2);//true
console.log(num1 === num2);//false
 */

/* var x = 10;
var y = 10; */

/* if (x == y){
   console.log("this is true");//true
} */

/* if (x > y) {
   console.log("this is true");
} */

/* if (x === y){
   console.log("this is true");
} */

/* var x = 20;
var y = 19;

if ( x > 19){
   console.log(this is true);
} */

/* var today = 'rain';

if (today == 'rain') {
   console.log("Use Raincoat");
} else {
   console.log("No need Raincoat");
}
*/

/* var today = 'sunny';

if (today == 'rain') {
   console.log("Use Raincoat");
} else {
   console.log('No need Raincoat');
} */

/*  var year = 2020;

 if(year % 4 === 0){
    if(year % 100 === 0){
        if (year % 400 === 0){
            console.log("The yaer" , year , 'is a leap year');
        } else {
            console.log('The year' , year , 'is not a leap year');
        }
    } else {
        console.log("The year", year ,'is a leap year');
    }
 }   */


/*  var year = 2022;

if(year % 4 === 0){
 if(year % 100 === 0){
     if (year % 400 === 0){
         console.log("The yaer" , year , 'is a leap year');
     } else {
         console.log('The year' , year , 'is not a leap year');
     }
 } else {
     console.log("The year", year ,'is a leap year');
 }
} else {
     console.log('The year' , year , 'is not a leap year');
 } 
*/

/* var score = 0;
if ((score == 0)){
    console.log(' Yay, won the match');
} else {
    console.log('OMG. loos the match'); 
}
 */

/* if(...condition1){
        statement 1
} else if(condition2){
        statement 2
} else if(condition3) {
        statement 3
} else {
    statement N
} */


//1 -11 ==>Good Morning
//11-15 ==>Good Afternoon
//15-18 ==> Good Evening
//18-24 ==> Good Night

/* let time = 20;

if (time > 1 && time < 11) {
    console.log('Good Morning');
} else if (time > 11 && time < 15){
    console.log('Good Afternoon');
}else if (time > 15 && time < 18){
    console.log('Good Evening');
}else {
    console.log('Good Night');
}
 */

//0 - 50 => D Grade
//50 - 60 => C Grade
//60 - 70 => B Grade
//70 - 100 => A Grade

let Grade = 80;
if (Grade > 0 && Grade < 50) {
    console.log('D Grade');
} else if (Grade > 50 && Grade < 60) {
    console.log('C Grade');
} else if (Grade > 60 && Grade < 70) {
    console.log('B Grade');
} else if (Grade > 70 && Grade < 100) {
    console.log('A Grade');
}
