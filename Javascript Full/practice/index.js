// "use strict"
// // //Events in js
// // //event handler property
// // let x=document.querySelector(".mayu");
// // console.log(x);
// // // x.onmouseout=(e)=>{
// // // console.log("sandesh khup trass deto mala");
// // // x.style.background="pink";
// // // console.log();
// // // }

// // //addeventlistener()
// // // x.addEventListener("click",(e)=>{
// // //   console.log("hi");
// // // })

// // //HTMLeventAttribute
// // function a(e){
// //   x.style.background="purple";
// //   console.log(e);
// // }

// //keyboard event
// // let r = document.querySelector(".t");
// // console.log(r);
// // r.addEventListener("keypress",(e)=>{
// //   console.log(e);
// //   r.style.color="red";
// // })

// //Event Propogation

// // let gp =document.querySelector(".gp");
// // let p=document.querySelector(".p");
// // let c =document.querySelector(".c");

// // gp.addEventListener("click",(e)=>{
// //   // e.stopPropagation();
// //   console.log("grandparent clicked");
// //   console.log(e.eventPhase);
  
// // },true)

// // p.addEventListener("click",(e)=>{
// //   e.stopPropagation();
// //   console.log("parent clicked");
// //   console.log(e.eventPhase);

// // },false)

// // c.addEventListener("click",(e)=>{
// //   console.log("child clicked");
// //   console.log(e.eventPhase);
  
// // },true)

// // console.log(this); //belongs to global scope so window1

// function f1(){
//   // console.log(this);
//   let ar=()=>{
//   console.log(this);
  
// }
// ar()
// }
// f1();

// class Khadus{
//   constructor(name,id){
//     this.Name=name;
//     this.Id=id;
//     console.log(this);
    
//   }
// }
// let q=new Khadus("my",90);
// // console.log(q);

// var std={
//   name:"sanduuuuuuuuuuu",
//   salary:90000,
//   demo(){
//     console.log(this);
//     console.log("done");
//   },
//   f1:function(){
//     console.log(this);
//     console.log("done");
//     arrow: ()=>{
//     console.log(this);
//     console.log("done");
//   }
//   },
// }

// std.demo();
// std.f1()
// std.arrow()



// let p1=new Promise((res,rej)=>{
//   let datafetch=true;
//   if(datafetch)res([{},{}])
//     else
//     rej("Promise rejected");
// })
// console.log(p1);


// let b=Promise.reject("i'll be the reason!");
// console.log(b);
// b.catch((v)=>{
//   console.log(v);
  
// })



let a=window.fetch("https://fakestoreapi.com/products/18p");
console.log(a);
a.then((v)=>{
  console.log(v);
  let q=v.json();
  console.log(q);
  q.then((c)=>{
    console.log(c);
  })
})