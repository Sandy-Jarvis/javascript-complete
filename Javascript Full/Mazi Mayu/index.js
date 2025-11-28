// Practice:-

// let p=new Promise((a,b)=>{
//   // a([1,2,3,4]);
//   b("reason");   //code to handle asynchronous operation
// });
// console.log(p);
// p.then((data)=>{
//   console.log(data);
  
// })
// p.catch((error)=>{
//   console.log(error);
  
// })
// p.finally(()=>{
//   console.log("me kayam execute honr");
//   // console.log(kayam);
// })
// let a=Promise.resolve("helo",[22334,455]);
// a.then((v)=>{
//   console.log(v);
  
// })
// let b=Promise.reject("reansdkshjkd sdvbajsgdagjd ");
// b.catch((e)=>{
//   console.log(e);
// });

// let a=window.fetch("https://fakestoreapi.com/products");
// console.log(a);
// a.then((data)=>{
//   console.log(data);
//   let v=data.json();
//   console.log(v);
//   v.then((final)=>{
//     console.log(final);
//     for(let i of final){
//       console.log(i);
//       let{id,title}=i;
//       console.log(id,title);
      
//     }
//   })
// })
// console.log(a);























// let a=window.fetch("https://fakestoreapi.com/products");
// console.log(a);
// a.then((data)=>{
//   console.log(data);
//   let j=data.json();
//   console.log(j);
//   j.then((d)=>{
//     console.log(d);
//     for(let i of d){
//       console.log(i);
//       let{price,description}=i;
//       console.log(price,description);
      
//     }
//   })
// })

//async function:-
//  "use-strict"
// async function f1(){
//   let a=10;
//   console.log(a);
//   const c=90;

  
// }
// let res=f1();
// console.log(res);

// LEXICAL SCOPING/SCOPE CHAINING
// var a=10;
// function f1(){
//   // var a=90;
//   function f2(){
//     // var a=56;
//     console.log(a);
    
//   }f2();
// }f1();

// //HOISTING:-
// console.log(b);
// console.log(a,b);

// let a=10;
// var b=90;
// const c="hio";
// console.log(a,b,c);


//JAVASCRIPT OUTPUT METHODS:-

// console.log("hi");
// alert("i.m back"); //pop an alert message
// document.writeln("hello world"); //display text content in web page
// console.log(confirm("are you ok?"));  true//false
// console.log(prompt("write something:-")); string//null

// let a=function(){
//   console.log("function with expression");
  
// }
// a();
function f1(a){
  return function(b){
    return function(c){
      return a+b+c;
    }
  }
}
let a=f1(110)(20)(30);
console.log(a);

function f2(a,b,a,b){
  console.log("start");
  
}
f2(10,20,30,40);