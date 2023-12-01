console.log('This is local storage');

var impNames = ['Indra', 'Vinod', 'Mohan'];

//Add localStorage
localStorage.setItem('Name', 'Indra');
localStorage.setItem('Name2', 'Mohan');
localStorage.setItem('impNames', JSON.stringify(impNames));

//Clear localStorage
//localStorage.clear();

//clear a particular key-value pair
//localStorage.removeItem('Name2');

//Retrive an item from the local storage
var name = localStorage.getItem('Name');
var impNames2 = JSON.parse(localStorage.getItem('impNames'));
console.log(impNames2);

//Session Storage

sessionStorage.setItem('sessionName', 'sHarry');
sessionStorage.setItem('sessionName2', 'sRohan');
sessionStorage.setItem('sessionImpNames', JSON.stringify(impNames));