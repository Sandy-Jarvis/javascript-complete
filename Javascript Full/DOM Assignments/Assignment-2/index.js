
//:-Change background of web page when submit button clicked

// let a=document.querySelector(".btn");
// console.log(a);
// let v=document.querySelector(".hi")
// a.addEventListener("click",(e)=>{
//   e.preventDefault();
//   v.style.background="green";
// })

// //:-Change the text color:-

// let a1=document.querySelector(".para");
// let b1=document.querySelector(".bob");
// console.log(a1,b1);
// b1.onclick=(e)=>{
//   a1.innerText="hello";
//   a1.style.color="red";
// }


// //:-hide the content when buttonn is clicked:-

// let a1=document.querySelector(".para");
// let b1=document.querySelector(".bob");
// console.log(a1,b1);
// b1.onclick=(e)=>{
//   // a1.innerText="hello";
//   a1.style.display="none";
// }

// //:-2 buttons while clicking them the font size should change:-
// let a1=document.querySelector(".para");
// let b1=document.querySelector(".bob");
// let c1=document.querySelector(".joy");
// console.log(a1,b1,c1);
// b1.onclick=(e)=>{
//   a1.style.fontSize="40px";

// }
// c1.addEventListener("click",(e)=>{
//   a1.style.fontSize="20px";
// })


// //:-change image size when remove the cursor and hover the cursor:-

// let i=document.querySelector(".img");
// console.log(i);
 
// i.addEventListener("mouseover",(e)=>{
//   i.style.height="550px";
//   i.style.width="750px";
// })
// i.addEventListener("mouseout",(e)=>{
//   i.style.height="300px";
//   i.style.width="300px";
// })


//:-count:-

let a=document.querySelector(".plus");
let b=document.querySelector(".minus");
let c=document.querySelector(".res");
console.log(a,b,c);
let count=0;

a.addEventListener("click",(e)=>{
  a.style.background="yellow";
  count+=1;
  console.log(count);
  
})
b.addEventListener("click",(e)=>{
  b.style.background="pink";
  count-=1;
  console.log(count);
  
})
c.addEventListener("click",(e)=>{
  c.style.background="gray";
  count=0;
  console.log(count);
  
})