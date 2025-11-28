let obj1={
  name:"chakuli",
  id:123,
  Address:{
    location:"Titwala",
    pin:9090
  },
  salary:789,
}
console.log(obj1);

//********Shallow copy:-******** */

//1):- Copying Object reference:-
let copy1=obj1
console.log(copy1);
obj1.salary=8888;  //Primitive
obj1.Address.location="Ambivali"; //Non primitive
console.log(copy1);
 
//2):- Object.assign():-
let copy2=Object.assign({},obj1);
console.log(copy2);
obj1.Address.location="Kalyan";
obj1.salary=9999;  
console.log(copy2);

//3):- For in loop:-
let copy4={};
for(let v in obj1){
  copy4[v]=obj1[v];
  obj1.Address.location="Ambernath";
  obj1.salary=1100;
}
  obj1.Address.location="Ambernath";
  //obj1.salary=1100;              //*** I have a Question here */
  console.log(copy4);

  //4) Using Spread Operator:-
  let copy5={...obj1};
  obj1.Address.location="Thane";
  obj1.salary=2233;
  console.log(copy5);

  //Note**:- In shallow copy the usin only object reference in that type both primitive and non primitive data will get changed but in other 3 cases the primitive data is not going to change only non primitve data will change ( because non primitive data copying the address of the object reference !)

  //*****Deep copy***** */

  //1):- structuredClone():-
  let copy10=structuredClone(obj1);
  obj1.Address.location="Gaalan";
  obj1.salary=565656; //both primitive and non primitive data will not change in deep copy!
  console.log(obj1);
  console.log(copy10);
  
  //2):-JSON.stringify:-
  let copy11=JSON.stringify(obj1);
  obj1.Address.location="Salagare";
  obj1.salary=90;
  console.log(copy11);

  //3):-JSON.parse():-
  let copy12=JSON.parse(copy11);
  obj1.Address.location="Ambernath";
  obj1.salary=1100;
  console.log(copy12);
  
// //   let obj1={
// //   name:"chakuli",
// //   id:123,
// //   Address:{
// //     location:"Titwala",
// //     pin:9090
// //   },
// //   salary:789,
// // }
// // console.log(obj1);


// // //1) using object reference:-
// // let copy1=obj1;
// // obj1.name="mayuu";
// // obj1.Address.location="Ambivali";
// // console.log(copy1);

// // //2)Assing:-
// // let copy2=Object.assign({},obj1)
// // obj1.name="mauyri";
// // obj1.Address.location="Thane";
// // console.log(obj1);
// // console.log(copy2);


// for(let i=0;i<4;i++){
//   for( let j=0;j<4;j++){
//     console.log(" * ");
    
//   }
//   console.log("");
  
  
// }
let obj11={
  name:"abc"
}
let obj12={
  name:"abc"
}
console.log(obj11==obj12);
