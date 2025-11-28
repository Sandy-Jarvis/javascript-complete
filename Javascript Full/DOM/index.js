
// //1):-document.getElementById
// let x=document.getElementById("head");
// console.log(x);
// x.style.background="red";
// x.innerText="Bye";

// //2):-Style property and inner text or inner html!
// let y=document.getElementById("para");
// console.log(y);
// y.innerHTML="Hello Its me";
// y.style.color="hotpink";

// //3):-document.getElementByClassName:-

// let z=document.getElementsByClassName("same");//here class name shouldn't prefixed with the.(dot!  
// console.log(z); //It will gave in the form of []HTML collection if same class name is present else empty html collection!.
// let value=Array.from(z);
// console.log(Array.isArray(value));

// console.log(Array.isArray(z)); //Its not an array!
// let ar=[...z]; //here using spread operator we are converting into the array
// console.log(ar);
// console.log(Array.isArray(ar)); //it will be true;

// let c=document.getElementsByClassName("hi");
// console.log(c);
// for(let y of c){
//   y.style.color="green";
// }
// for(let k of z){  //the html collection is iterable so we are using for of loop 1
//   console.log(k);
//   k.style.background="grey";
//   k.style.color="yellow";
//   k.style.padding="30px"
// }

// let ar=[...z]; //here using spread operator we are converting into the array
// console.log(ar);
// console.log(Array.isArray(ar)); //it will be true;

// let new1=Array.from(z); //Ask about it
// console.log(new1);

// //4):-document.getElementByTagName:-

// let a=document.getElementsByTagName("h2");
// console.log(a);
// a.innerText="Sandy boltee merekooo"

// let h5=document.getElementsByTagName("h5");
// console.log(h5);
// h5[1].innerText="I am changed" //Notice how its working!

//5):-document.querySelector:-
// let v=document.querySelector("#my");
// console.log(v);
// v.style.background="black";
// v.style.color="gray";

//6):-document.querySelectorAll():-
// let q=document.querySelectorAll(".bye");
// console.log(q);
// for(let r of q){
//   r.innerHTML="okkkkkk";
// }
// q.forEach((c)=>{
//   c.style.color="red";
// })
// q.style.color="red";
// console.log(Array.isArray(q)); //This is alos not an array!
// let newar=[...q];
// console.log(newar);

// let o=Array.from(q); //used to convert iterable objects into an array!
// console.log(o);


// for(let r of q){
//   console.log(r);
//   r.style.background="hotpink";
//   r.style.color="maroon"; 
// }
// //7):-document.createElement:-

// let v1=document.createElement("div"); //it'll not going to display on the web we have to append:-
// v1.innerText="its a new container!";
// v1.innerHTML="<h6>Its me along with the big heading!</h6><p>I am a paragraph!</p>";
// console.log(v1);
// let v=document.querySelector("#my");
// console.log(v);
// v.style.background="black";
// v.style.color="gray";
// // //8):-append & appendChild:-
// v.append(v1);//**compulsory we have to append into other tag to show in the web-page! */

// //**innerHTML and innerText */
// //innerHTML property is used to add the content or children to the html element! but in the case of innerText we can only add the content!












// let a=document.getElementById("head");
// console.log(a);
// a.style.color="blue";
// a.innerText="bye world";


// let a=document.getElementsByClassName("bye");
// console.log(a);
// a.style.background="grey";
// for(let v of a){
//   v.style.background="blue";
// }

// let arr=Array.from(a);
// console.log((arr));

// let z=[...a];
// console.log(z);

// let b=document.getElementsByTagName("h5");
// console.log(b);

let q=document.querySelector("#head");

// console.log(q);

// // q.style.color="pink";
// q.forEach((e)=> {
//   e.innerText="heyyyyyy"
// ;});


let c=document.createElement("div");

c.innerText="hello my self div";
c.style.background="pink";
console.log(c);
q.append(c);
