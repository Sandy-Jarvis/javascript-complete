// let m=new Map([["name","mayu"],[1234,"num"]]);
// m.set("1234","23456789");
// m.set("mayu","jaan");
// m.set(()=>{},"func")
// console.log(m.has(()=>{}));
// console.log(m.delete("mayu1"));
// console.log(m.get("1234"));
// console.log(m.size);
// m.forEach((k,v,ob)=>{
//   console.log(k);
//   console.log(v);
//   console.log(ob);
// })
// console.log(m);






let map=new Map();
map.set("mayu","sandy");
map.set("()=>{}","function");
map.set("[10,20]","array");
console.log(map.delete("mayu"));
console.log(map.has("[10,20]"));
map.forEach((v,k,o)=>{
  // console.log(k);
  console.log(o);
  
  
})
console.log(map.size);


console.log(map);































