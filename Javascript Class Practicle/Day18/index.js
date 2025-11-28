let r1=document.querySelector(".head");
console.log(r1);
let r2=r1.setAttribute("id","new"); 
let r3=r1.getAttribute("id","")
console.log(r3);
// let r4=r1.removeAttribute("id") //Here return type is void and take single argument that is name of that attribute if its present then it'll remove else not !
// console.log(r4);
let has=r1.hasAttribute("id2"); //false :- ("id")then true:
console.log(has);

//******Class List Property:- */

let res=document.querySelector("h1");
console.log(res);
res.classList.add("ok","bye","Tata");

// res.classList.remove("head","Tata")

console.log(res.classList.contains("bye"));  //true

res.classList.replace("Tata","jaaaa")  //Only one class name will br replaced!

let res2=res.classList.toggle("jaadu"); //it will add if class is not there
console.log(res2);

let res3=res.classList.toggle("jaaaa"); //It will remove and returns boolean value!
console.log(res3);


//*******Assignments****** */
// let y1=document.querySelector("#hello");
// console.log(y1);
// setTimeout(()=>{
//   y1.innerHTML="Hello World";
// },2000);

let y2=document.querySelector(".div-container");
console.log(y2);
// y2.append(".div-container",".head");

let w1=y2.innerHTML="hiiiii its me";
w1.style.color="blue";
// setTimeout((y2)=>{
//   y2.style.textStyle="bold"
//     y2.style.textStyle="italic"
// },1000);
