
  //****** find() */
let arr=[10,20,30,40,50,60,,70];
let x=arr.find(function(v,i,ar){
  return v>10;
});
console.log(x);


//****** findIndex() */
let me =[10,20,30,40,50,60,70,50,10,90];
let res=me.findIndex(function(v,i,ar){
  return v>70;
});
console.log(res);


//****** filter() */
let sandy=[90,70,80,60,50];
let res1=sandy.filter((v,i,ar)=>{
  return v>60;
});
console.log(res1);


//****** some() */
let hi=[33,44,55,66,77,88];
const res2=hi.some((v)=>{
  return v>55;
});
console.log(res2);
console.log(hi);


//****** every() */
let hello=[111,222,333,444,555,666,777];
let res3=hello.every((v)=>{
  return v>=100;
});
console.log(res3);
console.log(hello);


//****** map() */
let tata=["67","76","89","hi","98","43","34"];
let res4=tata.map((v,i,ar)=>{
  return parseInt(v);
});
res4.splice(3,1)
console.log(res4);


//****** forEach() */
var newarr=[];
let iam=[123,456,789,987,654,321];
let res5=iam.forEach((v)=>{
  let c=v+100;
  newarr.push(c);
});
console.log(iam);
console.log(newarr);









