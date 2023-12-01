/* //OOps in JS
// object oriented JS
Object literals?
what is 'this' object? */

// 1 way 
 var biodata = {
    myname: "Indra",
    myage:21,
    getdata: function () {
        console.log ('my name is '+ biodata.myname+'and my age is'+biodata.myage)
    }
}

console.log (biodata);
console.log (biodata.getdata ());

//2 way 
var biodata = {
    myname: 'Indra',
    myage:21,
    getdata() {
        console.log(
            'my name is '+biodata.myname+'and my age is'+ biodata.myage,
        );
    },
};

console.log(biodata);
console.log(biodata.getdata());

var biodata = {
    myname: {
        firstname: 'Indra',
        Lastname: 'Vinod',
    },
    myage:21,
    getdata: function () {
        console.log (
            'my name is '+ biodata.myname+ 'and my age is' +biodata.myage,
        );
    },
};

console.log(biodata.myname.lastname)

//Ex1:
console.log (this);

//Ex2:
var mynames = 'Indra';
function myname () {
    console.log(this.mynames);
}
myname();

//Ex3:
var obj = {
    myage:21,
    mysection:'A',
    myname () {
        console.log (this.myage);
    }
}

obj.myname();

var biodata = {
    myname: {
        firstname: 'Indra',
        lastname: 'Vinod',
    },
    myage:21,
    getdata: function () {
        console.log ('my name is' + this.myname+ 'and myage is' + this.myage);
    },
};

biodata.getdata();
