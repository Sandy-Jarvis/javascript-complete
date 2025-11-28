let a={
  name:"Gwen Stacy",
  id:1212,
  address:{
    city:"Titwala",
    place:"Ganapati Mandir"
  },
  ar:[12,22,33],
  f1(){
    console.log("I am a function1");
  },
  arrow:()=>{
    console.log("Arrow Function!");
  }
}
console.log(a);
// 1):-Object.freeze(a); //We can't able to add,update or delete the values !
a.name="Sandy";
console.log(a);
// 2):-console.log(Object.isFrozen(a));//returns true if the object is in freeze state else false!

// Object.seal(a);
// a.name="hi"; //we can update only not add or delete here!
// delete a.name;
// a.rollno="56";
// console.log(a);

console.log(Object.isSealed(a));//returns true if the object is in seal state else false!

console.log(Object.keys(a));

console.log(Object.values(a));

console.log(Object.entries(a));

// let x={};
// Object.assign(x,a);
// console.log(x);

console.log(Object.assign({},a));

