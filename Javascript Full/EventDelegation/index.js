let r=document.querySelector(".list");
console.log(r);

// r.onclick=(e)=>{
//   console.log(e.target.textcontent);
  
// }

r.addEventListener("click",(e)=>{
  // console.log(e);
  // console.log(e.value);
  // console.log(e.target);
  console.log(e.target.textcontent);
  
});