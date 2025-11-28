//REMOVE THE DUPLICATES FROM AN ARRAY:-
let arr=[1,22,33,222,22,33,4,6];
let res=new Set(arr);
console.log([...res]);

//FACTORIAL:-
let num=5;
let res1=1;
for(let i=1;i<=num;i++){
  res1=res1*i;
  console.log(res1);
}
  console.log(res1);


//FIBONACCI SERIES:-
let n=10;
let a=[0,1];
for(let i=2;i<n;i++){
  a[i]=a[i-1]+a[i-2];
}
console.log(a);

//PRIME NUMBER:-
let ar=[11,22,33,44,55,66,67,77,88,89,91];
let prime=ar.filter((v)=>{
  if(v<2){
    return false;
  }
  for(let i=2;i<=v;i++){
    if(v%i===0){
      return false
    }else{
      return true;
    }
  }
});
console.log(prime);

//CAPITALIZE THE FIRST LETTER IN STRING:-
let s="i am the spider-man";
let r=s.split(" ");
// console.log(r);
for(let i=0;i<r.length;i++){
  // console.log(r[i][0].toUpperCase());
  // console.log(r[i].slice(1));
  r[i]=r[i][0].toUpperCase()+r[i].slice(1);
}
let data=r.join(" ");
console.log(data);

