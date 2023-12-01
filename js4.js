/* //switch case
switch(expression){
    case condaition 1:
        statements;
        break;
    case condition 2:
        statements;
        break;
    case condaition 3:
        statements;
        break;
    default:
        statements;
}
 */

/* var month = 14;
switch (month) { 
    case 1:
        document.write('January');
        break;
    case 2:
        document.write('February');
        break;
    case 3:
        document.write('March');
        break;
    case 4:
        document.write('April');
        break;
    case 5:
        document.write('May');
        break;
    case 6:
        document.write('June');
        break;
    case 7:
        document.write('July');
        break;
    case 8:
        document.write('August');
        break;

    case 9:
        document.write('Septemeber');
        break;
    case 10:
        document.write('October');
        break;
    case 11:
        document.write('Novemner');
        break;
    case 12:
        document.write('December');
        break;

        default:
            document.write('Please Enter Valid Month in Number');
            break;
} */

/* let age = 65;
switch (true) {
    case age >= 18 && age <= 40:
        document.write('Eligible');
        break;

    default:
        docu ment.write('Not Eligible');
        break;
} */


/* let area = 'circle';
const PI = 3.142;
let I = 5;
let b = 4;
let r = 3;

if (area === 'circle') {
    console.log('the area of the circle is: ', PI * r ** 2);
} else if (area === 'triangle') {
    console.log('the area of the triangle is: ', (1 * b) / 2);
} else if (area === 'rectangle') {
    console.log('the area of the rectangle is: ', 1 * b);
} else {
    console.error("Please provide valid data")
}


switch (area) {
    case 'circle':
        console.log('the area of the circle is: ', PI * r ** 2);
        break;
    case 'triangle':
        console.log('the area of the triangle is: ', (1 * b) / 2);
        break;
    case 'rectangle':
        console.log('the area of the rectangle is: ', 1 * b);
        break;

    default:
        break;
}

 */

var num = 6;
while (num <= 5) {
    console.log(num);
    num++;
}


var num = 6;
do {
    console.log(num);
    num++;
} while (num <= 5);