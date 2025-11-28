let a=document.querySelector(".gp");
let b=document.querySelector(".p");
let c=document.querySelector(".c");
console.log(a,b,c);

let gp=a.addEventListener("click",(e)=>{
  console.log(e.eventPhase);
  e.stopPropagation();
  console.log("Grandpa clicked");
},true);

let p=b.addEventListener("click",(e)=>{
  console.log(e.eventPhase);
  e.stopPropagation();
  console.log("parent clicked");
},true);

let child=c.addEventListener("click",(e)=>{
  console.log(e.eventPhase);
  e.stopPropagation();
  console.log("child clicked");
},true);

document.addEventListener("click",(e)=>{
  console.log(e.eventPhase);
  e.stopPropagation();
  console.log("document clicked")
},true);