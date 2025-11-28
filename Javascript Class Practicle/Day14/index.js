// console.log(String===NaN);

// console.log("mayuu");
// console.log("mayuu");
// console.log("mayuu");
// alert("Im here to disturb This");
// console.log("mayuu");
// console.log("mayuu");

// setTimeout((a,b,c)=>{
//   console.log("Mayuri");
//   console.log(a,b,c);
  
// },3000,10,10,20)                    

// let r = setInterval(function(){
//   // console.log("sandesh is very handsome");
//   console.log(document.writeln("sandesh is very sweetest person </br>"  ))
  
// },2000)

// clearInterval((r)=>{

// },5000);

// let a1=window.setTimeout(()=>{
  // document.writeln("This is the practice for the Javascript Asynchronous Operation");
// },4000)
// console.log(a1);

// let a2=setInterval(function f1(q,w,e){
  // console.log("I am smart");
  // clearInterval(a2);
// },5000,8,9,7)
// console.log(a2);
//clearInterval(a2); // Both are belongs to global scope so it will performs synchronous in nature so it'll executes first and no Asynchronous operation will going to execute!
// clearTimeout(a1);

let r1=window.setInterval((m,n)=>{  //Important:-
  console.log("I'm going to execute 3 times");
},2000,10,100)

setTimeout(()=>{
  clearInterval(r1)
},6000)
