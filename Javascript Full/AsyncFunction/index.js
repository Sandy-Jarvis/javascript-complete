// async function f1() {
//   try{
//     console.log("start");
//   let a=100;
//   console.log(a);
//   const c=300;
//   console.log(c);
//   // c=4555;
//   console.log("end");
//   return 1000;
//   }
//   catch(e){
//     console.log(e);
    
//   }
//   finally{
//     console.log("i'll always execute!");
    
//   }
// }

// let v=f1();
// console.log(v);
// v.then((value)=>{
//   console.log(value);
// },(D)=>{
//   console.log(D);
  
// })

// console.log("Hello world!");


// // let a=Promise.resolve("I'am Resolved!!!");
// // console.log(a);

// // let ar=async()=>{
// //   try{
// //     console.log("start");
// //   let a=89;
// //   console.log(a);
// //   await a;

// //   const c=44555;
// //   console.log(c);
// //   // c=909090;
// //   console.log("end");
// //   return true;
// //   }
// //   catch(e){
// //     console.log(e);
    
// //   }
// // }
// // let r=ar();
// // console.log(r);
// // r.then((v)=>{
// //   console.log(v);
  
// // })
// // console.log("Hello World!!!!!");

let o=document.querySelector(".hi");
async function dataFetch() {
  try{
    let m=await window.fetch("https://fakestoreapi.com/products");
    console.log(m);
    let n=await m.json();
    console.log(n);
    for(let v of n){
      console.log(v);
      let{id,title,price,description,image}=v;
      o.innerHTML+=
      ` <tr>
        <td>${id}</td>
        <td>${title}</td>
        <td>${price}</td>
        <td>${description}</td>
        <td><img src="${image}" alt="images"></td>
      </tr>`
    }
    
  }
  catch(e){
    console.log(e);
    
  }
}
dataFetch();

// // let o=document.querySelector(".hi");

// // async function data() {
// //   let res=await window.fetch("https://fakestoreapi.com/products");
// //   let final=await res.json();
// //   console.log(final);
// //   for(let v of final){
// //     console.log(v);
// //     var{id,title,price,description,image}=v;
// //     o.innerHTML+=
// //     ` <tr>
// //          <td>${id}</td>
// //          <td>${title}</td>
// //          <td>${price}</td>
// //          <td>${description}</td>
// //          <td><img src="${image}" alt="images"></td>
// //        </tr>`
// //   }
// // }
// // data();

// async function f1() {
//   try{
//     console.log("start");
//   let a=100;
//   console.log(a);
//   const c=3000;

//   console.log(c);
//   c="mayu";
//   console.log("end");
//   return "i'm executed!";
//   }
//   catch(e){
//     console.log(e);
//     console.log("not a/n error");
    
    
//   }
//   finally{
//     console.log("mad or what");
    
//   }
  
// }
// let a=f1();
// console.log(a);
// console.log("heloo QT,Sonpapdi....Mazi cute little paystry!");




// console.log(a);


// let ar=async()=>{
// try{
//   console.log("start!");
// let a=1444;
// console.log(a);
// await window.fetch("https://fakestoreapi.com/products");
// const c="mayu";
// console.log(c);
// // c="yyyyyyyyyyyyyyyyyyyyyyyyyyy";
// console.log("end");
// return 1000;
// }
// catch (e){
//   console.log(e);
  
// }
// }
// let r=ar();
// // console.log(r);
// r.then((t)=>{
//   console.log(t);
  
// })
// console.log("hey beautiful!");
// console.log("hey beautiful!");



// async function Data() {
//   try{
//     let a= await window.fetch("https://fakestoreapi.com/products");
//     console.log(a);
    
//   let b= await a.json();
//   console.log(b);
  
//   for(let p of b){
//     console.log(p);
    
//   }
//   }
//   catch(e){
    
//   }
  
// }
// Data();



// let c1= Promise.resolve("bestuuuuu")
// c1.then((w)=>{
//   console.log(w);
  
// },(n)=>{
//   console.log(n);
  
// })
// async function f1() {
//  try{
//    let a =100;
//   console.log(a);
//   await c1;
//   const b=200;
//   console.log(b);
//   // b=300;
//   console.log(b);
//   console.log("end");
//   return 10;
//  }
//  catch(e){
//   console.log(e);
  
//  }
  
  
// }
// let a1=f1();
// console.log(a1);
// a1.then((l)=>{
//   console.log(l);
  
// })
// console.log("chubby cheeks");

// let f2=async()=>{
//     let t=await window.fetch("https://fakestoreapi.com/products")
//     console.log(t);
//     let f=await t.json();
//     // console.log(f);
    
//     return f;
// }
// let c=f2();
// console.log(c);
// c.then((q)=>{
//   console.log(q);
  
// })

// let r=document.querySelector(".hi");
// console.log(r);

// async function f1(){
//   let a=await window.fetch("https://fakestoreapi.com/products");
//   console.log(a);
//   let d=await a.json();
//   console.log(d);
//   for(let i of d){
//     console.log(i);
//     var{id,title,price,description,image}=i;
//     console.log(i);
//     r.innerHTML+=
//     `<tr>
//     <td>${id}</td>
//     <td>${title}</td>
//     <td>${price}</td>
//     <td>${description}</td>
//     <td><img src="${image}" alt="img"></td>
//   </tr>`
//   }
// }
// let r1=f1();
// console.log(r1);

// let m =new Set();
// m.add("hey");
// m.add("hello");
// m.add("seeya");
// console.log(m.has("hey"));
// // console.log(m.delete("hey"));

// console.log(m.size);
// // console.log(m.clear());
// m.forEach((v)=>{
//   console.log(v);
// })









// let set = new Set([[10,20]]);
// set.add("100");
// set.add("null");
// set.delete("100");
// console.log(set.size);
// console.log(set.has("[10,20]"));
// set.forEach((v,i,arr)=>{
//   console.log(v);
  
// })

// console.log(set);


// let m=new Map();
// m.set(()=>{},"function");
// m.set({obj:123},123);
// console.log(m);

// console.log(m.has({obj:123},123));
// console.log(m.size);
