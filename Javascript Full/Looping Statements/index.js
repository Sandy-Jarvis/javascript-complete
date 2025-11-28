//Looping Staements:-
//Looping statements are used to execute the some set of code multiple times(again and again) based on some condition!

//1):-while loop:-
let a=0;
while(a<=10){
  console.log(a);
  a++;
}


//2):-do-while loop:-

let b=1;
do{
  console.log(b);
  b++;
}while(b<11)

//3):-for loop:-

for(let i=11;i<=20;i++){
  console.log(i);
}

//4):-for-in loop:-

let r="HelloWorld";
for(let j in r){
  console.log(j);
}

//5):-for-of loop:-

for(let k of r){
  console.log(k);
}

let obj={
  name:"Sandy",
  id:909
}
console.log(obj);


//example:-(Aise he)

for(let l in obj){
  console.log(l);
  console.log(obj[l]);
}