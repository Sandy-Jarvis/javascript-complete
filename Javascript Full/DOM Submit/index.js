let form=document.querySelector(".form-control");
console.log(form);

let userInput=document.getElementsByClassName("user");
console.log(user);
form.addEventListener("submit",(e)=>{
  e.preventDefault();
//   console.log("hello");
//   console.log(e);
  console.log(user.value);
})

form.onsubmit=(e)=>{
  e.preventDefault();
  let data=new FormData(form);
  console.log(data);
  let final=Object.fromEntries(data);
  console.log(final);
  //Till here we know to to fetch the data fromm the user input when he submit the form !(FormData Object and using fromEntries!)

  //Note:-But what happening here is when we select multiple options in checkbox it'll taking only last value and previous values are neglected so thats why we have to use "getAll" method:-
  let skilldata=data.getAll("skills");
  console.log(skilldata);
  final.skills=skilldata;
  console.log(final);
}

// //oninput:-
let percentage=document.getElementById("percentage");
let span=document.querySelector(".display");
console.log(percentage);
// percentage.oninput=(e)=>{
// //   console.log(e.target.value);
//   span.innerHTML=e.target.value;
// }

// // //onchange:-
percentage.onchange=(e)=>{
  console.log(e.target.value);
  span.innerHTML=e.target.value;
}

// // let form=document.querySelector(".form-control");
// // form.addEventListener("submit",(e)=>{
// //   e.preventDefault();
// //   let f=new FormData(form);
// //   // console.log(f);
// //   let n=Object.fromEntries(f);
// //   console.log(n);
  
  
  
// // })

// // form.addEventListener("submit",(e)=>{
// //   e.preventDefault();
// //   console.log(e);
// //   let m=new FormData(form);
// //   console.log(m);
// //   let n=Object.fromEntries(m);
// //   console.log(n);
// //   let data=m.getAll("skills");
// //   console.log(data); //try again and again for better understanding!
// //   n.skills=data;
// //   console.log(n);
  
// // })


// let form=document.querySelector(".form-control");
// form.addEventListener("submit",(e)=>{
//   e.preventDefault();
//   let f1= new FormData(form);
//   console.log(f1);
//   let f2=Object.fromEntries(f1);
//   console.log(f2);
//   let g=f1.getAll("skills");
//   f2.skills=g;
// })