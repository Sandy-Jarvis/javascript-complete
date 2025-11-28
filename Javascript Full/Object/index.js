// let a={
//   name:"Gwen Stacy",
//   id:1212,
//   address:{
//     city:"Titwala",
//     place:"Ganapati Mandir"
//   },
//   ar:[12,22,33],
//   f1(){
//     console.log("I am a function1");
//   },
//   arrow:()=>{
//     console.log("Arrow Function!");
//   }
// }
// console.log(a);

// console.log(a.name); //to Access!
// console.log(a["name"]);

//  a.address.place="Near me";//to Update!
//  a["address"]["city"]="Ambivali";

//  a.new="hello"; //to Add
//  console.log(a);
//  a["value"]=45454;

// delete a.new;  
// delete a["new"]; //to Delete
// console.log(a);

// // a.arrow();  //calling the Function!
// a["arrow"]();
// // a.f1();
// a["f1"]();

// //** */
// a["ar"][0]=211;
// a.ar[3]=349;
// delete a.ar[2];

// //***************************************************** */

// console.log(emp);
// // emp.id=31;
// emp["id"]=32;
// delete emp.id;
// delete emp["id"];

// console.log(emp.function());

// console.log(emp.obj1.pin);
// console.log(emp["obj1"]["loc"]);
// emp.skills[1]="java";
// Object.freeze(emp);
// emp.name="mazha sweetu";
// console.log(emp);

// console.log(Object.isFrozen(emp));

// Object.seal(emp);
// emp.name="mazha sweetu";

// console.log(Object.isSealed(emp));

// console.log(Object.keys(emp));
// console.log(Object.values(emp));
// console.log(Object.entries(emp));

// // let a={};
// // Object.assign(a,emp);
// // console.log(a);

// console.log(Object.assign({},emp));

// for (let g in emp){
//   // console.log(g); //we can iterate key using for in loop
//   // console.log(emp["g"]);
//   // console.log(emp[g]);
// }
// //


// //********************** */

// //BY USING CLASS CONSTRUCTOR
// class stud {
//   constructor(name,id){
//     this.NAME=name;
//     this.ID=id;
//   }
// }
// let c = new stud("sandy",21);
// console.log(c);

// //BY USING CONSTRUCTOR FUNCTION
// function f1(name,id){
//   this.NAME=name;
//   this.ID=id;

// }
// let b = new  f1("mayu",31);
// console.log(b);

// //OBJECT CONSTRUCTOR
// let q = new Object();
// q.name="bestu";
// console.log(q);

// //rest parameter
// function f2(a,b,...c){
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }

// f2(10,20,30,40,50);//it returns array
//spread operator

// let emp={
//   name:"abc",
//   salary:3400,
//   function:()=>{
//     console.log("hi");
//   },
//   skills:["python","sql"],
//   obj1:{
//     loc:"titwala",
//     pin:51223,
//   }
// }

// console.log(emp);
// // let ar = [...emp];
// let ob={...emp};
// console.log(ob);

// // let arr=[10,20,30,40,50];
// // let str="javascript";
//  let y = [...str];
//  console.log(y);

//  let h={...str};
//  console.log(h);
 
 //DESTRUCTURING
// let emp={
//   name:"abc",
//   salary:3400,
//   function:()=>{
//     console.log("hi");
//   },
//   skills:["python","sql"],
//   obj1:{
//     loc:"titwala",
//     pin:51223,
//   }
// }
// let arr=[10,20,30,40,50];
// let str="javascript";

// let[a,b,...c]=arr;
// console.log(a,b,c);

// var{name,salary,...e}=emp;
// console.log(salary);
// console.log(e);

//SYNCHRONOUS AND ASYNCHRONOUS
//setTimeout()
// setTimeout(()=>{
//   document.writeln("JAVASCRIPT");
// },3000)


// setInterval((q,w)=>{
//   document.writeln("MAZI SONPAPDI")
//   console.log(q,w);
  
// },2000,67,89)

//DOM

// let a = document.getElementById("my");
// console.log(a);
// a.style.color="red";
// a.innerText="bestu";

// let b = document.getElementsByClassName("ok");
// console.log(b);

// for (let r in b){
//   console.log(b);
  
// }
// let t =[...b];
// console.log(t);
// let u = document.getElementsByTagName("h1");
// console.log(u);

// u.style.background="grey"/

// let r = document.querySelectorAll(".ok");
// console.log(r);


// //Array.from
// let a = [...r];
// console.log(a);


let t = document.querySelector("#my");
console.log(t);

t.classList.add("class","title")
t.classList.remove("title")
console.log(t.classList.contains("title"));
t.classList.toggle("yeeeeee");

t.classList.replace("class","rrr");






// t.setAttribute("class","a");
// t.setAttribute("class","ting")

// console.log(t.getAttribute("class"));

// // t.removeAttribute("class");
// console.log(t.hasAttribute("class"));




 







