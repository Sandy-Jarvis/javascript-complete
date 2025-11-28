//*** Types of creating an object!***** */

//1) literal way:-
let mayu={
  name:"Sonpapdi",
  id:25,
  address:{
    city:"Kalyan",
    phno:1232
  }
}
console.log(mayu);
mayu["clg"]="LDS";
mayu.gender="female";
console.log(mayu);
// delete mayu.gender;
delete mayu["clg"];

//2) class and constructor:-
class Mayuri{
  constructor(name,id,percentage){
    this.Name=name;
    this.Id=id;
    this.Percentage=percentage;
  }
}
let res=new Mayuri("Chakuli",3434,99.99);
console.log(res);
let res2=new Mayuri("Papdi",56,35);
console.log(res2);

//3):- Function constructor:-
function Sandy(name,rollno){
  this.Name=name;
  this.RollNo=rollno;
}
let v=new Sandy("sandesh",10);
console.log(v);

//4):-)Object Constructor:-

let ress=new Object();
ress.name="Myuuuuuuuuuuu";
console.log(ress);

//********** rest parameter */
function f1(a,b,...c){
  console.log(a,b);
  console.log(c);
}
f1(5,6,7,8,9,0,22);

//**************spred operator************ *//
let arr=[1,2,3,4,5,6];
let a3=[...arr];
console.log(a3); //creating a copy of arr array!
let aa={...arr}; // converting array into the object using spread operator!  // here it'll take array index as an key of an object!
console.log(aa);


let str="Javascript";
let a4=[...str];
console.log(a4);

const big={
  name:"golu",
  id:9090,
  job:"java Developer"
}
console.log(big);
let a6={...big};
//let a7=[...big];
//console.log(a7);  //non iterable!
console.log(a6);

//************Destructuring:-************ */
//1):-Array Destructuring:-

let jk=[10,30,40,50,303,60];
console.log(jk[4]); //by using  index position!
let[a,b,...c]=jk;
console.log(b);
console.log(c);

//2):-Object  Desturcturing:-

let boss={
  name1:"golu",
  id:9090,
  job:"java Developer"
}
let{job:kaam,...o}=boss;
console.log(o);
console.log(kaam); //changing the identifier name using " : "colon !

