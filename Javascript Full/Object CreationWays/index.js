//1)Literal Way:-
let a={
  name:"Sandesh",
  id:90
}
console.log(a);


//2):-Using Class and Constructor:-
class Obj{
  constructor(name,id,salary){
    this.Name=name;
    this.Id=id;
    this.Salary=salary;
  }
}
let b=new Obj("Chakuli",24,90000);
console.log(b);

//3):-Constructor Function:-

function Value(name,id,profile){
  this.Name=name;
  this.ID=id;
  this.Profile=profile;
}
let c=new Value("Sonpapdi",2004,"Data Analyst");
console.log(c);

//4):-Object Constructor:-

let d=new Object();
d.name="abc";
d.salary=8989;
console.log(d);
