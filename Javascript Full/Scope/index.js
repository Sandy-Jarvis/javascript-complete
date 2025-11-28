//1)Lexical Scoping/ Scope Chaining:-
let a=100;
function f1(){
  // let a=90;
  // console.log(a);
  function f2(){
    // let a=78;
    console.log(a);
  }f2();
}f1();

//2):-Variable Hoisting:-

// console.log(x); //in the case of let and cosnt it goes into TDZ(Temporal Dead Zone)
//console.log(y);//Uncaught ReferenceError: Cannot access 'y' before initialization
// console.log(z);  //Undefined
let x=100;
const y=90;
var z=23;

//3):-Function Hoisting:-
f2();
function f2(){
  console.log("Function Hoisting");
}

//************Scopes In JavaScript:- */

//1):-Global Scope:-
var v="Var variable be;ongs to the global SCope";
function f3(){  //Function parameters belongs tpo the local scope!
  console.log("Function which is declared globally belongs to the Global  Scope");
}f3();
console.log(v);

//2):-Script Scope::-
let t1=89;  //Let and Const belongs to  the script scope:-
const c="Hello World";
console.log(t1,c);

//3):-Local Scope:-
//Any function , var, let ,const,parameters which is declared inside function belongs to the local scope!

function h1(){
  let a=343;
  const c=767;
  var v=7887;
  console.log(a,c,v);
  function h2(){
    console.log("creating Nested function for local scope");
  }h2();
}h1()

//4):-Block Scope:-
//block scope doesn't have name, it will execute line by  line when block scope will start to execute ,"The Let and Const variable inside block belongs to the block scope and var variable inside block belongs to  the global scope!",we difine block scope inside the curly braces!
{
 let s=6767;;
 const g=89;
 var v1=89000;
 console.log(s,g,v1);
  function f11(){
    console.log("I'm inside the block scope!");
  }f11();
}

//5):-Closure:-
//Closure will get created when we try to access the outer function variable inside the innner function!, closure is a scope or a memory allocation,it's only created for the nested function,closure will get created for outer function!

function g1(){
  let g=99999;
  function g2(){
    console.log(g); //Here closure will get created for the outer function!
  }g2();
}g1();