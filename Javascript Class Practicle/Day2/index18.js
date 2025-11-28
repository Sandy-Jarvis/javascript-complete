// // var c=50;
// // function f1(){
// //   var c=30;
// //   function f2(){
// //    var c=44
// //     console.log(c);
// //   }
// //   f2();
// // }
// // f1();           // Lexical Scoping or scope chaining....

// // // ***************************** 
// // // Example of Variable hoisting:-

// // console.log(a);    //undefined

// // console.log(b);    // uncaught refrence error
// // console.log(d);    

// // var a=10;
// // let b=33;
// // const d=55;
// // // Function hoisting:-

// // function z1(){
// //   let v1=56;
// //   return ;
// // }

// // let y=z1();
// // console.log(y);


// // //******Arrow Hoisting */
//        //It will thorw an error as q is not a function "Because Arrow is not a named function!"
// // var q=()=>{
// //   console.log("arrow function");
// // }
// // q();
// // let bb=Symbol("rahul");
// // let cc=Symbol(99);
// // console.log(bb==cc);


// // TO STRING'
// // let a = 5 ;
// // let c=a.toString();
// // console.log(c);

// // // TERNARY 
// // let n = 5;
// // let result= n % 2 == 0 ? "even":"odd";
// // console.log(result);
// console.log(("this is the final ${10+20} result of maths")); //without Backticks
// console.log((`this is the final ${10+20} result of maths`)); //with backticks

// //backticks

// console.log("hi ${30*5}");
// console.log(`hi my name is mayu ${30*5} ${5*2}`);

// let ar=[1,2,3,4,5,6];
// let res=ar.filter((v)=>{
//        return v%2==0;
// });
// console.log(res);

// let ar=["hi","sandesh","Australia"];
// let res=ar.filter((v)=>{
//        return v.length>8;
// })
// console.log(res);

// let str="i want to be famous";
// let res=str.split(" ");
// let final=res.map((v)=>{
//        return v[0];
// })
// console.log(final);
// let ar=[10,20,30];
// let n=ar.length-1;
// while(n>=0){
//   console.log(ar[n]);
//   n--;
// };

// let str="Sandy";
// let k=str.length-1;
// do{
//   console.log(str[k]);
//   k--;
// }while(k>=0);

// let val="madam";
// let res1=val.split("")
// console.log(res1)
// let res2=res1.reverse()
// console.log(res2)
// if(val==res2){
//   console.log("it is");
// }else{
//   console.log("no");
  
// }

// let str="Sandesh Kamble";
// let me="AEIOUaeiou";
// let r=0;
// for(let i=0;i<str.length;i++){
//   if(me.includes(str[i])){
//     r++;
//   }
// }
// console.log(r);

// let str="i love my India";
// let res=str.split(" ");
// console.log(res);
// console.log(res.length);

// let final=res.filter((v)=>{
//   return v.length>res;
// })
// console.log(final);

// let str="i love my India";
// let res=str.split(" ");
// console.log(res);
// let n="";
// for(let i=0;i<res.length;i++){
//   if(res[i].length>n.length){
//     console.log(n=res[i]);
//   }
// }
// console.log(n);

// let a="hello";
// for(let i in a){
//   console.log(++i);

// let num=5;
// let f=1;
// for(let i=1;i<=num;i++){
//   f=f*i;
// }
// console.log(f);

// let n=10;
// let ar=[0,1];
// for(let i=2;i<n;i++){
//   ar[i]=ar[i-1]+ar[i-2];
// }
// console.log(ar);

// let n=[1,2,3,4,5,6,7];
// let prime=n.filter(v=>{
//   if(v<2) return false;
//   for(let i=2;i<v;i++){
//     if(v%i===0)return false;
//   }
//   return true;
// })
// console.log(prime);

let a=[11,11,22,33,33,45];
let a2=[];
for(let i=0;i<a.length;i++){
  if(!a2.includes(a[i])){
    a2.push(a[i]);
  }
  for(let k  of a2){
    console.log(k);
    
  }
}
