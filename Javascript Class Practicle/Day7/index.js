
//*****Slice */
// let arr=[10,20,30,40,50];
// console.log(arr.slice(1,3));  //returns the new array,Takes two argu=startindex and endindix

// let arr1=[30,40,50,60,75,89,989];
// console.log(arr1.slice(-2));
// console.log(arr1);


// arr2=[1,2,3,4,5,6,6,7,8,8,9];
// console.log(arr2.splice(2,4));
// console.log(arr2);
// arr2.splice(3,2,500,600,700);
// console.log(arr2);

//***** reverse() */
let x=[10,20,30,40,50,60,70,80,90];
console.log(x.reverse());

//***** concat() */
 let a=[1,2,3];
 let b=[7,8,9];
 let c=[4,5,6];
 console.log(c.concat(a,b,a));


 //***** includes() */

 const y=[100,300,200,400,200,400,700];
 console.log(y.includes(300,0));


 //***** indexOf() */

 let z=[100,90,80,70,60,50,90,70,20,10];
 console.log(z.indexOf(90,3));
 

  //***** fill() */
  let you=[10,20,"ccs","hi",89,56];
  console.log(you.fill("sandy",1,4));


  //***** lastIndexOf() */
  let hello=[34,45,56,67,78,34,78];
  console.log(hello.lastIndexOf(78));

  //***** flat() */

  let rocky=[1,2,3,4,[46,45,[67,87],50],66];
  let rrr=rocky.flat(Infinity);
  console.log(rrr);
  
  
  
  
 
 





