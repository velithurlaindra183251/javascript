//Array

/* var names = ['Indra', 'Vinod', 'Vijay', 'Mohan', 'Bharat']; */

/* console.log(names[0]);
console.log(names[3]);

console.log(names.lenght); */

/* var msg = 'Hello,';
var msg1 = 'HI,';

for (let i = 0; i < names.length; i++) {
    if (names[i] === 'Vinod'|| names [i] === 'Mohan'){
        console.log(msg1 + names[i]);
    } else {
        console.log(msg + names[i]);
    }
} */

/* let person = { fname: 'Indra', lname: 'Velithurla', age: 21};

/* console.log(person.lname);
console.log(person.age);
const fullname =person.fname+""+lname;
console.log(fullname); */

/* for(let x in person) {
    console.log(x + '-'+ person[x]);
}  */

//For of

/* const cars = ['Indigo', 'Beleno', 'I20','Range Rovers', 'Bez'];
for (let n of cars) {
    console.log(n);
} */

//Array.Prototype.push()

/* const animals = ['Horse', 'Lion', 'Tiger', 'Dog'];
const newanimals = animals.push('Cat');
//console.log(animals);
//console.log(newanimals);
animals.push('Cow', 'Elephent', 'Ox');
console.log(animals); */

//UnShift

/* const animals = ['Lion', 'Cat', 'Dog', 'Goat'];
const newanimals = animals.unshift('Horse');
//console.log(animals);
//console.log(newanimals);
animals.unshift('cow', 'Elephant', 'ox');
console.log(animals); */

/* const mynumbers = [1, 2, 3, 5];
mynumbers.unshift(6, 7);
console.log(mynumbers); */


/* //Pop()

const plants = ['potato', 'tomato', 'bringle', 'ledifinger','clasterbeens'];
console.log(plants);
console.log(plants.pop())
console.log(plants); */

/* Shift

const plants = ['broccoli', 'cauliflower', 'cabbage', 'Onian'];

console.log(plants);
console.log(plants.shift())
console.log(plants); */

//1: Add Dec at end of an array?

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'june', 'july'];
/* months.push('Dec');
console.log(months);
 */


/* //Add Dec at end of an array without using push?

const newmonths = months.splice(7, 0, 'Dec');
console.log(months); */

// what is the return value of splice method?

/* const newmonths = months.splice(7, 0, 'Dec');
console.log(newmonths); */

/* // Update mar to march ?

const Updatemonth = months.splice(2,1, 'march');
console.log(months); */

//June
const indexofmonth = months.indexOf('June');
console.log(indexofmonth);

if (indexofmonth !== -1) {
    const updatemonth = months.splice(indexofmonth, 1, 'june');                         
    console.log(months);
} else {
    console.log("No such data/index found")
}