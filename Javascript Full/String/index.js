//*********String Methods:- */
//1):-slice():-
let s="GwenStacyS";
console.log(s.slice(2,5));

//2):-subString():-
console.log(s.substring(4));

//3):-includes():-
console.log(s.includes("en",0));

//4):-indexOf():-
console.log(s.indexOf("n",1));

//5):-lastInndexOf():-
console.log(s.lastIndexOf("S",8));

//6):-charAt():-
console.log(s.charAt(5));

//7):-charCoddAt():-
console.log(s.charCodeAt(5));

//8):-replace():-
let a=" I am addressing something means it doesn't meant I want to argue with you!"
// console.log(a.replace("I","i"));

//9):-replaceAll():-
console.log(a.replaceAll("I","i"));

//10):-trim():-
let b="           Heloo how r u?           ";
console.log(b.trim());
// console.log(b.trimEnd());
// console.log(b.trimStart());

//11):-toUpperCase():-
console.log(a.toUpperCase());

//12):-toLowercase():-
console.log(a.toLowerCase());

//13):-split():-
let r=s.split("");
console.log(r);

//14):-join():-
console.log(r.join(""));
