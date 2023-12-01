//es 5

/* function add() {
    var a = 5;
    var b = 10;
    return a + b;
}

console.log ('I an from add : ', add());
var sum = function () {
    var a = 5;
    var b = 10;
    return a + b;
};

console.log('I am from sum : ', sum()); */

/* const sum = () => {
    let a = 5;
    let b = 10;
    return a + b;
}

console.log('I am from ES6 sum',sum()); */


/* let a = 10;
let  b = 20;

const sum = () => {
    return a + b;
};
console.log ('I am from ES6 sum', sum()); */

/* let a = 30;
let b = 40;
const sum = () => a + b;

console.log('I am from ES6 sum', sum()); */

/* let a = 30;
const sum = (b) => a + b;

console.log('This is from sum : ',sum());//NaN */

/* const sum = (a, b) => a + b;

console.log(sum(25, 30));//55 */

//Default parameters
//ES5

/* function multi (a, b) {
    return a + b ;
}

console.log(multi(4));//NaN */

/* function multi(a, b) {
    console.log(typeof b);
     b = typeof b !== 'undefined' ? b : 2;
     console.log(b);
    return a * b;
}
console.log(multi(4));//2 , 8 */

/* function multi (a = 3 , b = 4) {
    return a * b;
}
console.log(multi(5));//20 */


/* const multi = (a, b=5) => {
    return a * b ;
}

console.log (multi(5));//25
console.log(multi(5, 10));//50
console.log(multi(10, 5));//50 */


//Rest Parameters

//Es5
/* function calcmarks(E, T, S, PS, SK, SS,  M) {
    return E + T + S + PS + SK + SS + M;
}
console.log (calcmarks(50, 80, 60, 75, 40, 90, 85, 98));//480 */

//ES6
/* function calcmarks(...inputs) {
    //inputs[50, 80, 60, 75, 40, 90, 85, 98, 86, 39, 47]
    let total = 0;
    for(let i of inputs){
        total +=i  
    }
    return total:
}
console.log(calcmarks(50, 80, 60, 75, 40, 90, 85, 98, 86, 39, 47));//11 */


/* function fun (a, b, ...c) {
    console.log(`${a} ${b}`);
    console.log(c);
    console.log(c[1]);
    console.log(c.lenght);
    console.log(c.indexof('Vinod'));
    console.log(c.includes('Indra'));
    console.log(c.includes('Mohan'));
    console.log(c.indexOf('Mohan'));
}

fun('Bharat', 'Ganesh', 'Indra', 'vijay', 'Vinod'); */

//Spread Operator

//Es5
/* function sum(a, b, c) {
    console.log(a + b + c);
}

//sum(1, 2, 3);
var arrval = [5, 2, 3];

sum.apply(null. arrval); */

//Es6
/* 
function sum(a, b, c) {
    console.log(a + b + c);
}

var arrval = [5, 5, 3];
console.log(...arrval);
sum(...arrval); */

/* let arr1 = [1,2,3];
let arr2 = [4,5,6];
let arr3 = [7,8,9];

arr1 = arr1.concat(arr2);

arr1 = [...arr1, ...arr2];
arr1 = [...arr1, ...arr2, ...arr3];
console.log(arr1); */


let arr1 = [1, 2, 3];

let arr2 = [...arr1];
console.log("arr1 before appending: ", arr1);
arr2.push(4, 5);

console.log("arr1 : ", arr1); 
console.log("arr2 : ", arr2);

