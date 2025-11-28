// function f1(){
//   let a1=10;
//   let b1=20;
//   return a1+b1;
// }
// let c1=f1();
// console.log(c1);
//******************************************* */
// let a=20;
// const d=20;
// var t=30;

// function f1(){
//   let x1=20;
//   console.log(x1);
//   function q(){
//     let r1=22;
//     console.log(r1);
//   }
//   let t1=q();
// }
// let r2=f1();
// {
//   let e1=5;
//   console.log(e1);
//   const d=13;
//   console.log(d);
//   var t=35;
//   console.log(t);
// }
//******************************************
// function r1(a,b){
//   c=a+b;
//   console.log(c);
// }
// r1(5,10);

//************************************* */

// Global , Script , Local , InnerFunction , Block , Closure//

var z1=345;                  //! Global   ("Same varible declared below see the changes")
console.log(z1);

let v1=8000;                 //Script (Below redeclare the same varible inside block to see O/P)
console.log(v1);

function z2(a=10,b=20)       //Global
{
  c=a+b;
  console.log(c)
}
z2();

let z3="python";                              //Script
console.log(z3);

function r4(x)                                // Global
{
  console.log(x);                             //The parameter x will be local scope
  var z5="js";                                //Local
  let z6=890;                                 //Local                     
  const z7=18;                                //Local
  function z8(){
    let z9="Inner function";
    console.log(z9);
  }
  z8();                                       //Only inner function will be execute
  console.log(z5,z6,z7);                      
}
r4("JK");                                    // For outer Function


{
  let v1=100;          //BlOCK                   // Only belongs to the "Block Scope"
  console.log(v1);
}
{
  var z1=2000;         //Global                  //Value will be Updated globally("Global Scope")
  console.log(z1);
}
console.log(z1);

function d1(){
  let b2="andy";
  console.log(b2);
  function d2(){
    let b3=4545;
    console.log(b2);  //Closure
  }
  d2();
}
d1();

//*********************** */ 16/09/2025 
let a55=(22);
let r3=a55.toString();          //convert num 22 into string 22
console.log(r3);


let z22="5674.0011";
z23=parseInt(z22);
console.log(z23);