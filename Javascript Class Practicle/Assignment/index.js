
//******For Square of every element */
var a=[10,20,30];
let sq=function (){
  let res=a.map((v)=>{
  return v*v;
});
console.log(res);
};
sq();

//*********Filter Even or Odd */
let evenOdd=()=>{
  let ar=[11,22,33,44,55,66];
let res=ar.map((v)=>{
    return v%2==0; 
});
console.log(res);
};
evenOdd();


//**********Average of the array */
let avg=()=>{
  let aa=[9,8,7,6,5,4];
let res1=aa.reduce((a,b)=>{
  return a+b;
});
console.log(res1);
console.log(res1/aa.length);
};
avg();


//***********No is greater than 20 */
function f2(){
  let bb=[10,20,30,40,50];
let res2=bb.find((v)=>{
  return v>20;
})
console.log(res2);
};
f2();


//*********Any no is positive */
let positive=()=>{
  let cc=[-10,-89,45,-78];
let res4=cc.some((v)=>{
  console.log(v);
  return v>0;
});
console.log(res4);
};
positive();


//**************All the no are positive */
let func=()=>{
  let all=[100,-56,3,26];
let res5=all.every((v)=>{
  console.log(v);
    return v>0;
});
console.log(res5);
};
func();


//************Sort array in descending order */
function desc(){
  let ff=[1,2,4,90,100,45];
let res6=ff.sort((a,b)=>{
  console.log(a,b);
  return a-b;
})
console.log(res6);
console.log(res6.reverse());
};
desc();


//********** find Max and Min value */
let minmax=()=>{
  let gg=[10,2,111,40,5,61,7];
let res7=gg.sort((a,b)=>{
  return a-b;
});
console.log(res7);
let max=res7.pop();
console.log(max);
let min=res7.shift();
console.log(min);
};
minmax();


//****** Array element divisible by 5 */
function f11(){
  let hh=[10,22,33,44,77,90];
let res8=hh.filter((v)=>{
  return v%5==0;
});
console.log(res8);
};
f11();

//******** Conver celcius into Far */
let celToFar=()=>{
  let jj=[10,40,67];
let res9=jj.map((v)=>{
    return v*(9/5)+32;
})
console.log(res9);
};
celToFar();


//**********Extract the first letter only */
function extract(){
  let st="I Want To Extract First Letter Only!"
let res10=st.split(" ");
console.log(res10);
let first=res10.map((v)=>{
  return v[0];
});
console.log(first);
};
extract();



//***********First String longer than 5 Character only */
function long(){
  let ii=["hey","Gwen","stacy","hey","Beautiful","This Much Only"];
let res11=ii.find((v)=>{
  return v.length>5;
});
console.log(res11);
};
long();






