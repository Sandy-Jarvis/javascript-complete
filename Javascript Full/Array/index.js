let ar=[1,2,3,4,5,6];
console.log(ar);
console.log(ar[3]);
ar[3]=67;
console.log(ar);
console.log(ar[88]); //undefined if we try to access the array element which is not present!

ar[9]=676;  //it'll add the element at the given index and other in between element will be empty!
console.log(ar); 
delete ar[0];
console.log(ar);
console.log(ar[0]);
delete ar[9];
console.log(ar);
//****Note:-"if we delete array element it'll not modify the length of the array it will make empty not happen any changes into the array!" */

// Ways to create an array:- There are three ways to create an array:-
//1):-Literal Way:-
//Here we directly pass the values into the square brackets :-
let a=[10,20,30,40,0,55];
console.log(a);


//2):- By invoking the array Constructor:-
let b=new Array(11,22,33,44);
console.log(b);
// let c=new Array(1.78); //Invalid array length
let c=new Array("hi");//if there is a single value that's string then it'll consider as an element
// let c=new Array(78);//if there is single value that's no datatype then it will consider as length of array
console.log(c);

//3):-Array.of():-
let d=Array.of(1.90);
console.log(d); //in this case if pass one value any data type any decimal value it always consider as a element of the array!


//Array.isArray():-To check the given data is array or not:-
// let ab={
//   name:"sandy",
//   id:89
// }
let ab=[1,2,3,4];
console.log(Array.isArray(ab)); //returns true if it is else false !


//*Array Methods :-

//1):-push():-
let a1=["sad","happy"];
a1.push(1,2,"end"); //It'll add the element at the end of the array (multiple elements) 
console.log(a1);

//2):-unshift():-
let a2=[11,22,33];
a2.unshift(110,220);
console.log(a2);//It'll add the element at the start of the array (multiple elements) 


//3):-pop():-
a1.pop(); //It'll remove the last element from the array and returns the same array! 
console.log(a1);

//4):-shift():-
a2.shift(); //It'll remove the first element from an array and returns the same array!
console.log(a2);


//5):-slice():-
a3=[111,222,333,444];
let x1=a3.slice(1,2); //Here it'll not consider the last index value and used to extract the part from an array!
console.log(x1);


//6):-splice():-
a4=[66,77,888,999];
let x2=a4.splice(1,0,"hi","helo");
console.log(a4);//This method is used to add,update ,delete the array element , it will take three arguments first pone  is start index second is delete count and third is element to be added in the  array! "here added element will be added from the start index that we [provide!"

//7):-reverse():-
let a5=[9,8,7,6,5];
console.log(a5.reverse());

//8):-concat():-
let a6=[11111,22222];
let a7=[333,444444];
console.log(a7.concat(a6));

//9):-includes():-
let a8=["hi","hello","how"];
console.log(a8.includes("hello",0)); //Search element and from index

//10):-indexOf():-
let a9=[1,2,3,4,5,6,7,8];
let x3=a9.indexOf(4,5); //if the element is present it'll return index position else -1!
console.log(x3);


//11):-lastIndexOf():-
let a10=[11,22,33,44,55,66,77,44];
console.log(a10.lastIndexOf(44,5)); //very immportant observe carefully!

//12):-fill():-
let a11=["a","e","i","o","u"];
console.log(a11.fill("sandy",3,4));//"This will also not consider the end index value!"

//13):-flat():-
let a12=[11,22,[222,33333,[45,65],90],887];
console.log(a12.flat(Infinity));

//******Array Higher Order Function non-static methods:- */

//1):-find():-
let ar1=[90,80,70,60,50,40,300,2000];
let res=ar1.find((A)=>{
  return A>20;  // returns the element where predicate is true/ Satisfies the condition!
});
console.log(res);

//2):-findIndex():-
let res2=ar1.findIndex((v)=>{
  return v>200; //returns the index position of element where predicate is true/ Satisfies the condition!
})
console.log(res2);

//3):-filter():-
let ar2=[11,22,33,44];
let res3=ar2.filter((v)=>{
  return v>22; //returns the all elements which satisfies the condition1 
})
console.log(res3);

//4):-some():-
let res4=ar2.some((v)=>{
  return v%2==0; //returns true if any one element satisfies the condition!
})
console.log(res4);

//5):-every():-
let  res5=a2.every((v)=>{
  return v%2==0; //retuens false if any one element doesn't satisfies the condition!
})
console.log(res5);

//6):-map():-
let array1=[10,20,30,40,50];
let r1=array1.map((v)=>{
  return v*10;
})
console.log(r1);

//7):-forEach():-
let c1=[];
let array2=[10,20,30,40,50];
let r2=array2.forEach((v)=>{
 c1= v*5; //try again!
})
console.log(c1);


//8):-reduce():-
let h1=[9,8,7,6,5];
let r3=h1.reduce((a,b)=>{
  return a+b;
})
console.log(r3);

//9):-reduceRight():-
let r4=h1.reduceRight((m,n)=>{
  return n-m;
})
console.log(r4);

//10):-sort():-
let r5=[11,1,0,22,33,4,44,55,66,77,88];
let h4=r5.sort((a,b)=>{
  return a-b; //by defalut it will consider ASCII values so we havve to take compare function1
})
console.log(r5);

