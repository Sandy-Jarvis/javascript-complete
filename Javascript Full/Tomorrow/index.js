let m=new Map([[()=>{},"func"],[1234,"num"],[{name:"sandy"},"object"]]);
m.set("true",1);
console.log(m.get(()=>{},"func"));
// console.log(m.delete(1234));
console.log(m.has(1234));
console.log(m.size);
// console.log(m.clear());
m.forEach((v,k,m)=>{
  console.log(m);
//VAlue Key And Object!  
})
console.log(m.get(1234));
console.log(m);
console.log(typeof(m));


//******************************************************************************** */
function* f1(){
  let a=100;
  yield a;
  const c=1234;
  console.log(c);
  yield "done";
  return 1000;
}
let r=f1();
console.log(r);
console.log(r.next());
console.log(r.next());
console.log(r.next());
console.log(r);
//******************************************************************************** */

//Local; and Session storage:-
// let ap={
//   name:"sandy",
//   id:345678
// }
// console.log(ap.toString());

// let res=JSON.stringify(ap);
// console.log(JSON.parse(localStorage.getItem(ap)));

// console.log(JSON.stringify(ap));

// console.log(localStorage);
// localStorage.setItem("1234","num");
// localStorage.setItem("()=>{}","function");
// localStorage.setItem("[1,2,3,4]","array");
// console.log(localStorage.setItem("ap","res"));

// console.log(localStorage);
// localStorage.removeItem();
//******************************************************************************** */


//DAte:-
let d=new Date();
d.setDate(15);
// d.setMonth(1)
// d.setFullYear(2024);
// // d.setTime(23);
// console.log(d);

console.log(d.getDay());
//******************************************************************************** */


////Math();-

// let n=new Math(); //Math is not a Constructor!
// console.log(n);

console.log(Math.max(1,2,3,7,3,24));
console.log(Math.min(1,2,3,7,3,24));
console.log(Math.floor(235.6)); //Nearest lowest!
console.log(Math.ceil(234.9));//Nearest Highest
console.log(Math.trunc(123.756));
console.log(Math.sqrt(144));
console.log(Math.cbrt(64));
console.log(Math.pow(3,3));
console.log(Math.round(4.4));
console.log(Math.random()*(9999-1000)+1000);
console.log(Math.trunc(Math.random()*(9999-1000)+1000)); //Important!

//******************************************************************************** */

//Set():-

let s=new Set([1234,"string",true,()=>{},{name:"mayu"}]);
// s.add("string");
// s.add(()=>{});
// s.add({name:"sandy"});
// s.add(12345);
// console.log(s.delete(12345));
// console.log(s.has(12345));
// console.log(s.size);
// s.clear();
// // s.forEach((v,v1,s)=>{
// //   console.log(s);
// // })
console.log(s.delete({name:"mayu"}));
console.log(s.has(()=>{}));
console.log(s.has("string"));

console.log(s);

//******************************************************************************** */
// let n=5;
// let v=1;
// for(let i=1;i<=n;i++){
//   v=v*i;
// }
// console.log(v);
//******************************************************************************** */

// let n=10;
// let ar=[0,1];
// for(let i=2;i<n;i++){
//   ar[i]=ar[i-1]+ar[i-2];
// }
// console.log(ar);
//******************************************************************************** */

// let ar=[1,2,3,4,5,6,7];
// let prime=ar.filter((v)=>{
//   if(v<2) return false;
//   for(let i=2;i<v;i++){
//     if(v%i===0) return false
//   }
//   return true;
// })
// console.log(prime);
//******************************************************************************** */

// let a="hello javascript";
// let b=a.split(" ");
// console.log(b);
// for(let i=0;i<b.length;i++){
//   b[i]=b[i][0].toUpperCase()+b[i].slice(1);
// }
// let capital=b.join(" ");
// console.log(capital);
//******************************************************************************** */

let a="hi guys";
let reverse=a.split("").reduceRight((a,b)=>a+b,"");
console.log(reverse);
//******************************************************************************** */

let num="1234sandy8";
let sum=0;
for(let i of num){
  if(!isNaN(i)){
    sum=sum+parseInt(i);
  }
}
    console.log(sum);

//******************************************************************************** */
let ar=[1,2,3,4,5];
for(let i=ar.length-1;i>=0;i--){
  console.log(ar[i]);
}
//******************************************************************************** */
// Palindrome string
let v="madam";
let r1=v.split("").reverse().join("");
if(v===r1){
  console.log("yes it is");
}else{
  console.log("no");
}
//******************************************************************************** */
//Palindrome arrau:-
let g=[1,2,3,2,1];
let r2=g.slice().reverse();
if(JSON.stringify(g)===JSON.stringify(r2)){
  console.log("yes");
}else{
  console.log("no");
  
}

//******************************************************************************** */
//Remove duplicate:-
let e=[1,22,33,44,33,22,2];
let u=[...new Set(e)];
console.log(u);
//******************************************************************************** */
let age=4;
if(age<18){
  console.log("buy a cycle for yourself");
}else{
  console.log("apply for lisence");
  
}
//******************************************************************************** */

let d1=3;
switch(d1){
  case 1:{
    console.log("I am 1");
  }
  case 2:{
    console.log("I am 2");
  }
  case 3:{
    console.log("I am 3");
    break;
  }
  case 4:{
    console.log("I am 4");
  }
  default:{
    console.log("i am defalut");
    
  }
}
//******************************************************************************** */
let aa=24;
console.log(aa%2==0?"even":"odd");
//******************************************************************************** */
let i1=1;
while(i1<=10){
  console.log(i1);
  i1++;
}
//******************************************************************************** */
let i2=11;
do{
  console.log(i2);
  i2++;
}while(i2<=20);
//******************************************************************************** */
for(let i=10;i>=0;i--){
  console.log(i);
}
//******************************************************************************** */
let ob={
  name:"sandy",
  id:23456
}
for(let i in ob){
  console.log(ob[i]); //iterating the values!
  
}
console.log(Object.entries(ob));
//******************************************************************************** */

let copy={};
Object.assign(copy,ob);
console.log(copy);
//******************************************************************************** */
let a12=123.6789;
let r3=a12.toString();
console.log(r3);

//******************************************************************************** */
let ob1={
  name:"sandy",
  id:12344,
  demo(){
    console.log("bye");
    
  },
  arr:[22,333]
}
ob1.arr=[78]
ob1.id=1232345678;
console.log(ob1);

let copy1=ob1;
console.log(copy1);
//******************************************************************************** */
let vv=(Object.assign({},ob1));
vv.id=123777;
vv.arr[11];
console.log(vv);
//******************************************************************************** */
for(let r in ob1){
  console.log(r);
  
}
//******************************************************************************** */
// let oo={...ob1};
// console.log(oo);

// logstructuredClone(ob1);
// console.log(bv);
//******************************************************************************** */

let uv=document.querySelector(".ok");
console.log(uv);
console.log(uv.getAttribute("class"));

//******************************************************************************** */



// let p=new Promise((a,b)=>{
//   a(window.fetch("https://fakestoreapi.com/products"));
// })
// p.then((d)=>{
//   // console.log(d);
//   let r= d.json();
//   r.then((f)=>{
//     // console.log(f);
//     for(let i of f){
//       // console.log(i);
//       var{id,title}=i;
//       console.log(id,title);
      
//     }
//   })
//   console.log(r);
  
  
// })
// console.log(p);
//******************************************************************************** */
async function f3(){
 let r= await window.fetch("https://fakestoreapi.com/products");
 let y= await r.json();

 return y;
 
}
let rr=f3();
rr.then((v)=>{
  console.log(v);
  
})
