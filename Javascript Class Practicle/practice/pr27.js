// var a=100;
// function f1(){
//   //var a=99;
//   function f2(){
//    // var a=990;
//     console.log(a);
//   }f2();
// }f1();
//*********************************************************** */


// console.log(a,b,c);
// var a=10;        //undefined
// let b=30;        // TDZ: Uncaught ref:cant access before initialization.
// const c=40;

// f11();
// function f11(){
//   console.log("hello");        //"Function hoisting"
// }


// x();                 //It 'll act as variable hoisting / cant access beforre initialization.
// let x=()=>{
//   console.log("Arrow function");
// }

// //** Javascript Output Methods */
// console.log("OutPut Methods");
// document.writeln("Output on web page");
// document.write("dont give space ");
// alert("Used to give an pop message");
// console.log( confirm("It's also popup method if user click ok then true and if cancel the false"));
// console.log(prompt("Write something if u did ill return string else null!"));

//***** Types of function(): */

//1)-:function(){}//Anonymous function.

//2)-: //Named function.
function f1(){
  console.log("Named func")
};
f1();

//3)-:Function with expression:-
let f2=function(){
  console.log("Function With Expression");
};
f2();

//4)-: Arrow Function:-
let f3=()=>{
  console.log("Arrow Function");
};
f3();

//5)-: Higher Order Function:-
function f5(a,b){
  a();
  console.log(b);
  console.log("Normal function");
}
f5(()=>{
  console.log("Its an higher order function");
},30);

//6)-: Call Back Function:-
function hi(n,m){
  console.log("HIIII");
  console.log(m);
  
}
hi(bye(),"Oppssss")
function bye(){
  console.log("BYEEEEE");
}

//7) Nested Function:-
function f6(){
  console.log("Hello World");
  function f8(){
    console.log("Nested");//Closure will get created for outer function.
  }f8();
}f6();

//8) Immediate Invoke Function Expression(IIFE):-
var a=100;
(function(){
  var a=10000;
  console.log(a);
})();
console.log(a);

//9) Currying Function:-
 function sand(a){
  return function(b){
    return function(c){
      return d=a+b+c;
    }
  }
 }
 let res=sand(10)(90)(30);
 console.log(res);

 //10):- Pure Function:-
  function pure(a,b){
    return c=a+b;
  }
  console.log(pure(20,90));
  console.log(pure(20,90));
  console.log(pure(20,90));
  
  //11):- Impure Function:-
  let z=0;
  function impure(x,y){
    z++;
    return c=x+y+z;
  }
 console.log(impure(2,3,10));
 console.log(impure(2,3,10));
 console.log(impure(2,3,10));

 //*********** ARRAY()-: 3 WAYS */

 //:1)-:Literal Way:-
 let aa=[1,2,3,4,5,6,7,8];
 console.log(aa);
 console.log(aa[4]);
 console.log(aa[16]);
 aa[7]=90;
 aa[29]=56;
 console.log(aa);
 delete aa[0]; //it'll not change the length of the array.
 console.log(aa);

 //2):- By Invoking Array Constructor:-

 let bb=new Array(10,20,30,"hi",true,function(){});
 console.log(bb);

  let bc=new Array(89);
  console.log(bc);
 

 //3):- Array.of():-
 let rr=Array.of(45,34,55,66,33,13445,678);
 console.log(rr);
 
 let cd=Array.of(90);
 console.log(cd);

 // Checking the Given array is array ir not-:

 let hii=[1,2,3,4];
 let tata=[];
 let bob={};
 console.log();
  Array.isArray(hii);
  Array.isArray(tata);
   Array.isArray(bob);






