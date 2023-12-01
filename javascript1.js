//Ecma script
/* 1.Let and const
2.Template Strings 
3.Arrow function
4.destructring
5.object props 
6.default arguments
7.Arrays in ES6
8.New no. methods
9. New global methods */

//var , let and const

/* var =>function scoped
let and const => blocked scoped */

/* var name = 'Indra';
name = 'Vinod';
console.log(name);

let name1 = 'Gaffar';
name1 = 'Ganesh';
console.log (name1);

const name2 = 'Vinay';
name2 = 'Mohan';
console.log(name2); */

//block and  function scope
/* function validate(isvalid) {
    if(isvalid) {
        var fname = 'Indra';
        var lname = 'Vinod';
    }
    console.log('my full name is: '+ fname + ' '+lname);
}

validate(true);

function validate1(isvalid) {
    let name = 'Mohan';
    if(isvalid) {
        let fname = 'Indra';
        const lname = 'Vinod';
    }
    console.log(name);
    console.log('my full name is : '+fname +''+lname);
}
validate1(true); */

/* var whowillwintoday =  'India';

if (true) {
    var whowillwintoday = 'Pakisthan';
    console.log(whowillwintoday);
}
console.log(whowillwintoday); */

/* let whowillwintoday = 'India';
if (true) {
let whowillwintoday = 'Pakisthan';
console.log(whowillwintoday),
}

console.log(whowillwintoday); */

/* const whowillwintoday = 'India';
if (true) {
   const whowillwintoday = 'pakisthan';
   console.log(whowillwintoday);
}

console.log(whowillwintoday), */


/* const whowillwintoday = 'India';
if(true) {
    const whowillwintoday = 'pakisthan';
    console.log(whowillwintoday);
}
console.log(whowillwintoday); */

//Template literals
//es5
//console.log("my name is Indra,"+"i am from pulivendula");

//es6 
//console.log("my name is Vinod, i am from kadapa");

/* //es5 
var firstname = "Indra";
var lastname = "Vinod";
console.log('my name is '+firstname+' my lastname is '+lastname+'-'); */

//es6

//console.log('my name is ${firstname}.my last name is ${lastname}.');


//we can add expressions too
//let a = 20;
//let b = 30;

//es5
//console.log('fifty is : +(a + b)+'and\not '+(2 * a + b)+');

//es6
//console.log('fifty is : ${a + b} and not ${2 * a + b}.' );

//New string methods
//starswith | endswith | includes | repeat

/* let firstname = 'Indra';
let lastname = 'Vinod';

const fname = '${firstname}';
const fullname = '${firstname}${lastname}';

console.log(fullname);

console.log(fname.startsWith('I'));
console.log(fname.startsWith('i'));
console.log(fname.endsWith('n'));
console.log(fname.includes('dr'));
console.log(fullname.includes('ra'));
console.log(fname.repeat('10')); */

//Arry destructuring
const myproglang = ['Javascript', 'HTML', 'CSS', 'React', 'Java'];

//es5
/* console.log(myproglang[2]);
console.log(myproglang[4]);
var top1 = myproglang[0];

console.log('my fav prog lang is : '+top1); */

//es6
/* let [top1, top2, top3, top4, top5] = myproglang;
console.log ('my fav prog lang is :'+top1); */

/* let [top1,,,,toplast] = myproglang;
let top1 = 'Javascript';
let toplast = 'Java'; */

/* console.log ('my fav prog lang is ${top1} and my last fav is${toplast}.');
console.log(top2); */


//program to swap two number without third variable

/* a = 5; b = 10
a = 10; b = 5 */

/* let a = 5;
let b = 10;
let temp = a;
a = b;  //a => 10
b = temp; // b => 5

console.log('the value of a is ${a} and the value of b is ${b}.');
[a, b] = [b, a];

console.log('the value of a is ${a} and the value of b is ${b}.'); */


//object destructuring 

const biodata = {
    name: 'Indra',
    age: 21,
    deg: 'Degree',
    hobb: {
        first: 'playing cricket',
        second: 'playing kabaddi'
    }

};

 //es5

 //console .log ('my name is : '+biodata.name+ ' and i have completed '+biodata.deg+'-');

//es6
/* let  {name, age, deg} = biodata;

console.log('my name is: ${name} and  i have completed ${deg}.'); */


let {name: myname, age: myage, deg, hobb} = biodata;
console.log('my name is:${myname}, i am ${myage} years old. i have completed ${deg} and my first hobby is ${hobb.first}');

