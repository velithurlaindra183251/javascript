//High Order Function
//function which takes another function as an arguments is called HOF

//Call Back Function
// Function which get passed as an argument to another is called CBF

// We need create a Calculator

/* function add(a, b) {
  return a + b;
}

//console.log(add(5, 6)); //11

function sub(a, b) {
  return a - b;
}

//console.log(sub(8, 2)); //6

function multi(a, b) {
  return a * b;
}

function calculator(num1, num2, operator) {
  return operator(num1, num2); //sub(num1, num2)
}

var result = calculator(5, 4, sub); //-1
console.log(result); */

// Hoisting

/* console.log(fname); //undefined
var fname;
//fname = 'John';

console.log(fname); */

/* console.log(lname);
const lname; */

//Clouser

/* function outerFun(a) {
  var b = 10;
  function innerFun(params) {
    var sum = a + b;
    console.log('The sum of the two no is : ' + sum);
  }

  return innerFun;
}

var checkClouser = outerFun(5);
console.dir(checkClouser());
 */

//JSON

//JSON.stringify ==> convert from JSON to string

/* var my_object = { key_1: 'Some text', key_2: true, key_3: 5 };

console.log(my_object);

var object_as_string = JSON.stringify(my_object);

console.log(object_as_string);
console.log(typeof(object_as_string));

//JSON.parse turns a string of JSON text into a javascript object
var object_as_string_as_object = JSON.parse(object_as_string);

console.log(object_as_string_as_object) */