// function f1(a){
//   return function f2(b){
//     return function f3(c){
//       return a+b+c;
//     }
//   }
// }
// console.log(f1(10)(20)(30));


// function pure(a,b){
//   console.log(a+b);
// }
// pure(33,44);
// pure(33,44);
// pure(33,44);


// let i=0;
// function impure(x,y,z){
//     i++;
//     return x+y+z+i;
// }
// console.log(impure(10,20,30));
// console.log(impure(10,20,30));
// console.log(impure(10,20,30));


// function mayu(a,b){
//   console.log(" I am Beautiful");
//   a();
//   console.log(b);
  
// }

// mayu(()=>{
//   console.log("HOF");
  
// },20);


//1)-:LExical SCoping:-
console.log("Lexical scoping/ scope chaining");

let a1=89;
function f1(){
  //a1=90;
  function f2(){
   // a1=900;
    console.log(a1);
  }f2();
}
f1();


//2)-: Variable Hoisting:-

//console.log(c); //let and const will go into temporal Dead zone and var will be Undefined!

let a=100;
const b=90;
var c=898;
console.log(a,b,c);

//3)-: Function Hoisting:-
f11();             // We can call the function before declaration! //"Happens only in the case of named Function"!
function f11(){
  console.log("function hoisting");
}

//********** JavaScript OutPut Methods */

// console.log("Javascript Output Methods");
// document.writeln("Givesthe 1 space after complete");
// document.write("Depricated and doesnt gives the space");
// alert("Its an pop-up message using alert method");
// console.log(confirm("If user clicks yes the I'LL be true otherwise False"));
// console.log(prompt("I'LL provide an input field if u write something then it will be ythe string other wise ill return Null"));

//*********Types Of the Function:- */

//function(){"Anonymous Function"}; //1):-// Anonymous Function!
//*********************************************************************** */

function named(){                   //2):-Named Function
  console.log("Named Function");
  }
  named();

  //******************************************************************** */
  let w1=function(){  //3):- Function with Expression //Assigning function as a value to Variable
                                                    //and calling using variable name
    console.log("Function With Expression");
  }
  w1();

  //******************************************************************* */
  //4)-: Arrow Function :- No need of curly braces if only one line of code is there!, no need of paranthesis if single paramater is there(),if one line of code is there then we are not supposed to pass return statement! 
  let arrow=()=>       
      console.log("Arrow Function");
  arrow();

  //5)-: Higher Order Function:-

  function hof(q,w){
    q();
    console.log("Outer Function");
  }
  hof(()=>{
    console.log("Passin function as an argument to another function HOF");
  },20)

  //6)-: Call BAck Function:-
  function t1(e,r){
    e();
    console.log("Call");
  }
  t1(t2,40);
  function t2(){
    console.log("Back");
  }
  //7)-: Nested Function:-
  //let er=34;
  function g1(){
    //let er=344;
    console.log("hi");
    function g2(){
      //let er=3454;
      console.log("Hello");
      function g3(){
        //let er=341213;
        //console.log(er);
        console.log("How are You?");
      }g3();
    }g2();
  }g1();

  //8)-: Immediate Invoke Function Expression:-IIEF
    var tt=900;
   (()=>{
    var t1=100;
    console.log(t1);
   })()
  // var tt=300;
   console.log(tt);
   
//9):- Currying Function:-

function d1(x){
  return function d2(y){
    return function d3(z){
      return x+y+z;
    }
  }
}
console.log(d1(3)(6)(9));

//10):- Pure Function:-
function f111(a,b){
  return a+b;
}
console.log(f111(5,7));
console.log(f111(5,7));

//11):- Impure Function:-
let r=0;
function f12(q,w){
    r++;
    return q+w+r;
}
console.log(f12(100,200));
console.log(f12(100,200));
console.log(f12(100,200));

//*********** Use Strict Or Strict Statements:- */
//1)-:
n=12;
m=34;
console.log(m,n);

//2)-:
function gg1(a,b,b){
  console.log(b,a,b);
}
gg1(20,30,40);

//3)-:
var let=100;
console.log(let);


//********8 Arguments */
function ar(){         //Not used in the form of Arrow function:-
  console.log(arguments);
  console.log(arguments[2]);
  console.log('Start');
  console.log(arguments[13]);  
}
ar(2,3,4,5,6,7,7,8);

//********** Window Objects:- */
console.log(window);
console.log(c);
console.log(this);
console.log(this.c);
console.log(this==window);
var bbb=200;
let ccc=300;
const ppp=9090;
console.log(this);
console.log(this.bbb);
console.log(this.ccc);// It Will Show Undefined.
console.log(this.ppp);// It Will Show Undefined.

function gf(){
  var c="java";
  console.log(c);
  console.log(this.c);
  console.log(window.c);
}
gf();

//************Array-: */
let ari=[1,34,"string",[12,34],{name:"sandy",id:123},"hii"];
console.log(ari);
console.log(typeof ari);

console.log(ari[2]);
ari[9]="new element";         // adding new element
console.log(ari);
console.log(ari[8]);          //Undefined
console.log(delete ari[5]);   //deleting element
console.log(ari[4].name);     //very very Important!
delete ari[4].id;             //very very Important!

ari[0]=34;                    //updating element
console.log(ari[0]);
console.log(ari);

//****** 3 Ways of  creating an array */
//1)-: Literal Way

let r1=[12,34,5,6,77,98,-90,-0.9876];
console.log(r1);

//2) -: By Invoking Array Constructor:-

let r2=new Array(10,20,44,55,67);
console.log(r2);

//3):- Array.of()Method:-

let r3=Array.of(67,45,23,27,13,767,433);
console.log(r3);

// 4)-: check weather the given data is array or not:-

console.log(Array.isArray(r3));  //true if it is else returns false!


//*************** Array Non- Static Methods:-*/

//1):-push()
 
let qt=[10,20,30,40];
console.log(qt);
let ar11=qt.push(70,80);
console.log(ar11);
console.log(qt);

//2):-unshift():-

let ar12=qt.unshift(11,22,33);
console.log(ar12);
console.log(qt);

//3):- pop():-
let ar13=qt.pop();
console.log(ar13);
console.log(qt);

//4):- shift():-
let ar14=qt.shift();
console.log(ar14);
console.log(qt);

//**Important Note:- */
let qt1=[];
let qt2=qt1.pop();
console.log(qt2);
let qt3=qt1.shift();//Both return Undefined if there is no element to remove & array will not be Modified
console.log(qt3);


//5):- slice():-
let oggy=[1,2,3,4,5,6,7,8,9];
let x1=oggy.slice(2,8); //It will  Not consider the last inndex !
let x2=oggy.slice(-6); // Only this will take negative Index
console.log(x1);
console.log(x2);

//6)splice():-
let oggy1=[10,20,30,40,50,60];
console.log(oggy1);
let x3=oggy1.splice(1,2,3,3,3,4,4);// start index > Delete count > elements to be added!
console.log(x3);
console.log(oggy1);

//7):- reverse():-
let oggy2=[10,20,30,40,50,60];
let x4=oggy2.reverse();
console.log(x4);


//8):- concat:-
let ogg1=[1,2,3,4];
let ogg2=[5,6,7];
let x5=ogg1.concat(ogg2);
console.log(x5);

//9)-: includes:-
let oggy3=[10,20,30,40,50,60]; // Two "Args" 1)search element 2)from Index
let x6=oggy3.includes(300,0); //returns False if its not present else true!
console.log(x6);

//10)-: indexOf():-
let oggy4=[10,20,30,40,50,60,30,40,900];
let x7=oggy4.indexOf(40,0); // Provides index Position of the first Occurance!
console.log(x7);

//11):- lastIndexOf():-
let oggy5=[10,20,30,40,50,60,30,40,900,30,40,50];
let x8=oggy5.lastIndexOf(40,9);// last occurance from provided index position!
console.log(x8);

//12):- fill():-
let oggy6=[10,20,30,40,50,60,30,40,900];
let x9=oggy6.fill("sandy",3,4);
console.log(x9);

//13):- flat():-
let oggy7=[10,20,[30,[40,50],60],30,40,900];
let x10=oggy7.flat(Infinity);
console.log(x10);

//*********** Array Higher Order Function */
//14):- find():-
let oggy8=[10,20,30,40,50,60,30,40,900];
let x11=oggy8.find((v)=>{
  return v>300;   //returns first element which satisfies the condition(where predicate returns true), Undefined if condition is not satisfied !
})
console.log(x11);

//15):- findIndex():-
let oggy9=[10,20,30,40,50,60,30,40,900];
let x12=oggy9.findIndex((v)=>{
  return v>55;
})
console.log(x12); //returns Index Position where predicate is true or satisfies the comndition! ,"If condition is not satisfied or predicate is false then retyurns -1"

//16):-filter:-
let oggy10=[10,20,30,40,50,60,30,40,900];
let x13=oggy10.filter((v)=>{
  return v>20; // used to filter the array for each and every element based on the condition!
})
console.log(x13);//If the Condition is satisfied then returns new array else empty "array[]"

//17)-: some():-
let oggy11=[10,20,30,40,50,60,30,40,900];
let x14=oggy11.some((v)=>{
  return v%10==0;       //returns true if any one of the array element satisfies the condition!
})
console.log(x14);

//18):- every():-
let oggy12=[10,20,30,40,50,60,30,40,900];
let x15=oggy12.every((v)=>{
  return v>1;   //returns true if all the elements satisfy the condition!
})
console.log(x15);

//19-: map():-
let oggy13=[10,20,30,40,50,60,30,40,900];
let x16=oggy13.map((v)=>{       //takes call back function as an argument.
  return v+v;       //Used to perform same operation on each and every element!
})
console.log(x16);

//20):-forEach():-
let arrrrr=[];
let oggy14=[10,20,30,40,50,60,30,40,900];
let x17=oggy14.forEach((v)=>{
  let c=v*10;      
  arrrrr.push(c);   //return type is void so we have to create new array and push the elements which      satisfies the condition
})
console.log(arrrrr);

//21):- reduce():-
let oggy15=[10,20,30,40,50,60,30,40,900]; //reduce take 2 arguments callback function and initial value.
let x18=oggy15.reduce((PV,CV)=>{    //CallBack Function takes 2 arguments PV And CV
  return PV+CV;   //reduce thw array and returns the single value.
},100);
console.log(x18);

//22):- reduceRight():-
let oggy16=[10,20,30,40,50,60,30,40,900];
let x19=oggy16.reduceRight((pv,cv)=>{
    return pv+cv;
},100);
console.log(x19);

//23):- sort():-
let oggy17=["a","Apple","Cat","coconut","kite","Yellow"];
let x20=oggy17.sort();  //By default In ascending order 
console.log(x20); //without Compare function it'll work for string only

let oggy18=[89,34,10000,2,56,10,87]; //Bydefault without Compare function it'll take ASCII Values!
let x21=oggy18.sort((a,b)=>{ 
  return b-a; 
});
console.log(x21);


//********** String Methods:- */
console.log("******String Methods*********");
//1):-slice():-
let big="GwenStacy";
let q1=big.slice(-5);
console.log(q1);

//2):-subString()-:
let big1="GwenStacy";
let q2=big1.substring(0,4);
console.log(q2);

//3):-includes-:
let big3="GwenStacy";
let q3=big3.includes("wen",0);
console.log(q3);

//4:-indexOf():-
let big4="GwenStacy";
let q4=big4.indexOf("St",0); //Pass the same string as written else gives -1
console.log(q4);

//5)-:lastIndexOf-:
let big5="GwenStacyGwen";
let q5=big5.lastIndexOf("Gw",12);  //here index position works as range(in both strin and array too)
console.log(q5);

//6):-charAt()-:
let big6="GwenStacy";
let q6=big6.charAt(4);     //Gives a character based on the index position.
console.log(q6);

//7):-charCoddAt():-
let big7="GwenStacyGwen";
let q7=big7.charCodeAt(4);
console.log(q7);

//8):-replace():-
let big8="GwenStacyGwen";
let q8=big8.replace("Gwen","MyGwen");
console.log(q8);

//9):-replaceAll():-
let big9="GwenStacyGwen";
let q9=big9.replaceAll("Gwen","MyGwen");
console.log(q9);

//10):-trim():-
let big10="       GwenStacyGwen       ";
let q10=big10.trim();
console.log(q10);
console.log(big10.trimStart());
console.log(big10.trimEnd());

//11):-toUpperCase():-
let big11="GwenStacyGwen";
let q11=big11.toUpperCase();
console.log(q11);

//12):-toLowerCase():-
let big12="GwenStacyGwen";
let q12=big12.toLowerCase();
console.log(q12);

//13):-concat():-
let big13="GwenStacyGwen";
let big14="My";
let q13=big14.concat(big13);
console.log(q13);

//14):-split():-    Convert the  string into the array! based on the splitter(seperator)!
let big15="Gwen Stacy Gwen";
let q15=big15.split(" ");
let q16=big15.split("");  //**Note:-It'll include empty space also in the converted array
console.log(q15);
console.log(q16);

//15):-join():- Convert the array into the string based on the splitter(seperator)!
let big16=[1,2,3,"helo",[12,23]];
let q17=big16.join(" ");
console.log(q17);

//**** Assignments on array-: */
console.log(" Array Home Work for Mock");

//1)-: Square each and every element from an array:-
let xx1=[1,2,3,4,5];
let zz1=xx1.map((v)=>{
  return v*v;
})
console.log(zz1);

//2):-filter even and odd from an array:-
let xx2=[1,2,3,4,5];
let zz2=xx2.filter((v)=>{
  return v%2==0;
})
console.log(zz2);

//3):-Find the average of an array:-
let xx3=[1,2,3,4,5];
let zz3=xx3.reduce((a,b)=>{
  return a+b;
})
console.log(zz3);
console.log(zz3/xx3.length);

//4):-find the first no which is greater than 20:-
let xx4=[10,11,24,222,90];
let zz4=xx4.find((v)=>{
  return v>20;
})
console.log(zz4);

//5):-check if any no is positive in an array:-
let xx5=[-90,23,44,-889,8,5,-67];
let zz5=xx5.filter((v)=>{
  return v<0;
})
console.log(zz5);

//6):-check if all the no's are positive in an array:-
let xx6=[-90,23,44,-889,8,5,-67];
let zz6=xx6.every((v)=>{
  return v>=0;
})
console.log(zz6);

//7):-sort the no array in descending array:-
let xx7=[9,4,100,34,1,787];
let zz7=xx7.sort((a,b)=>{
  return a-b;
});
console.log(zz7.reverse());

//8):- Convert the Celcius into the Farehanite:-
let xx8=[1,2,3,4];
let zz8=xx8.map((v)=>{
  return v*9/5+32;
})
console.log(zz8);

//9:-Extract first letter of each word from the string using map:-
let xx9="Hi I Am Spiderman";
let zz9=xx9.split(" ");
let result11=zz9.map((v)=>{
  return v[0];
})
console.log(zz9);
console.log(result11);

//10):-Find the Second Max and Second Min value from an array:-
let xx10=[10,20,30,4,40,50,100,60];
let zz10=xx10.sort((a,b)=>{
  return a-b;
})
console.log(zz10);
zz10.pop();
console.log(zz10.pop());
zz10.shift();
console.log(zz10.shift());

//11):-Find first String which is longer than 5 Character:-
let xx11="these are the Questions for final mock:";
let zz11=xx11.split(" ");
console.log(zz11);
let result12=zz11.find((v)=>{
  return v.length>5;
})
console.log(result12);

//12):- Check if any array element is  divisible by 5:-
let xx12=[10,12,66,33,45,60];
let zz12=xx12.filter((v)=>{
  return v%5==0;
})
console.log(zz12);

//******* Conditional Statements */
console.log(" Conditional Statements:-");
//1):-if-else(){}:- (else if ladder)

let val=100;
if(val>10){
  console.log("Its a valid Statement");
}else{
  console.log("its invalid");
}

let val1=300;
if(val1==100){
  console.log("1:- I am first");
}else if(val1<90){
  console.log("2:- I a, Second");
}else if(val1>299){
  console.log("3:- I am Third");
}else{
  console.log("I am last");
}

//2):- Switch Case:-  //case or defalut keywords manditorly we have to  use!
let no=1000;
switch(no){
  case 50:{
    console.log("50");
    break;
  }
  case 2000:{
    console.log("2000"); 
    break;     //have to pass break; keyword else it will print all the outputs where condition is true!
  }
  case 1000:{
    console.log("1000");
    break;
  }
  default :{
    console.log("Im default");
  }
}

//3) Ternary Operator:-
let cat=1000;
let dog=cat%2==0?"yes":"No";
console.log(dog);

//********* Looping Statements */
console.log(" **********Looping Statments**********");

//1):-while loop():-
let l1=1;
while(l1<=10){
  console.log(l1);
  l1++;
}

//2):- do while loop():-
let l2=1;
do{
  console.log(l2);
  l2++;
}while(l2<=10){

}

//3):-for loop():-
for(let l3=5;l3<=15;l3++){
  console.log(l3);
  
}

//**************Assignments on loops and meethods:- */
// Complete please!!!!!!!!
console.log(" ***Assignments on loops and meethods:- ***");

//1):-Reverse the array and string using all loops:-
let v1=[1,2,3,4,5,6];
for( let i=v1.length-1;i>=0;i--){
  console.log(v1[i]);
}


//*******Object******** */
console.log("**********Objects************");
let std={
  name:"Sandesh Kamble",
  RollNo:1234,
  Address:{
    location:"Ambivali",
    pin:421102
  },
  Bonus:90,
  f1(){
    console.log("Function without Function Keyword inside the object");
  },
  arr:()=>{
    console.log("Arrow Function");
  },
  mobno:9090909090
}
console.log(std);
std["f1"]();  //Calling the function!
std.f1();
std["arr"]();
std.arr();
console.log(std.Address.pin); //Accessing object value inside from the  object!
console.log(std["Address"]["location"]);
std.salary=9000;    //Adding the keys and values inside the object!
std["hiredate"]='13-April-1990';
delete std.RollNo;    //deleting the Keys and values from the object!
delete std["mobno"];
std.Address.pin=1010101;      //Updating the  values!
std["Address"]["location"]="Mumbai";
delete std["arr"];    //**Important: Deleting the function */
delete std.f1;

//******** Static Methods in the Objects */
console.log("*******Static Methods of Objects*******");

let chakuli={
  name:"Sandesh Kamble",
  RollNo:1234,
  Address:{
    location:"Ambivali",
    pin:421102
  },
  Bonus:90,
  f1(){
    console.log("Function without Function Keyword inside the object");
  },
  arr:()=>{
    console.log("Arrow Function");
  },
  mobno:9090909090
}
Object.freeze(chakuli); //If the object is in the freeze state we can't add,update or delete the values!
chakuli.eyes="Beautiful";
console.log(chakuli);
console.log(Object.isFrozen(chakuli)); //returns true if it is  in frreze state! 

Object.seal(chakuli);
chakuli.Address.pin=123321;
chakuli["Education"]="TYIT"; //we can update only can't add or delete the keys and values!
Object.isSealed(chakuli);//true in both the freeze and seal is active else false!

console.log(Object.keys(chakuli)); // returns the keys of an objects in the form of new array!
console.log(Object.values(chakuli));//returns the values of an object in the form of new array!
console.log(Object.entries(chakuli));//returns keys and values in the form of 2D array! 

let sanduu={
  Naam:"Source Object",
  year:9090
}
// console.log(Object.assign(chakuli,sanduu)); //copies all the keys and values from source object to target object and returns the target object!

//**** Assignment On Object:- */
console.log("Object Assignments");
// Complete Later Dont Skip or forgot:-

//******** How Many  Ways We can create an Object? */

//1):-Literal Way():-
let myobj={
  name:"Sonpapdi",
  Address:"Titwala"
}
console.log(myobj);

//2):-Using Class Constructor:-
class Employee{
  constructor(name,id,address){
    this.Name=name;
    this.ID=id;
    this.Address=address;
  }
}
let cal=new Employee("Sandesh",123,"Ambivali");
console.log(cal);
let cal1=new Employee("Chakuli",124,"Titwala");
console.log(cal1);
let cal2=new Employee("Golu",125,"Kalyan");
console.log(cal2);

//** */
class Users{
  bonus=200;
  static ab=11;
  constructor(name){
    this.Name=name;
  }
  demo(){
    console.log("Demo");
  }
  static f1(){
    console.log("Calling here");
  }
}
let user1=new Users("Sanduuuu");
console.log(user1);
console.log(Users.ab);
user1.bonus=2211;
console.log(user1.bonus);
user1.demo();

let user2=new Users("Chakuuuuu");
console.log(user2);
Users.f1();

// Scopes in javascript:-

//:-1) Global Scope:-
var b1=100; //Global Scope:- The Var variable and Function declared globally belongs to global scope!
console.log(b1);

//:-2) Script Scope:-
let b2=90; //Script Scope:- let and Const declared globally outside the function and block belongs to script scope!
const b3="Script Scope"
console.log(b2,b3);


//:-3):- Local Scope:-
function f33(m,n){
  var b1=9090;
  let a=90;
  const c=78;
  console.log(b1,a,c);
  console.log(m,n);
  
}
let gk=f33("sk","mr");

//:-4) Block Scope:- let and const inside block belongs to block scope and var inside block belongs to global scope! Block Scope get created when block scope is getting start to execute!
{
    let a=111;  //let and const belongs to the block scope 
    const b=222;
    var gotu=999;    //var belongs to the global  scope
    console.log(a,b,gotu);
}

//5):- closure-:
function outer(){
  let a="apple";
  function inner(){
    console.log(a);  //here closure get created for outer function when we access the outer function variable inside the inner function!
  }
  inner();
}
outer();

//******* Primitive datatypes:- */
console.log("**********Primitive Datatypes**********");

{
  //1)Number:-
  let a=100;
  console.log(a);
  console.log(typeof a);
  
  //2)String:-
  let b="Sandesh";
  console.log(b);
  console.log(typeof b);
  
  //3):-Bigint:-
  let c=100000000000000000000000000n;
  console.log(c);
  console.log(typeof c);
  
  //4):-boolean:-
  const d=0==false;
  console.log(d);
  console.log(typeof d);
  
  //5):-NaN:-  //Number is a datatype of NAN:-
  let e="hi";
  let f=90;
  let res=f-e;
  console.log(res);
  console.log(typeof res);
  
  //6):-Symbol:-  //Mostly used as a object key to avoid name Clashes! 
  let s1=Symbol("Sweetie");
  let s2=Symbol("Sweetie");
  console.log(s1==s2);
  console.log(typeof s1);  //Symbol datatype!
  
  //7):-Null:-
  let g=null;  //Explicitly pass null!
  console.log(g);
  console.log(typeof g);  // data type of null is Object!
  
  //8):-Undefined:-
  let h                   //It will show Undefined
  console.log(h);
  console.log(typeof h);  //data type is  Undefined

}

//************TypeCasting******* */
console.log("Type Casting******************");
//*****Two Types of type casting */
//1):- Implicit Typecasting:- The data is converted from one datatype to anither datatype internally is called Implicit typecasting:-
console.log("Implicit Typecasting:-");
console.log("10"+20);   //1020 ::-Number is converted into  the string!
console.log("10"-"20");   // -10::-String is converted into the number!
console.log("hi"*80);  //NAN::- 
console.log("hi"*"80"); //NAN::-
console.log(true-false); //1 ::- true=1; false=0; 1-0=1 !
console.log(NaN==NaN);//False::-Because it'll consider both calculation came from different opearation!
console.log(false===false); //double == checks the value(data) "Compare" both side! return true if satisfies the condition else false! and === check data(value) and datatype for both sides if both condition satisfies then returns true else false!

//2):- Explicit typecasting:-
console.log("Explicit Typecasting:-");

//1):-parseInt():-
let n1="1234.9090";  //It'll convert string number into num integer if u pass string the gives "NaN"
let dd1=parseInt(n1);
console.log(dd1);

//2):-parseFloat():-
let n2="1234.6786";  //Convert string into decimal No if u pass string the gives "NaN"!
let dd2=parseFloat(n2);
console.log(dd2);

//3):-toString():-Convert other datatype into string datatype!
let n3=true;  //convert any  data type into string except null,undefined!
let dd3=n3.toString();
console.log(dd3);

//************** Non-Primitive data Type:- */
//1):-Function():- Data Type of function is function:-