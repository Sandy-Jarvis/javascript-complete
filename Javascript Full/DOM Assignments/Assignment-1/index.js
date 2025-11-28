//:-Change text after 2 sec:-

// let a=document.getElementById("yes");
// console.log(a);
// setTimeout(()=>{
//   a.innerHTML="Hello World";
// },2000)

//:-using loop print text content:-

let b=document.getElementsByClassName("ok");
console.log(b);
for(let r of b){
  // console.log(r);
  console.log(r.textContent);
  
}

//:- 1):-create html element and add to the body with text content:-

let s=document.querySelector(".body");
let a1=document.createElement("div");
a1.innerText="div-container";
s.append(a1);

// 2):-s.innerHTML="<div>Heloo guys</h1>"; //2nd way easy way


//:-Dynamically adding li into ol:-

let l=document.querySelector(".order");
for(let i=0;i<5;i++){
  let v=innerHTML="<li></li>";
  v.innerText="heyyy";
  l.append(v);
}

//:-

let r=document.querySelectorAll(".para");
console.log(r);
for(let y of r){
  y.style.color="red";
}
// r.style.color="blue";Uncaught TypeError: Cannot set properties of undefined (setting 'color') ?

//:-using forEach:-
let z=r.forEach((k)=>{
  k.style.color="blue";
})

//:-use of style property:-
let res=document.querySelector(".smile");
console.log(res);
res.style.fontStyle="italic";
res.style.fontWeight="bold";


//:-SLideshow of the images:-

// let img=document.createElement("img");
// img.style.background="grey";
// img.style.height="200px";
// img.style.width="200px";
// s.append(img);

// let src=[1,2];
// let l1=0;
// setInterval(()=>{
//   img.src=src[l1];
//   l1++;
//   // if(l1>=src.length)l1=0;

// },2000);