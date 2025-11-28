
//Event Propogation

let gp =document.querySelector(".gp");
let p=document.querySelector(".p");
let c =document.querySelector(".c");

gp.addEventListener("click",(e)=>{
  // e.stopPropagation();
  console.log("grandparent clicked");
  console.log(e.eventPhase);
  
},false)

p.addEventListener("click",(e)=>{
  // e.stopPropagation();
  console.log("parent clicked");
  console.log(e.eventPhase);

},false)

c.addEventListener("click",(e)=>{
  console.log("child clicked");
  console.log(e.eventPhase);
  e.stopPropagation();
  e.stopImmediatePropagation();
  
},false)
