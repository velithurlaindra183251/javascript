//JavaScript
//Fundamental Concepts

//1. variable declaration
//2. Datatypes
//3. Arrays and Objects
//4.Functions
//5. Conditional Statement
//6. Looping concepts

/* 1. variable declaration
var name = 'Indra';
console.log(name); */

/*  2. Datatypes
1.Number
2.String
3.Boolean
4.Undefined  */

/* 1.Number
var data =1;
console.log(typeof data); */

/* //2.String
var data ="asdgjjkdk12344@#$";
console.log(typeof data); */


/* //3.Boolean
var data =true;
console.log(typeof data);
 */


/* //4.Undefined
var data ;
console.log(typeof data); */



//3. Arrays and Objects
/* //Array
var data = [1,2,3,4,5];
console.log(data[0]); */

/* //Object
var data = {
    name : 'Indra',
    age : 21
}
console.log(data.age); */

//4.Functions
/* function user(num1){
    console.log(num1);
}
user(10); */

/* function user(num1){
    return num1+5;
}
var output = user(10);
console.log(output); */

//5.Conditional Statement
//if , if-else ,if -else if-else
 // if
/*  var marks = 85;
if(marks>80){
    console.log('Grade A')
} */

//if-else
/* var marks = 75;
if(marks>80){
    console.log('Grade A')
}
else {
    console.log('Grade B')
} */

//if-else if-else

/* var marks = 40;
if(marks>80){
    console.log('Grade A')
}
else if(marks>55) {
    console.log('Grade B')
}
else {
    console.log('Grade C')
} */

//6. Looping concepts
//1.For loop ,  2. while loop


/* //1. for loop 
//Ex:- for(statement 1;statement 2;statement 3; ){
//statement1 = variable-decleration
//statement2 = Condition
//statement3 = increse/dicrese
}
 */
/* var output = 0;
for (var i=1; i<=10; i++){
    output = output + i;
}
console.log(output); */

//2. while loop
//syntax

/* var output = o;
while(condition){
    block the Code 
    increse/decrese
} */

/* var output = 0;
while(output<=10){
    console.log(output);
    output++;
} */

//Es5 version
/* Array Features                    Json Features                               Data Features
isArray()                            stringfy()                                 ValueOf()
Map()
Filter()
forEach()
every()
Some ()
index ()
lastindex ()
 */

//Array Features 
//isArray()
/* var data = [1,2,3,4]
console.log(array.is array(data)); */

//Map()
/* var data = [1,2,3,4]
var output = data.map(
    function (elements){
        return elements+1;
    }
)
console.log(output) */

//filter
/* var data = [1,2,3,4]
var output = data.filter (
    function(elements){
        return elements>2;
    }
)
console.log(output) */

//foreach()
/* var data =[1,2,3,4]
data.forEach(
    function(elements){
        console.log(elements)
    }
) */

//Every
/* var data= [1,2,3,4]
var output = data.every(
    function(elements){
        return elements;//>2;
       }
)
console.log(output)
 */

//some()
/* var data =[1,2,3,4]
var output =data.some(
    function(elements){
        return elements// >2;
    }
)
console.log(output) */

//indexof()
/* var data= [1,2,3,4]
console.log(data.indexOf(4)) */

//last indexof()
/* var data = [1,2,3,4,5,6,4,8]
console.log(data.lastIndexOf(4)) */

//JSOn Features
//stringfy()
/* var data = {
    name:'john',
    age:21
}
var json = JSON.stringify(data);
console.log(json); */

//Date Features
/* var date = New date ();
console.log(date); */

//ES6/ECMA Script 2015
/* 1.let & const
2.Arrow function
3.classes
4.for ..of 
5.default parameter
6. rest operator
7. spread operator
8.destructuring */

//1.let 
/* {
    let data = 10;
    console.log(data)
} */

//const
/* const data =10;
data =20;
console.log(data); */

//2.Arrow function
/* const user = (num1)=>{return num1+5;}
var output = user(10);
console.log(output); */

/* //3.classes
class user{
    constructor(msg){
        this.msg.msg;
    }
    admin(){
        console.log(this.msg)
    }
}
let obj = new user ('Hii');
let obj2 = new user('Hallo');
obj2.admin(); */


//For . of 
/* const arr =[1,2,3,4,5];
for (const a of arr){
    console.log(a);
} */


//Default parameter
/* function user(name,age=20){
    console.log(name+" "+age)
}
user('John',20) */

//Rest Operator
/* function user(name,...remaiming){
    console.log(name+" :"+remaiming)
}
user('John',25,"mail@gmail.com",123456) */

[]
//Spread operator
/* let arr1 =[1,2,3,4,5];
let arr2 =[6,7,8,9,10];
let arr3 =[...arr1,...arr2];
console.log(arr3); */


//Destructuring
let person =[1,2,3]
const [a,b,c]=person
console.log(a)
