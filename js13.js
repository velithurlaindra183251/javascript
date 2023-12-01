//Scope Chain and Lexical Scoping

/* let a = 'Hello guys. '; //global scope

function first() {
  let b = 'How are you?';

  function second() {
    let c = ' Hi, I am fine, thank you!';
    console.log(a + b + c);
  }
  second();
  console.log(a + b); // I can't access c
}

first(); */

//Synchronous and Asynchronous

//Synchronous
/* function fun2() {
  console.log('Function 2 is called');
}

function fun1() {
  console.log('Function 1 is called');
  fun2();
  console.log('Function 1 is called Again 🦘');
}

fun1(); */

//Asynchronous
function fun2() {
    setTimeout(() => {
      console.log('Function 2 is called');
    }, 2000);
  }
  function fun1() {
    console.log('Function 1 is called');
    fun2();
    console.log('Function 1 is called Again 🦘');
  }
  
  fun1();