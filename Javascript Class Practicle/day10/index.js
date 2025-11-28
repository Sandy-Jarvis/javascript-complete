// // let i=1;
// // while(i<11){
// //   console.log(i);
// //   i++;
// // }


// // let j=1;
// // do{
// //   console.log("hello"); 
// //   j++;
// // }while(j<3){
// // }

// // for(k=1;k<11;k++){
// //   console.log(k);
// // }

// // let ar=[10,30,20,40];
// // let i=ar.length-1;
// // do{
// //   console.log(ar[i]);
// //   i--;
// // }
// // while(i<ar.length);

// let arr=[10,20,30,40,50];
// for (let j=arr.length-1;j>=0;j--){
//   console.log(arr[j]); 
// }

// console.log("************************************************");

// let arry=[1,2,3,4,5];
// let k=arry.length-1;
// while(k>=0){
//   console.log(arry[k]);
//   k--;
// }

// console.log("************************************************");

// let a1=[9,8,7,6,5,4,3,2];
// let i=a1.length-1;
// do{
//     console.log(a1[i]);
//     i--;
// }while(i>=0);

// console.log("************************************************");

// let str="hi world";
// let res="";
// for(let i=str.length-1;i>=0;i--){
//     res++;
//     console.log(str[i]);
// }

// console.log("************************************************");

// //******2) */

// let str1="madam";
// let res1="";
// for(let i=str1.length-1;i>=0;i--){
//   res1+=res1[i];
// }
// if(str1===res1){
//     console.log(str1,"yes its pallindrome");
// }else{
//   console.log(str1,"Not Pallindrome");
// }


// console.log("************************************************");
// //3)***********
// let a="my name is sandesh";
// let vow="aeiouAEIOU";
// let r=0;

// for (let i=0;i<a.length;i++){
//   if(vow.includes(a[i])){
//     r++;
//   }
// }
// console.log(r);

// console.log("************************************************");

// let sentence="I LOVE JAVASCRIPT";
// let rs=sentence.split(" ");
// console.log(rs);
// let long="";

// for(let l=0;l<rs.length;l++){
//   if (rs[l].length>long.length){
//     long=rs[l]
//   }
// }
// console.log(long);
// console.log("************************************************");


// let ak=[1,2,3,4,5];
// for(i=0;i=rr.length-1;i--){
//   console.log(ak[i]);
  
// }
// function* f1(){
//   let a=100;
//   yield a;
//   console.log("middle");
//   yield "byee";
//   const c="SRK";
//   console.log(c);
//   yield c;
//   console.log("end");
//   return "completed";
// }
// let r=f1();
// console.log(r.next());
// console.log(r.next());
// console.log(r.next());
// console.log(r.next());

// let obj={
//   name:"Chakuli the QT",
//   id:1234,
//   f1(){
//     console.log("Normal Function");
//     console.log(this);
    
//   },
//   arr:()=>{
//     console.log("arrow");
//     console.log(this);
    
//   }
// }
// console.log(obj);
// function f1(){
//   console.log(this);
// }
// f1.call(obj,100);
// f1.apply(obj,[12,334,55])

// let y=f1.bind(obj)
// y();
// function f1(){
//   console.log("start");
//   console.log(arguments[2]);
  
// }
// f1(10,20,30,40,40,345);

// let r=[123,456,78]; //*** Try again*** */
// let res=r.map(n=>{
//   return toString(n).split(" ").reduce((a,b)=>{
//     return a+b;
//   },0);
// })
// let res1=parseInt(res);
//   console.log(res1);

// let a=setInterval(()=>{
//   console.log("hello");
// },2000);
// console.log(a);

// setTimeout(()=>{
//   clearInterval(a);
// },10000);