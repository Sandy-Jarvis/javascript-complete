let obj={
  id:1234,
  name:"sandy",
  arr1:[1,2,3,4],
  bool:true,
  null:{},
  bigInt:1000000000000000000000000000000000000,
  another:{
    user:"me only",
    location:"u only",
    kt:[34,23]
  },
  f2(){
    console.log("hey beautiful");
  },
  arr:()=>{
    console.log("arrow");
    
  }
}
obj.f2();
console.log(obj.another.kt[1]);
console.log(obj["another"]["kt"][0]);

console.log(obj.bigInt);
console.log(obj["bigInt"]);
console.log(obj["null"]);
console.log(obj["another"]["location"]);
obj["arr"]();
console.log(obj.id);
obj.f2();
console.log(obj.arr[3]);
delete obj.bool;
console.log(obj);
obj.me="im new";
obj["percentage"]=100;
console.log(obj.nana);
obj["arr"]();
console.log(obj["arr1"][2]);
console.log(obj.another.location);
console.log(obj.another.user);
console.log(obj["another"]["user"]);
obj["f2"]();
console.log(obj["arr1"][3]);
delete obj["arr"];
console.log(obj);


for (let i in obj)
console.log(i);

//  for (let j of obj)console.log(j);     //Not Iterable







// 1) :-// let a1=[1,3,5,7,9,9,11,3];
// 2):-
let a1="saandyy";
let hi=[];
for(let i=0;i<a1.length;i++){
  if(!hi.includes(a1[i])){
      hi.push(a1[i]);
  }
}
// console.log(hi);

// for (let k of hi)
//   {
//   console.log(k);
// }
console.log(hi.join(""));








//3):-
let str="GwenStacy";
for(let l in str)console.log(++l);

// let str="GwenStacy";
// let count=0;
// for(let l in str){
//   count++
// }console.log(count);



let a="hello its me";
let b=a.split(" ");
console.log(b);
for(let i=0;i<b.length;i++)
{
  console.log(b[i]); //it will print all the seperated values like hello -> its -> me
  console.log(b[i][0]); // it'll provide the first(0 index) alphabets prresent in the string
  b[i]=b[i][0].toUpperCase()+b[i].slice(1);
}
let capital=b.join(" ");
console.log(capital);

