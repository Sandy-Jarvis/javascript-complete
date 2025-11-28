//1):-setAttribute():-

let x=document.querySelector("h1");
console.log(x);
x.setAttribute("class","Me");
x.setAttribute("class","you");//now here it'll updated!
x.setAttribute("placeholder","null");

//2)getAttribute():-

console.log(x.getAttribute("class"));

//3):-removeAttribute():-

x.removeAttribute("class");
console.log(x);

//4):-hasAttribuite():-

console.log(x.hasAttribute("placeholder"));

console.log(x.hasAttribute("class"));
