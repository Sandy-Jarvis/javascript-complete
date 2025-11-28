console.log(" Ganapati Bappa Moraya!");

//Lexical Scoping/Scope Chaining
let a=67;
function f1(){
  // let a=900;
  function f2(){
    // let a=1234;
    console.log(a);
  }f2();
}f1();

console.log("::::::::::::::::::::::::::::::::::::::::::::");

// Variable Hoisting
console.log(b);  //Undefined
// console.log(a1);//index.js:15 Uncaught ReferenceError: Cannot access 'a1' before initialization
// console.log(c);


var b=56;
let a1=100;
const c="My";
console.log(a1,b,c);
console.log("::::::::::::::::::::::::::::::::::::::::::::");

//Function Hoisting

f3();
function f3(){
  console.log("Function Hoisting happens in only named function! ");
  console.log("In arrow function it'll became variable hoisting ");
}
console.log("::::::::::::::::::::::::::::::::::::::::::::");

//Javascript OutPut Methods:-

console.log("Hello Javascript output methods");

// document.writeln("I'll give the space after completion of the statement");
// document.write(",depricated and cant give the space after end of the statement");

// alert("I'll pop-up the message");
// console.log(confirm("I'am also pop-up the message but if the user click  ok then return true else false"));
// console.log(prompt("I'll pop-up one input and if user enter something i'll return in string else null"));
console.log("::::::::::::::::::::::::::::::::::::::::::::");

// Types of Function:-

// function (){}; //Anonymous function:

// Named function:-
function f4(){
  console.log("Function with function Name"); 
}
f4();

//Function with expression:-
let e=function (){
  console.log("function with Expression"); 
}
e();

//Arrow Function:-
let A=()=>{
  console.log("Arrow function");
}
A();

//Higher Order Function:-

function f5(a){
  console.log("hi");
  a();
}
f5(()=>{
  console.log("HOF");
});

//Call Back Function:-
function f6(){
  console.log("call");
}
function f7(){
  console.log("back");
}
f7(f6());

//Nested Function:-

function f8(){
  console.log("start");
  function f9(){
    console.log("Nested");
  }f9();
}f8();

//Immediate Invoke Function Expression:-IIEF()():-

var v=100;
(()=>{
  var v=89;
  console.log(v);
})();
var v=567;
console.log(v);

//Currying Function:-
 function a11(a){
  return function (b){
    return function (c){
      return a+b+c;
    }
  }
 }
 console.log(a11(10)(21)(30));
 

// Pure Function:-

function f11(a,b){
 return a+b;
}
console.log(f11(1,2));
console.log(f11(1,2));

//Impure function:-
let k=0;
 function f12(a,b){
  k++;
  return a+b+k;
 }
 console.log(f12(11,22));
 console.log(f12(11,22));
 console.log(f12(11,22));

console.log("::::::::::::::::::::::::::::::::::::::::::::");
 
// Use Strict Statements:-

// "use strict"


d=67;
console.log(d);

function f22(a,a,b,b){//Duplicate parameter name not allowed in this context
  console.log(a,a,b,b);
  
}
f22(11,22,33,44);

var let="me"; //Unexpected strict mode reserved word 
console.log(let);

console.log("::::::::::::::::::::::::::::::::::::::::::::");

//argument Keyword:-
function f12(){
console.log(arguments);
console.log(arguments[2]);

}
f12(90,80,77,66,534,123);

console.log("::::::::::::::::::::::::::::::::::::::::::::");


//Array:- //Literal way:-
let ar=[11,22,33,44,55,66,77];
console.log(ar);
console.log(ar[45]); //Undefined
console.log(delete ar[2]);
console.log(ar);
console.log(ar[2]);

// By invoking array Constructor:-
let arr=new Array(5);
console.log(arr);

//Array.of():-

let arrr=Array.of(1);
console.log(arrr);

//Given data is array or not!
console.log(Array.isArray(arrr));

console.log("::::::::::::::::::::::::::::::::::::::::::::");


//Array <Methods>:-
let p=[11,22,33,44];
let q=[12345678]
console.log(p.push(111,222,44));
p.unshift(777,888)
// console.log(p.pop());
// console.log(p.shift());
console.log(p);

// console.log(p.slice(-4,-2));
// console.log(p);

// console.log(p.splice(1,2,4567,7890));
// p.reverse();
// console.log(p.concat(q));
// console.log(p.includes(332,1));
console.log(p.indexOf(44,6)); //if not present then returns -1!
console.log(p.lastIndexOf(44,7)); //second argument for last index search! And if you didnt give any from inndex value then it'll give end matching value!
// console.log(p.fill("sandy",0,3));

console.log(p);

let op=[11,22,[34,56,["hi"],6776,"byr"],"end"];
console.log(op.flat(Infinity));
console.log(op);


//Array HOF:-
//find:-
let ab=[123,456,789,456,789,25687];
console.log(ab);
let res=ab.find((v,i,ab)=>{
  return v%2==0;  //if predicate is false then Undefined!
})
console.log(res);

//findIndex:-
let res2=ab.findIndex((v,i,ar)=>{
  return v%2==0;  //if predicate is false then -1
})
console.log(res2);

//filter:-
let res3=ab.filter((v,i,ab)=>{
  return v>700; //if predicate is false then empty[]
})
console.log(res3);

//some:-
let res4=ab.some((v,i,ab)=>{
  return v<=400; //true if any one of the element satifies the condition else false!
})
console.log(res4);

//every:-
let res5=ab.every((v,i,ab)=>{
  return v<=400; //true if all of the element satifies the condition else false!
})
console.log(res5);

//map():-
let res6=ab.map((v,i,ab)=>{
  return v+1000;
})
console.log(res6);

//forEach():-
let c1=[];
let res7=ab.forEach((v,i)=>{
  c1= i;
})
console.log(c1);

//reduce:-
let r1=ab.reduce((a,b)=>{
  return a+b;
},28300)
console.log(r1);

//reduceRight:-
let r2=ab.reduceRight((a,b)=>{
  return a+b;
})
console.log(r2);

//sort:-
let r3=ab.sort((a,b)=>{
  return b-a;
})
console.log(r3);

//******************************************** */
let grand=document.querySelector(".grand");
let parent=document.querySelector(".parent");
let child=document.querySelector(".child");

// console.log(grand,parent,child);
// grand.addEventListener("click",(e)=>{
//   console.log(e);
//   console.log(e.eventPhase);
//   console.log("grand clicked");
  
// },true);

// parent.addEventListener("click",(e)=>{
//   console.log(e);
//   console.log(e.eventPhase);
//   console.log("parent clicked");
  
// });

// child.addEventListener("click",(e)=>{
//   console.log(e);
//   console.log(e.eventPhase);
//   e.stopPropagation();
//   console.log("child clicked");
// });

var v1=5;
var n=1
for(let i=1;i<=v1;i++){
  n=n*i;
}
console.log(n);

let n1=10;
let aq=[0,1];
for(let i=2;i<n1;i++){
  aq[i]=aq[i-1]+aq[i-2];
}
console.log(aq);

