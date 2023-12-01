//Number & globel Methods

/* 1. isinfite()
2.isNaN()
3.Number.isInteger() */

/* let num = 5;
console.log(isNaN(num));

let num1 = 5;
console.log(isNaN(num));


let name = "Indra";
console.log(isNaN(name));

let name1 = NaN;
console.log(isNaN(name1));

let myNum1 = '10';
let myNum2 = 20;
console.log(myNum1 + myNum2);


console.log(myNum1, 'is typof a' ,typeof myNum1);

console.log(Number(myNum1) + myNum2);

console.log(myNum2, 'is typof a' ,typeof myNum2);

console.log(myNum2.toString());

console.log(isNaN(myNum1));
console.log(Number.isNaN(myNum1));

let numb = 5;

console.log(Number.isInteger(numb));

let numb1 = 5.1;

console.log(Number.isInteger(numb1)); */


/* //Array methods
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May']; */


/*//ForEach
months.forEach((month) => {
    console.log(month);
});*/

//For

/* for(let i=0; i<months.lenght; i++){
    console.log('months : ',months[i], '\t\t index: ', i);
}  */

/* months.map((month, index) => {
    console.log('month :',month, '\t\tIndex : ', index);
}); */

/* const monthsInUpperCase = months.map((month) => {
return month.toUpperCase();
});
console.log('monthsInUpperCase  :',monthsInUpperCase ,'months :',months);

var convertedvalue = [];
for(let i=0; i<months.length; i++) {
    //console.log('month : ',months[i], '\t\t index: ',i);
    convertedvalue.push(months[i].toUpperCase());
}

console.log("convertedvalue : ",convertedvalue); */


const fruits = [
    {name: 'Apple', color: 'red', qty: 2},
    {name: 'Banana', color: 'yellow' , qty: 8},
    {name: 'Grapes', color: 'green' , qty: 6},
    {name: 'Orange', color: 'Orange' , qty: 4},
    {name: 'Grapes', color: 'black' , qty: 5},
    {name: 'Mango', color: 'yellow' , qty: 7},
    {name: 'Lemon', color: 'yellow' , qty: 3},
];

/* //const myUpdatedFruits = ['Apple color is red', 'Banana color is yellow'...];
 
const  myUpdatedFruits = fruits.map((fruit) => {
    //fruits => {name: 'Apple', color: 'red'}
    console.log(fruit.color);
    return `${fruit.name} color is ${fruit.color}`
});
console.log(myUpdatedFruits); */

/* const findGraphe = fruits.find((fruit) => {
    return fruit.name.indexOf('Grapes') > -1
});
console.log("find Grapes result: ",findGraphe); */

/* //FindIndex
const findmorethan5qty = fruits.findIndex((fruit) => {
    return fruit.qty > 3 && fruit.qty < 5 ;
});
console.log("findmorethan5qty : ",findmorethan5qty); */

/* const allGrapesfruits = fruits.filter((fruit) => {
    return fruit.name === 'Grapes';
});

console.log("allGrapesfruits : ", allGrapesfruits); */

/* const yellowfruits = fruits.filter((fruit) => {
    return fruit.name === 'yellow';
});
console.log("yellowfruits :", yellowfruits); */  


//Every

/* const number = [10, -20, 30, 50];
const allpositiveNumbers = number.every((numb) => {
    return numb > 0;
});
console.log('allpositiveNumbers :', allpositiveNumbers);

//same
const containspositivenumb = numbers.some((numb) => {
    return numb > 0;
});
console.log('containspositivenumb :',containspositivenumb); */


//Reduce

 /* const numbers = [1, 2, 3, 4, 5];
 */
/*const sum = numbers.reduce((accl, numb) => {
    return accl + numb;
}, 0);

console.log(sum); */

//const numbers =[1*2, 2*2, 3*2, 4*2, 5*2]; [2,4,6,8,10] =30

/* const sum = numbers.reduce((accl, numb) =>{
    return accl + (numb*2);
}, 5);

console.log(sum); */

/* const totalfruitsqty = fruits.reduce((acuuml, fruit) => {
    return acuuml + fruit.qty;
}, 0);
console.log ("totalfruitsqty : ",totalfruitsqty); */



const totalyellowfruitsqty = fruits.reduce((accu, fruit) =>{
    return accu + fruit.qty === 'yellow';
}, 0);
console.log('totalyellowfruitsqty:', totalyellowfruitsqty);