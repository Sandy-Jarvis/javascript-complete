//1):-Rest Parameter:-
// Used to store the rest of the argument in single parameter! returns in the form of array ,it should present in the last in parameter list and prefixed with ...(...x)!

function f1(a,b,...d){ 
  console.log(a);
  console.log(b);
  console.log(d);
}
f1(10,20,30,40,90,34);

//2):-Spread operator:-
//spread operator is used to spread the values of data-types which is iterable! ,It should also prefixed with ...(3 dots), We cant spread object alone but we can make a copy using spread operator!

let emp={
  name:"sandyy",
  id:89,
  salary:78780
}
let x={...emp};
console.log(x);


let arr=[10,20,30,404,55];
let ob={...arr};//While converting the array into object at that time it take index position as key 
console.log(ob);

let str="GwenStacy";
let res={...str}; //Converting the string into the object!
console.log(res);
let copy=[...str];
console.log(copy); //Converting the string into  the array using spread!

//3):-Destructuring:-
//Its an pattern of giving an unique identifiers to the array element or object elements!
//There are two types:-1)-Array Destructuring.....2)-Object Destructuring

//1):-Array Destructuring:-
let a=[11,22,33,44,55,66];
const[l,m,n,...o]=a;
console.log(l);
console.log(m);
console.log(n);
console.log(o);

//2):-Object Destructuring:-

let std={
  name:"Butterf;y",
  id:78,
  salary:787878
}
console.log(std);
var{name:Naav,...any}=std; //Here I have changed the Key name as Naav using :(colon)
console.log(Naav);
console.log(any);


