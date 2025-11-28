//1):-Shallow Copy:-******

//If we modify any values in original object(primitive and non-primitive) its values also get modified into the copied object!
 //**If we copy the object by using object reference and if we modify any values in original object both primitive and non-primitive values will gets modified in copied object but in the other 3 cases only  the non-primitive values get modified in copied object.!!!!! */

let emp={
  name:"Butterfly",
  id:101,
  salary:9000,
  location:"Mumbai",
  obj:{
    address:"Pragati Colony",
    job:"Tester"
  },
  ar:[1,2,3,4]
}
console.log(emp);

 //1)By copying object reference:-

 let a=emp;
 a.id=22;
 a.obj.job="Java Developer"
 console.log(a);
 
 //2)Using Object.assign() method:-

let b=Object.assign({},emp);
b.obj.address="Titwala";
b.salary=234555;
console.log(b);

//3):-Using Spread Operator:-

let c={...emp};
c.ar[2]=333;
c.location="maharashtra";
console.log(c);

//4):-Using for in loop:-

let copy={};
for(let k in emp){
  copy[k]=emp[k]; //*****try to understand how it'll work!
}
emp.name="Sandesh";
emp.ar[1]=2345566788;
console.log(copy);

//2)Deep copy:-

//If we modify any values in both primitive and non-primitive in the original object it'll not get modified into the  original object !

//we can create deep copy using 2 methods :-

//1):-structuredClone():-

let x=structuredClone(emp);
emp.name="sandesh";
emp.obj.address="kalyan";
console.log(x);

//2):-JSON.stringify and JSON.parse():-

let str=JSON.stringify(emp);
emp.name="sandy";
emp.obj.job="python";
console.log(str);


let str2=JSON.parse(str);
emp.name="sandy";
emp.obj.job="python";
console.log(str2);
