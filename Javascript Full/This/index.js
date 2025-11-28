// "use strict"

// console.log(this); //belongs to the window!

// function f1(){
//   console.log(this);
//     ()=>{
//       console.log(this);
// }
// }f1();
// // let ar=()=>{
// //   console.log(this);
  
// // }

// class Mayu{
//   constructor(name,id){
//     this.a=name;
//     this.b=id;
//     console.log(this);
    
//   }
// }
// let w=new Mayu("Chakuli",25);
// console.log(w);


// let obj={
//   name:"Sonpapdi",
//   demo(){
//     console.log("demo function");
//     console.log(this);  
//   },
//   f1:function(){
//     console.log("annna function");
//     console.log(this);
//     let arr=()=>{
//     console.log("arroe function");
//     console.log(this);
//   }
//   }
// }
// // obj.demo();
// obj.f1();
// // obj.arr();

// let x=document.querySelector(".kt");
// console.log(x);
// x.addEventListener("click",(e)=>{
//   console.log("hello sonpapdiiiii!");
//   console.log(e.target);
//   console.log(this);
  
// })


let emp={
  name:"Butterfly",
  id:90
}

function f1(a,b){
  console.log(this);
  console.log("end hua!");
  console.log(a,b);
}
let a11=f1();
console.log(a11);

// f1();
// f1(10,20);

// f1.call(emp,10,20);
// f1.call(emp,20,30)
// f1.apply(emp,[10,20]);
a11.bind(emp)();
// a1(1,2);
// console.log(a1);
// console.log(a1);

// (function f1(){

// })()
console.log(isNaN("r"));


// let y="uyth657655g";
// for(let v of y){
//   console.log(v);
//   if(v==NaN){
//     sum=sum+v
//     }
// }

// "use strict"
// console.log(this);

// function f1(){
//   console.log(this);
//   let arr=()=>{
//   console.log(this);
  
// }
// arr();
// }
// f1()

// class Sand{
//   constructor(name,id){
//     this.Name=name;
//     this.Id=id;
//     console.log(this);
    
//   }
// }
// let v=new Sand("Chakuli",67);

// let a=document.querySelector(".kt");
// console.log(a);
// a.addEventListener("click",(e)=>{
//   console.log(this);
//   console.log(e.target);
  
// })

// let obj={
//   name:"sandy",
//   salary:20000,
//   f1(){
//     console.log(this);
    
//      let ar=()=>{
//     console.log(this); 
//   };
//   ar();
//   }
// }
// // obj.f1();
// // obj.ar();

// function f2(a,b){
//   console.log(this);
//   console.log(a,b);
//   console.log("end");
// }
// // f2();
// // f2.call(obj,10,20);
// // f2.apply(obj,[11,22]);
// // let vv=f2.bind(obj,10,222);
// f2.bind(obj)(55,66)
// // vv();


// let m=new Promise((res,rej)=>{
//   res([1,2,34]);
//   rej("i am bad");
// })
// console.log(m);
// m.then((data)=>{
//   console.log(data);
  
// })
// m.catch((e)=>{
// console.log(e);

// })
// m.finally(()=>{
//   console.log("i'll always execute");
  
// })

// class Mayu{
//   constructor(id){
//     this.Id=id;
//     console.log(this);
//   }
// }
// let a=new Mayu(6789);
// // console.log(a);
// class Sandy extends Mayu{
//   constructor(name){
//     super(id);
//     this.ID=id;
//     this.Name=name;
//   }
// }
// let s=new Sandy("Sanduuuuu");
// console.log(s);
// console.log(s.id);
