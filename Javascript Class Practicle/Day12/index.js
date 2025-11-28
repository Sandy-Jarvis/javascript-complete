let info={
  name:"sandy",
  id:1234,
  address:{
    location:"ambivali",
    pin:1234
  },
  fn(){
    console.log("function");
  },
  arr:[23,45,64,34],
}
//Object.freeze(info);
info["salary"]=8989;
console.log(info);
//console.log(Object.isFrozen(info));
//Object.seal(info);  // Only update not able to add or delete!
delete info.id;
info.some=7878;
info.name="sandesh";
console.log(info);
console.log(Object.isSealed(info));

console.log(Object.keys(info));
console.log(Object.values(info));
console.log(Object.entries(info));

let info2={
  name:"Golu",
  age:56,
  map:{
    add:"kolkata",
    pin:9090
  }
}
console.log(info2);
//console.log(Object.assign(info,info2));

// How to iterate the value of an object using for in loop:-
for(let n in info2){
  console.log(n);
  console.log(info2.n);  //check for the key ::Undefined
  console.log(info2["n"]);  //check for the key ::Undefined
  console.log(info2[n]);    //It'll Iterate the array!
} 
 
let hi=Object.values(info2);
console.log(info2);

for(let m of hi){
  console.log(m);
}

// ****** Assignment:-
let copy={};
let me={
  name:"sandy",
  id:1234,
  address:{
    location:"ambivali",
    pin:1234
  },
  fn(){
    console.log("function");
  },
  arr:[23,45,64,34],
}
console.log(me);
console.log(copy);

for(let t in me){ 
   console.log(me[t]) ;
}

let res2=Object.values(me);
console.log(res2);
for(let l of res2){
 console.log(l);
}

let final=Object.assign(copy,res2);
console.log(final);