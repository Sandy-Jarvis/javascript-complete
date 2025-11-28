// // "use strict"

// // console.log(this); //belongs to the window!

// // function f1(){
// //   console.log(this);
// //     ()=>{
// //       console.log(this);
// // }
// // }f1();
// // // let ar=()=>{
// // //   console.log(this);
  
// // // }

// // class Mayu{

// //   constructor(name,id){
// //     this.a=name;
// //     this.b=id;
// //     console.log(this);
    
// //   }
// // }
// // let w=new Mayu("Chakuli",25);
// // // console.log(w);


// // let obj={
// //   name:"Sonpapdi",
// //   demo(){
// //     console.log("demo function");
// //     console.log(this);  
// //   },
// //   f1:function(){
// //     console.log("annna function");
// //     console.log(this);
// //     let arr=()=>{
// //     console.log("arroe function");
// //     console.log(this);
// //   }
// //   }
// // }
// // // obj.demo();
// // obj.f1();
// // // obj.arr();

// // let x=document.querySelector(".kt");
// // console.log(x);
// // x.addEventListener("click",(e)=>{
// //   console.log("hello sonpapdiiiii!");
// //   console.log(e.target);
// //   console.log(this);
  
// // })


// let emp={
//   name:"Butterfly",
//   id:90
// }

// function f1(a,b){
//   console.log(this);
//   console.log("end hua!");
//   console.log(a,b);
// }
// f1.bind(emp,20,90)()
// // f1();
// // f1(10,20);

// // f1.call(emp,10,20);
// // f1.call(emp,20,30)
// // f1.apply(emp,[10,20]);
// let a1=f1.bind(emp);
// console.log(a1);
// a1(2,4)
// // a1(1,2);
// // console.log(a1);
// // console.log(a1);

// // (function f1(){

// // })()
// console.log(isNaN("r"));


// // let y="uyth657655g";
// // for(let v of y){
// //   console.log(v);
// //   if(v==NaN){
// //     sum=sum+v
// //     }

// // }





let s=document.querySelector(".start");

// s.setAttribute("id","hello");
// s.setAttribute("class","bye");

// s.classList.add("bye" , "hii", "seeya");
// s.classList.remove("bye","hii");
// console.log(s.classList.contains("bye"));
// console.log(s.classList.contains("start"));
// s.classList.replace("start","end");
// s.classList.toggle("yess");



// console.log(s.getAttribute("htyu"));
// s.removeAttribute("id");
// console.log(s.hasAttribute("id"));


// console.log(s);

// s.onmouseout=((e)=>{
//   console.log("hello lets get started");
// //  let m= document.writeln("hello guysss");
//   s.style.color="hotpink";
// });

// s.addEventListener("mouseover",(e)=>{
//   console.log("heyyyyyy");
// });

// function f1(){

//   s.style.background="pink";
// }
