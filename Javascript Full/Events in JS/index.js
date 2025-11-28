let a=document.querySelector(".head");
console.log(a);

//1):-event handler property:-

// a.onclick=(e)=>{
//   console.log(e); //event Objects!
//   console.log("hey buddy"); //this will print after clicking the html element!
//   // alert("hey guys");
//   a.style.color="yellow";
// }

//2):-addEventListener():-

// a.addEventListener("click",(e)=>{
//   a.style.color="yellow";
//   console.log("Im good");
// })

//HTML event attribute:-
function handleClick(event){
  console.log(event);
  a.style.background="green";
  
}
