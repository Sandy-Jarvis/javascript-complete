//promise
// let p= new Promise((res,rej)=>{
//   // res([1,2,3]);
//   rej("error");
// })
// console.log(p);

// p.then((t)=>{
//   console.log(t);
// },p.catch((l)=>{
//   console.log(l);
// }))



// let a=Promise.resolve([1,2,3,44]);
// a.then((v)=>{
//   console.log(v);
  
// })

//classlist property
//add
// let k=document.querySelector(".tk");

// k.classList.add("a1");
// console.log(k);

// k.classList.remove("a1");
// console.log(k.classList.contains("a1"));

// k.classList.toggle("dk");
// k.classList.replace("tk","r")

//events
// k.onclick=(e)=>{
//   console.log(e);
//   console.log('heyyyy beautiful');
  
// }
// k.onmouseover=(e)=>{
//   k.style.color="pink";
// }
  // k.style.color="pink


// k.addEventListener("click",(e)=>{
//   k.style.color="pink";

// })

// function  hello(e){
//   k.style.background="pink";
//   k.style.color="yellow";
//   console.log(e);
  
  
// }

// let h=document.querySelector(".ok")
// console.log(h);
// h.onkeypress=(e)=>{
//   console.log(e);
//   console.log(e.value);
  
  
// }


// let a={x:1};
// let b=a;
// // console.log(b);

// a.x=2;
// console.log(b);

// console.log(b.x);

// console.log(0=="0"); //true
// console.log(0==="0"); //false
// let a;
// if(a==1||a==2||a==3){
//   console.log("true");
// }

// var a=10;
// function f1(){
//   console.log(a);
//   var a=20; //Undefined if we declare like this! and if we didn't declare it'll take from outside
// }
// f1()

// let obj={
//   name:"sandy",
//   id:123,
//   f1(){
//     console.log("byee");
//   }
// }
// console.log(obj);
// obj.name="qt";
// console.log(obj);

// // let v=Object.assign({},obj);
// // console.log(v);
// // v.name="golu";
// // v.f1="heli"
// let b=JSON.stringify(obj)
// console.log(b);
// console.log(JSON.parse(b));

// b.name="sarbam"

// let a=601;

// // let v=a%2==0? "even":"odd";
// console.log(a%2==0? "even":"odd");

// let a="sandesh"; //reverse string without reverse mwthod::::::::::::::::
// let reverse='';
// let r=a.split("");
// for(let i=r.length-1;i>=0;i--){
//   // console.log(r[i]);
//   reverse=reverse+r[i];
// }
// console.log(reverse);

// let a=[12,33,4444,550,661,77,88];
// for(let i in a){
//   console.log(++i); 
// }

// let r=a.sort((a,b)=>{
//   return a-b;
// });
// console.log(r);
// console.log(r.pop());

// let s="javascript"; //count the vowels!
// let c=0;
// for(let r of s){
//   if("aeiou".includes(r))c++;
// }
// console.log(c);


// let a=3;
// let b=6;
// [a,b]=[b,a];
// console.log(a,b);


// function f1(){
//   console.log("statr");
//   console.log(arguments[3]);
  
// }
// f1(1,2,3,4,5,6);



