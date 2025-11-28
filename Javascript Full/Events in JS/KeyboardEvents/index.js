let a=document.querySelector(".me");
console.log(a);

//1):-keyup
// a.onkeyup=function(e){
//   console.log("hi");
//   console.log(e);
//   console.log(e.target.value);
//   console.log(a.value);
// }

//2):-keydown:-
// a.addEventListener("keydown",(e)=>{
//   console.log(e);
// })


//3):-keypress:-
// a.addEventListener('keypress',(e)=>{
//   console.log(e);
  
// })

//*****SUBMIT EVENTS:- */
let form=document.querySelector(".form-control");
console.log(form);


let userInput=document.getElementById(".username");

form.addEventListener("submit",(e)=>{
  console.log(e);
  e.preventDefault();
  console.log("hello");
  console.log(userInput.value);
  
  
})