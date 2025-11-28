//Types of function:-
//1):-Named Functon:-

function f1(){
  console.log("Named function");
}
f1();

//2):-Anonoymous Function:-
// function(){
//   console.log("function without function name:");
  
// }

//3):-Function with expression:-
let x=function(){
  console.log("passing a function as a value to the variable! or storing in a varriable!");
}
x();

//4):-Arrow Function:-
let arrow=()=>{
  console.log("Its an arrow function");
}
arrow();
//if there  is single line of code then no need of the curly braces
//if there is single parameter then no need of paranthesis
//no need of return keyword if .....(find what it is!)

//5):-Higher Order Function:-(HOF)
function f2(a,b){
  console.log("main function!");
  b();
  console.log(a);
  
}
f2(10,()=>{
  console.log("passing function as an argument! to another function!");
})

//6):-Call Back Function:-
function f3(c){
  console.log("Original me");
  c();
}
f3(f4);
function f4(){
  console.log("calling  this function inside f3");
}

//7):-Nested function:-
function a1(){
  console.log("parent function!");
  function a2(){
    console.log("child function!");
  }a2();
}a1();

//8):-closure:-
function a3(){
  let a=100;
  // console.log(a);
  function a4(){
    console.log(a);  //Closure will get created here!when we try to access the outer function variable inside inner function!
  }a4();
}a3();

//9):-Immediate Envoke Function expression(IEFE):-
var v=290; 
(function t1(){
  var v=101;
  console.log(v);  
})();
console.log(v);

//10):-Currying function():-
function a(A){
  return function b(B){
    return function c(C){
      return A+B+C;
    }
  }
}
console.log(a(1)(20)(3));

//11):-Pure Function:-
function pure(m,n){
  return m+n;
}
console.log(pure(11,22));
console.log(pure(11,22));


//12):-Impure function:-
let i=0;
function impure(x,y){
  i++;
  return x+y+i;
}
console.log(impure(77,11));
console.log(impure(77,11));
console.log(impure(77,11));