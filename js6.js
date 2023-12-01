//String
/* let myName = 'John';
let myCompanyName = 'UXfactory Pvt Ltd';

var myfname = new String('John Cabral')

console.log(myName);
console.log(myfname); */
/* var anySentance = "String are used for \'storing and manipulating\' text."

console.log(anySentance);

var anySentance1 = 'String are used for "storing and manipulating" text.'

console.log(anySentance1);
 */
//Finding a String in a String

//indexOf

/* const myBioData =
  'I have 10 years of exp with UI technology and I am working with UXfactory'; */
//console.log(myBioData.indexOf('I', 1));

//lastIndexOf

//console.log(myBioData.lastIndexOf('t', 2));

//Search
/* const sData = myBioData.search('of');
console.log(sData) */

//Extracting String Parts

/* 3 parts:
1) Slice(start, end);
2) subString(start, end);
3) subStr(start, length); */

/* var str = "Apple, Bananaa, Kiwi, mango";

const result = str.slice(7, -2);//Bananaa, Kiwi, man
const result1 = str.slice(0, 4);//Appl
console.log(result1);
*/
//Display only 280 chars of a string

/*  var myStr =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged";

  const result = myStr.slice(0, 280);
  console.log(myStr.length);
  console.log(result.length);  */

//SubString
/* var str = 'Apple, Bananaa, Kiwi';

const result = str.substring(0, 4); // Appl
const result1 = str.substring(2, 5); //
console.log(result1);
*/
//Replace
 /* var myStr =
  'I have 10 years of exp with UI technology and I am working with UXfactory';
const replacedData = myStr.replace('T', 'We');
console.log(replacedData);
console.log(myStr);  */

//Extracting String Chars

/* 1) charAt
2)charCodeAt
3)Property access [] */

//charAt
 /* let str = 'HELLO WORLD';
console.log(str.charAt(8)); //R  */

//charCodeAt
//return us UTF-16 code ( an integer between 0 and 65535)

 /* let str = 'HELLO WORLD';
console.log(str.charCodeAt(0));  //72 */

//Return the Unicode of the last char in a string

 /* let str = 'HELLO WORLD';
const lastIndex = str.length -1;
const result = str.charCodeAt(lastIndex);
console.log(result);  */

//Property Access
/* let str = 'HELLO WORLD';
console.log(str[2]);//L
console.log(str[3]);//L */

//UpperCase & lowerCase
/* let str = 'UXfactorY';
console.log(str.toUpperCase());//UXFACTORY
console.log(str.toLowerCase());//uxfactory  */

//Concat

 /* let fname = "John";
let lname = 'Cabral';
console.log(fname+lname);//JohnCabral
console.log(fname+' '+lname);//John Cabral
console.log(fname.concat(lname));//JohnCabral
console.log(fname.concat(" ", lname));//John Cabral  */

//trim
 /* var str = "            Hello      World!    ";
console.log(str.length);
const result = str.trim();
console.log(result);
console.log(result.length);  */

//Convering a String to an Array

//Split method

 var txt = 'a,b,c | d,e';//String
const result = txt.split(",");//['a', 'b', 'c | d', 'e']
console.log(result);
const result1 = txt.split(" "); //['a,b,c', '|', 'd,e']
console.log(result1);
const result2 = txt.split("|"); //['a,b,c', 'd,e']
console.log(result2);

var str = "H";
console.log(str.repeat(8));//HHHHHHHH 