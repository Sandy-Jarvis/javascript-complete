// console.log("hello");
// document.write("Its the use of Documen");
// document.writeln("Hello");
// //alert("Its usd to display the pop message on the web page");
// let a=confirm("Its also pop-up the message but it will provide boolean value(`true or false`)");
// console.log(typeof(a));
// let r1 =prompt("Write your age");
// console.log(r1);
//alert("hi iam mayuri");
//Anonymous Functtion:-

// function(){
//                 //there is no name for this function so we cant call directly.
// }

//Named Function:-

// function g1(){
//   console.log("Named Function");
// }
// g1();

// //Function with expression:-

// const x=function (){
//   console.log("function with expression");
// };
// console.log(x);

// //Arrow Function:-

// var res = () =>{
//   console.log("Its an arrow function");
//   }
// res();
// const rel = v => v;
// console.log(rel(800));

// // Higher Order Function:-

function t1(a,b){
  console.log("Function t1");
  a();
  
}
t1(()=>{
  console.log("HOF");
},20);








// let c = ()=>{

// }
// function f1(a,b){


// }
// f1(()=>{
//   console.log(30);
  
// },20);


// function j1(a,b){
//   console.log("function g1 it is");
//   a();
//   console.log(b);
// }
// j1(()=>{
//   console.log("higher order function it is");
// },20);

// Callback function:-

  function pap(n,m){
    console.log("main functon");
    n();

  }
    function ll2(){
      console.log("Call Back");
    }
    pap(ll2,200);





// Nested function:-

// function ga1(){
//   let l1=11;
//   function ga2(){        //Function inside the function.
//     console.log(l1);
//   }
//   ga2();
// }
// ga1();
