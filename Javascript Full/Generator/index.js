function* f1(){
  let a=100;
  console.log(a);
  yield 100;
  const c="my";
  yield c;
  return 1000;
}
let v=f1();
// console.log(v);
console.log(v.next());
console.log(v.next());
console.log(v.next());
console.log(v);

