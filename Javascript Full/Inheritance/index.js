
// :-Class inheritance:-
// class Person{
//   constructor(name){
//     this.Name=name;
//   }
//   a=100;
//   demo(){
//     console.log("demo Function");
//     console.log(this.Name);
//   }
//   static f1(){
//     console.log(this);
//   }
// }
// let p1=new Person("Chakuli");
// console.log(p1);
// p1.demo()
// Person.f1();

// class Employee extends Person{
//   constructor(id,salary,name){
//     super(name);
//     this.ID=id;
//     this.Salary=salary;
//   }
// }
// let e1=new Employee(120,67000,"sanduu");
// console.log(e1);
// console.log(e1.a);


// //Prototype inheritance:-
let parent={
  name:"Goduli",           //Here It is
  demo(){
    console.log("demo method");
    console.log(this.name);
  },
  skills:["js","CSS"]
};

let child={
  name:"Sweetie" //first it'll check in its own object if there it's not present takes from the parent!!!!!
}

child.__proto__=parent;
console.log(child);
child.demo();
// console.log(child.name);


// let s= new Set([1,2,3,78]);
// s.add("sandy");
// s.add(78); //it will add only unique values not duplicate!
// s.add(true);
// console.log(s);
// console.log(s.delete(true)); //it will delete and returns true!
// console.log(s.delete("empty")); //false not the value is present!

// console.log(s.has(true));

// console.log(s.size);

// s.forEach((v,i,ar)=>{
//   console.log(v);
//   console.log(i);
//   console.log(ar);
  
// })

// s.clear();


//:-1st way:-

// let m=new Map();
// m.set([1,2,3,4],"array").set(false,0).set("string","hiiguys").set(()=>{},"i'am function").set(obj={name:"sandy"},"object");
// m.set(true,0)
// m.set([1,2,3,4],"array") //it will be added because both array having different reference address!
// console.log(m);


//:-2nd way:-

// let m=new Map([[()=>{},"object"],[0,12345]]);
// console.log(m);
// console.log(m.get(0));
// console.log(m.get(56)); //Undefined

// console.log(m.has(0));
// console.log(m.has(()=>{})); //having differnet reference address so false!

// console.log(m.delete(()=>{})); //same like above case
// console.log(m.delete(0));
// m.clear()
// console.log(m.size);


// m.forEach((v,k,ob)=>{
//   console.log(v);
//   console.log(k);
//   console.log(ob);
  
// })

// function* f1(){
//   console.log("start");
//   let a=100;
//   console.log(a);
//   yield a;
//   const c="My Chakuli";
//   console.log("middle");
//   yield c;
//   console.log("end");
//   return "khallas";
// }
// let v=f1();
// console.log(v.next());
// console.log(v.next());
// console.log(v.next());

// console.log(v);


// let a=[10,20,10,20];
// console.log(a);


// let s=new Set(["js",1234,true,()=>{},[11,22]]);
// console.log(s.has(()=>{}));

// s.add("sandy");
// s.add(1234)
// s.add(true);
// s.add("sandy")
// console.log(s.delete(false));
// console.log(s.size);
// // console.log(s.clear());
// s.forEach((v,i,arr)=>{
//   // console.log(v);
//   // console.log(i);
//   console.log(arr);
// })


// console.log(s);



// let m=new Map([[true,0],[()=>{},"function"]]);
// let m=new Map();
// m.set([11,22],"array");
// m.set(true,0);
// m.set(()=>{},"function")
// m.set(obj={name:"mayu"});
// console.log(m);
// console.log(m.get(true));
// console.log(m.has(true));
// console.log(m.has(()=>{}));
// console.log(m.size);
// m.forEach((k,i,o)=>{
//   console.log(k);
//   console.log(i);
//   console.log(o);
// })
// console.log(m.delete(false));

// let j=new Set();
// j.add("bestuuu");
// j.add(1234);
// j.add([1,2,3])

// console.log(j.delete("bestuuu"));
// console.log(j.has("bestuuu"));
// console.log(j.size);
// // console.log(j.clear());
// j.forEach((v,i,arr)=>{
//   console.log(i);
  
// // })
// let m=new Map([["mayu","sandesh"],[()=>{},12],[[1,2],[3,4]]]);
// console.log(m);
// console.log(m.delete("()=>{}"));
// console.log(m.set([100],[true]));
// console.log(m.size);
// m.forEach((a,b,c)=>{
//   console.log(a,b,c);
  
// })




// function* f1(){
//   console.log("start");
//   let a=10;
//   console.log(a);
//   yield a;
//   console.log("middle");
//   const c="mayu";
//   yield c;
//   console.log("end");
//   return 100;
// }

// let g=f1();
// console.log(g.next());
// console.log(g.next());
// console.log(g.next());


// console.log(g);






let bestuu={
  name:"mayu",
  arr:[1,2,3],
  fn(){
    console.log("i am function");
    
  }
}
let sweetu={
  // name:"my",
  skills:[100,200],

}
sweetu.__proto__=bestuu;
console.log(sweetu);

sweetu.fn();
console.log(sweetu.name);

class Student{
  constructor(name,id){
    this.name=name;
    this.id=id;
    console.log(this);
    
  }
}
let v=new Student("mayuri",200);
class emp extends Student{
  constructor(rollno){
    super(name);
    this.name=name;
    this.rollno=rollno;
    console.log(this);
    
  }
}
let x=new emp(12);
console.log(x.name);



















// function* f2(){
//   console.log("start");
//   let b=20;
//   yield b;
//   let v="string";
//   yield v;
//   console.log("end");
//   return "end";
  
  
// }
// let x=f2();
// console.log(x);
// console.log(x.next());

// console.log(x.next());
// console.log(x.next());
// console.log(x);


// console.log(localStorage);
// console.log(sessionStorage);

// localStorage.setItem("true","1");
// localStorage.setItem("num",100);
// // console.log(localStorage);
// sessionStorage.setItem("1","nim")
// localStorage.getItem("true");
// console.log(localStorage);
// localStorage;
// console.log(sessionStorage);
// localStorage.setItem("obj",{name:"sandy"});
// localStorage.removeItem("true")
// console.log(localStorage.length);

// console.log(localStorage);















































// localStorage.setItem("false","1");
// localStorage.setItem("n","100");
// console.log(localStorage.getItem("false"));
// console.log(localStorage.length);
// console.log(localStorage.removeItem("n"));

// console.log(localStorage);
// localStorage.clear();
// console.log(localStorage);









