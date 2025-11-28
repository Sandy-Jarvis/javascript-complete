let form=document.querySelector(".form-c");
console.log(form);

form.onsubmit=(e)=>{
  console.log(e);
  e.preventDefault();
  let data=new FormData(form);
  console.log(data);
  let value=Object.fromEntries(data);
  console.log(value);
  let n=data.getAll("skills");
  console.log(n);
  value.skills=n;
  console.log(value);
}
let p=document.getElementById("percentage");
let s=document.querySelector(".ok");
console.log(s);
console.log(p);
p.onchange=((e)=>{
  console.log(e.target.value);
  s.innerHTML=e.target.value;
})

// p.addEventListener("input",(e)=>{
//   console.log(e.target.value);
//   s.innerHTML=e.target.value;
// })