// // //(Variables)
// // let a1=20;
// // const a2=40;
// // var a3=20;
// // console.log(a1,a2,a3);


// // //*************************************** */
// // //(Ternary)
// //  var d1=200;
// //  let c =d1>=30?"yes":"no";
// //  console.log(c);


// //  //************************************** */
// //  //(Data Types)
// // let r1="hello";                                    //String
// // console.log(r1);
// // console.log(typeof(r1));

// // let r2=900;                                       //Num
// // console.log(r2);
// // console.log(typeof(r2));

// // let r3=1000000000000000000000000000000000n;       //Bigint
// // console.log(r3);
// // console.log(typeof(r3));

// // let r4;                                           //Undefined
// // console.log(r4);
// // console.log(typeof(r4));

// // let r5="hello"-53;                                //NaN
// // console.log(r5);
// // console.log(typeof(r5));


// // let r6=true;                                      //Boolean
// // console.log(r6);
// // console.log(typeof(r6));

// // let r7=Symbol("hello");
// // let r8=Symbol("hello");                           //Symbol
// // console.log(r7==r8);
// // console.log(typeof(r7,r8));

// // let r9=null;                                      //Null
// // console.log(r9);
// // console.log(typeof(r9));

// // console.log(NaN==NaN);                            //Both came from different operation.

// // //TypeCasting:-

// //   //Eplicit:-

// //   let w1=[34,45,56];                              //toString-any datatype into string.
// //   let w2=w1.toString();
// //   console.log(w2);


// //   let w3="56";                                      //parseInt:-Convert string into Num.
// //   let w4=parseInt(w3);
// //   console.log(w4);

// //   let w5="89.001"                                  //parseFloat:-convert string into Float.
// //   let w6=parseFloat(w5);
// //   console.log(w6);
// //   console.log(typeof(w6));


// //   //Implicit:-

// //   console.log("7"+"9");
// //   console.log("7"+"str");
// //   console.log("20"-"30");
// //   console.log("30"*"2");
// //   console.log("30"*"str");
// //   console.log(false-true);
// //   console.log(NaN==NaN);

// //   //Function:-

// //   function f1(){
// //     console.log("I12BD14U");
    
// //     return 44;
// //   }
// //   let f2=f1();
// //   console.log(f2);
// // //************************************************************* */

// //   function f3(a,b){
// //     c=a+b;
// //     console.log(c);
// //     return "umbrella";
// //   }
// //   let x=f3(10,20);
// //   console.log(x);
// //   //*************************************************************** */

// //   //Lexical Scoppin/ Scope Chaining:-
// //   var e=38;
// //   function t1(){
// //     //var e=67;
// //     function t2(){
// //       //var e=9898;
// //       console.log(e);
// //     }
// //     t2();
// //   }
// //   t1();

// //   //************************************************* */
// //   // Variable Hoisting:-
// //   console.log(k);
// //   //let i=20;
// //   //const j=30;     //let and const go into TDZ so it shows Uncaught refrence error.
// //   var k=56;         //var will show undefined it will not go into TDZ.


// //   // Function hoisting:-

// //     x1();              //Function Hoisting happens only in named function.
// //     function x1(){
// //       console.log("Function Hoisting");
// //     }


// //     // Arrow Hoisting:-
// //     //yu();            //In Arrow Function hoisting it will show error cause of it will work as VH.
// //     const yu=()=>{
// //       console.log("Arrow Function");
// //     }


// //     //************************************************ */
// //     // Higher Order Function:- 

// //     function l2(m,n){
// //       console.log("Higher Order Function");
// //       m();  
// //     }
// //     l2(()=>{
// //       console.log("HOF passing function as an argument to another function");
// //     },90);

// //     //CallBack Function:-

// //     function o1(j,k){
// //       console.log("call");
// //       j(); 
// //     }

// //     o1(o2,45);
// //     function o2(){
// //       console.log("Back Function");
// //     }

// //     //Nested Function:-
// //     function o3(){
// //       console.log("Its the example of");
// //       function o4(){
// //         console.log("Nested Function");    
// //       }
// //       o4();  
// //     }
// //     o3();

// //     // Function with expression:-

// //     const v6=function(){
// //       console.log("Function with Expression");
// //     }
// //     v6();

// //     // Arrow Function:-

// //     let v7 = ()=>{
// //       console.log("Arrow Function");
// //     }
// //     v7();
    

// //     // Anonymous Function:-

// //     //function(){
// //       //console.log("Anonymous Function");
// //     //}

// //     //***************************************** */

// //     // Scope:-

// //     // Global And Script Scope:-

// //     var op=123;               //Global Scope
// //     let op1=123;              //Script
// //     const op2=123;            //Script
// //     console.log(op,op1,op2);

// //     function f9(){ //function f9() belongs to global scope and parameters belongs to local scope   
// //     }
// //     f9();


// //     // Local Scope:-
// //     function f10(){
// //       var ok1="hello";
// //       let ok2=56;           //All the variables,function and parameters bellongs to the local scope
// //       const ok3="how are u?";
// //       function f11(){
// //       }
// //       f11();
// //     }
// //     f10();

// //     //Block Scope:-
// //           //I'll execute when the block scope start executing and removed from stack when I'll done
// //     {
// //       var rr1="I belong to the global scope";
// //       let rr2="Block Scope";
// //       const rr3="only for block scope";
// //     }

// //     // Closure:-
    
// //     function m1(){
// //       let m2=456;
// //       console.log(m2);
// //       function m3(){
// //         let m3=789;      // Closure get created for outer function m1().
// //         console.log(m2);
// //       }
// //       m3();
// //     }
// //     m1();


    

    





    

    

    
    
// //   let w52=20;
// //   console.log(typeof(w52));
// //   console.log(typeof typeof(w52));
  
  
  
  
  

  
  
  
  

// // function g23(n,m){
// //   n();
// // }
// // g23(g34,58);
// // function g34(){
// //   console.log("hello");
  
// // }

  
  





// // {
// //   function mayu(){
// //     var a=67;
// //     console.log(a);
    
// //     const uu=56;
// //     console.log(uu);
    
// //   }
// //   mayu();
// // }





// var a=100;
// f1();
// function f1(){
//   //var a=54;
//   function f2(){
//     //var a=99;
//     console.log(a);
//   }f2();
// }


// let a1=()=>{
//   console.log("helo");
// }
// let a2=(a1);
// a2();

// // console.log("helooooo");
// // document.writeln("hi my name is sandesh");
// // document.write("its me");
// // alert("I am a pop-up message");
// // confirm("ill confirm user input if he clicks yes ill be true or false");
// // prompt("used to get input from the user if he write then it will be string or null")

// //function(){}//anonymous function
//  function g1(){
//   console.log("Named Function");
  
//  }
//  g1();

//  let x= function(){
//   console.log("function with expression");
//  }
//  x();
//   let arr=()=>{
//     console.log("Arrow function"); 
//   }
// arr();

// function f4(a,b){
//   a();
//   console.log("main function");
// }
// f4(()=>{
//   console.log("HOF");
// },40);

// function f5(a,b){
//   console.log("call");
// }
// f5(f6(),40);
// function f6(){
//   console.log("back"); 
// }

//  function g2(){
//   console.log("hiiiii");
//   function k4(){
//     console.log("nested");
//   }k4();
//  }
//  g2();

//  var j=500;
//  (()=>{
//   var j=100;
//   console.log(j);
//  })();
//  console.log(j);

//  function avg(a){
//   return function(b){
//     return function(c){
//       return p=a+b+c;
//     }
//   }
//  }
//  let res=avg(1)(2)(3);
//  console.log(res);
 
 