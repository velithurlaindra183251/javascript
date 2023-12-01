var myPhoneNumber = 123456789;
var myname = 'Indra Velithurla';

console.log(isNaN(myPhoneNumber));//false
console.log(isNaN(myname));//true

if (isNaN(myPhoneNumber)) {
    console.log("Please enter the valid phone no");
}

console.log(isNaN === isNaN);//true
console.log(Number.isNaN === isNaN);//false
console.log(isNaN(isNaN));//true

/* Operators
Operators is  asymobal that is used to perform operators according to user requiorements
1) Arthmetic operators => +, -, /, *, ++, --, etc
2) Assignment operators => =, =+, -=, /=, etc
3) Comparision operators => ==, <, >, <=, >= etc
4) Logical operators => &&, ||, !, etc
5) Conditional  operators => ?, :, etc */


//Arthmetic operators

/* document.write(5+5);//
document.write("<br><br>");
document.write(10-4); 

var a = 10;
var b = 4;
var c = a + b ;
document.write(c); 
document.write("<br><br>");

var a = 10;
var b = 4;
var c = a - b ;
document.write(c); 
document.write("<br><br>");

var a = 10;
var b = 4;
var c = a ** b ;
document.write(c); 
 */

//increment and decrement operators
//Operators: x++, ++x, x--, --x
//It used postfix. with operator after operand ==> x++
var a = 10;
var b = 2;
a++;
document.write(a);