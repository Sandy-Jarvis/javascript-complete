
//****1:-document.getElementByClassName */

let r=document.getElementsByClassName("shadow");
// let r=document.getElementsByClassName("shadow1");If no elements are matching then give empty HTML collection
console.log(r);

console.log(Array.isArray(r)); //Its not an array its a array  like a object which having index data structure!

for(let v of r){
  console.log(v); //it will iterable because its having index data structure!
  v.style.color="white";
  v.style.background="black";
  v.style.padding="20px"  
}

//we can convert Node list and HTML collection into the array  using Array.from() and spread!

let newar=[...r];  //1):-Spread Op
console.log(newar);

let q=Array.from(r);  //2):-Array.from()
console.log(q);

// *****:-2)-:document.getElementsByTagName();

let y=document.getElementsByTagName("span");
// span[0].innerText="span Contlext"; //Errorrrrrr
// console.log(y);

// y.innerText="Hello its me"; By this way also we can add the text
  
let qw=document.querySelectorAll(".uk");
console.log(qw);
console.log(typeof qw);
qw.forEach((v,i,n)=>{
  console.log(v);
});
[...qw].map((v)=>{
  console.log(v);
  v.style.color="hotpink";
  v.style.padding="10px";
})

let r1=document.querySelector=("#iop");
console.log(r1);
r1.innerHTML="<h1> I am SpaiderMAn </h1>"  //errrrrrrrrroorrororr
r1.innerText="Hello its u?";
 
let u=document.createElement("h1");
u.innerHTML="para";
console.log(u);


let div=document.createElement("div");
div.innerText="div container";
div.innerHTML="<h1>Hello World</h2><p>hiiii mee alooo</p>"
console.log(div);
 let p=document.createElement("p");
 p.innerHTML=("paaararra");
//  console.log(p);
//  let s3=document.querySelector(".s3");
// //  s3.appendChild(div);
// //  console.log(div);
// s3.append(div,p);
// console.log(div);



 