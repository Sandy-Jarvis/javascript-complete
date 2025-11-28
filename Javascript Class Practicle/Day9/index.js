
console.log("1)reduce():-");
let aa=[11,22,33,44,55];
let res=aa.reduce((a,b)=>{
  console.log(a,b);
  return a+b;
},100);
console.log(res);
console.log("*********************************************");

console.log("2)reduceRight():-");
let res2=aa.reduceRight((a,b)=>{
  console.log(a,b);
  return a+b;
},100);
console.log(res2);
console.log("*********************************************");


console.log("3)sort():-");
let bb=["mango","banana","Apple","Water melon","chikuu"];
console.log(bb.sort());
let cc=[100,3,6,900,1000,34,1,5];
console.log(cc.sort());
let res3=cc.sort((x,y)=>{
  return x-y;
});
console.log(res3);
console.log("*********************************************");
//****************************************************************** */

console.log("*****String Methodssssss.............");

let a1="Sonpapadi"
//      012345678
console.log("1)-:splice()");
console.log(a1.slice(3));
console.log("*********************************************");

console.log("1)-:subString()");
console.log(a1.substring(0,7));
console.log("*********************************************");

console.log("1)-:includes()");
console.log(a1.includes("papadi",0));
console.log("*********************************************");

console.log("1)-:indexOf()");
console.log(a1.indexOf("papa",0));
console.log("*********************************************");

console.log("1)-:lastIndexOf()");
console.log(a1.lastIndexOf("pa",3));
console.log(a1.lastIndexOf("pa"));
console.log(a1.lastIndexOf("pa",8));
console.log("*********************************************");

console.log("1)-:charAt()");
console.log(a1.charAt(8));
console.log("*********************************************");

console.log("1)-:charAt()");
console.log(a1.charCodeAt(8));
console.log("*********************************************");

let a2="      I AM a GOOD boy YeS I AM!       "  /**************************** */
console.log(a2);

console.log("1)-:replace()");
console.log(a2.replace("AM","am"));
console.log("*********************************************");

console.log("1)-:replaceAll()");
console.log(a2.replaceAll("AM","am"));
console.log("*********************************************");

console.log("1)-:trim() , trimStart(), trimEnd()");
console.log(a2.trim());
console.log(a2.trimEnd());
console.log(a2.trimStart());
console.log("*********************************************");

console.log("1)-:toUppercase()");
console.log(a2.toUpperCase());
console.log("*********************************************");

console.log("1)-:toUppercase()");
console.log(a2.toLowerCase());
console.log("*********************************************");

let x="hello";
let y="it's";
let z="me"
console.log("1)-:toUppercase()");
console.log(x.concat(y,z));
console.log("*********************************************");