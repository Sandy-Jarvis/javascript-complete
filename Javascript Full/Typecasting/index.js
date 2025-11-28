
//Implicit Typecasting:- Converting one datatype into another datatype internally!

console.log("30"+78); //number is converted into the string!
console.log("30"+"78");  //In both cases the concatination will happens
console.log(30*"6"); //Here string is converted into the number so it's performs multiplication
console.log(30*"string");//  "NaN" it'll show as a not a number!
console.log(30-"34"); //Here also string is converted into  the number!
console.log(90/"10");//Here also string is converted into  the number!
console.log(90%"10");//Here also string is converted into  the number!
console.log("sa"+"ndy"); //Concatination
console.log(false-true); //boolean converted into the no 
console.log(100-true);//boolean converted into the no 
console.log("1000"-true); //here string is converted into the number!

//Explicit Typecasting:- There are 3 types :-

//1):-parseInt():-convert string into the number!
let b="89787";
let a="Sandy";
console.log(parseInt(b)); //Convert string number into the number! 
console.log(parseInt(a)); //NaN 

//2):-parseFloat():-convert string into the decimal number!
let c="786.987"
let f="uko";
let g="89898";
console.log(parseFloat(c));
console.log(parseFloat(f));
console.log(parseFloat(g));

//3):-toString():-
const v=true;
const n="12442";
const m=9098;
console.log(v.toString());
console.log(n.toString());
console.log(m.toString());
