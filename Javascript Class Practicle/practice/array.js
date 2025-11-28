
//***** push() */
console.log("PUSH: ")
let a=[1,2,3,4,5,6,7,8,9];
console.log(a.length);
let res=a.push(10,11,12,13,14);
console.log(res);
console.log(a);
console.log("***************************************************************************");


//****** unshift() */
console.log("UNSHIFT: ");
let b=[11,22,33,44];
const res1=b.unshift(1,2,3);
console.log(res1);
console.log(b);
console.log("***************************************************************************");

console.log("POP: ");
//***** pop() */
let c=[10,20,30,40];
console.log(c);
let res2=c.pop();
console.log(c);
console.log(res2);
console.log("***************************************************************************");

console.log("SHIFT: ");
//****** shift() */
let d=[111,222,333,444];
console.log(d);
let res3=d.shift();
console.log(d);
console.log(res3);
console.log("***************************************************************************");

//***** slice() */
console.log("SLICE: ");
let e=[10,20,30,40,50,60,70];
let res4=e.slice(2,6);
console.log(e);
console.log(res4);
console.log("***************************************************************************");

//***** splice() */
console.log("SPLICE: ");
let f=[90,80,70,60,50];
let res5=f.splice(0,4,1,2,3,4);
console.log(f);
console.log(res5);
console.log("***************************************************************************");

//****** reverse() */
console.log("REVERSE: ");
let g=[9,8,7,6,5];
console.log(g);
let res6=g.reverse();
console.log(res6);
console.log("***************************************************************************");

//****** indexOf() */
console.log("INDEXOF: ");
let h=[1,2,3,4,5,6,7,8,9];
let res7=h.indexOf(5,6);
console.log(res7);
let res8=h.indexOf(5,0);
console.log(res8); 
console.log("***************************************************************************");

//***** lastIndexOf() */
console.log("LASTINDEXOF()");
let i=[10,20,30,30,40,20,10,70,80,70];
let res9=i.lastIndexOf(30,4);
console.log(res9);
let res10=i.lastIndexOf(70,8);
console.log(res10);
console.log("***************************************************************************");

//***** include() */
console.log("INCLUDE: ");
let j=[1,2,3,4,5,6,7,8,9];
let res11=j.includes(7,0);
console.log(res11);
console.log("***************************************************************************");

//***** concat() */
console.log("CONCAT : ");
let k=[10,20,30,40,50];
let l=[11,22,33];
let res12=k.concat(l);
console.log(res12);
console.log("***************************************************************************");

//***** fill() */
console.log("FILL: ");
let m=[10,20,60,70];
let res13=m.fill(100,1,3);
console.log(res13);
console.log("***************************************************************************");

//***** flat() */
console.log("FLAT: ");
let n=[10,20,40,["hi",["hello"],55],100,[445]];
let res14=n.flat(Infinity);
console.log(res14);
console.log("***************************************************************************");
console.log("***************************************************************************");
console.log("***************************************************************************");


//***** Higher Order Function(Non-Static Methods) */

//***** find() */
console.log("FIND: ");
let aa=[100,200,300,400,500];
let r1=aa.find((a)=>{
  return a>200;
});
console.log(r1);
console.log("***************************************************************************");

//***** findIndex() */
console.log("FINDINDEX: ");
let bb=[90,80,70,60,50,40,80,60];
let r2=bb.findIndex(function(w){
  return w==50;
});
console.log(r2);
console.log("***************************************************************************");

//***** filter() */
console.log("FILTER: ");
let cc=[11,22,33,44,33,22,77];
let r3=cc.filter((t)=>{
  return t>35;
});
console.log(r3);
console.log("***************************************************************************");

//***** some() */
console.log("SOME: ");
let dd=[10,20,30,40,20,10,70];
let r4=dd.some((t)=>{
  return t>30;
});
console.log(r4);
console.log("***************************************************************************");

//***** every() */
console.log("EVERY: ");
let ee=[10,20,30,40,50];
let r5=ee.every((v)=>{
  return v>10;
});
console.log(r5);
console.log("***************************************************************************");

//***** map() */
console.log("MAP: ");
let ff=[10,30,20,40];
let r6=ff.map((v)=>{
  return v+100;
});
console.log(r6);
console.log("***************************************************************************");

//***** forEach() */
console.log("FOREACH: ");
let arr=[];
let arr2=[10,20,30,40,50];
let r7=arr2.forEach((v)=>{
  let cr= v+1000;
  arr.push(cr);
});
console.log(arr);

























