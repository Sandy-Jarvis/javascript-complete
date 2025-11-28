
let p=new Promise((a,b)=>{
  let fetchdata=false;
  if(fetchdata) a([1,2,3,4]); 
  else b("I'm Broken"); //if the promise is rejected then it will execute the rejected function and also throws an error!
  })

console.log(p);

p.then((data)=>{
  console.log(data);
  console.log("resolved");

}).catch((one)=>{
  console.log(one);
  console.log("rejected");
});


//   let g=new Promise((m,n)=>{
//     setTimeout(() => {
//       m("I am good boy");
//     }, 2000);
//     setTimeout(()=>{
//       n("I am bad boy");
//     },10000);
//   });
//   g.then((u)=>{
//     console.log(u);
//   }).catch((v)=>{
//     console.log(v);
//   })
// console.log(g);



  // let r=new Promise((a,b)=>{
  //   let a1=true;
  //   if(a1)a("I am fullfilled")
  //     else b("I am rejected");
  // })
  // console.log(r);
  
  // r.then((value1)=>{
  //   console.log(value1);
  // }).catch((reason)=>{
  //   console.log(reason);
  // });

  // let f=new Promise((x,y)=>{
  //   setTimeout(()=>{
  //     console.log("First");
  //     x([{name:"sand"},{id:123}]);
  //   },2000);
  //   setTimeout(()=>{
  //     console.log("Second");
  //     y("The reason is!")
  //   },1000)
  // })
  // console.log(f);
  
  // f.then((v)=>{
  //   console.log(v);
  // })
  // .catch((w)=>{
  //   console.log(w);
  // })
  // .finally((t)=>{
  //   console.log("I'll always execute!");
  // })

  // let y=new Promise((a,b)=>{
  //   // a([1,2,3,4]);
  //   b("i'll be the reason !")
  // })
  // console.log(y);
  // y.then((data)=>{
  //   console.log(data);
    
  // }).catch((f)=>{
  //   console.log(f);
    
  // }).finally(()=>{
  //   console.log("ill be thwere alaways");
    
  // })
  
// "use strict"
//   console.log(this);
//   function f1(){
//     console.log(this);
//      let ar=(()=>{
//     console.log(this);
    
//   })
//   ar()
//   }
//   f1();

  // class A{
  //   constructor(name,id){
  //     this.Name=name;
  //     this.Id=id;
  //     console.log(this);
      
  //   }
  // }
  // let b=new A("sandy",90);

  // let ob={
  //   name:"Chakuli",
  //   id:123,
  //   sand(){
  //     console.log(this);
  //    let arr=()=>{
  //     console.log("arr");
      
  //     console.log(this);
      
  //   };arr();
  //   }
  // }
  // ob.arr();

//  ob.arr()
// ob.sand()

// let ob={
//     name:"Chakuli",
//     id:123
// }

// function f1(a,b){
//   console.log(a,b);
  
//   console.log(this);
// }
// // f1.call(ob,10,20);
// // f1.apply(ob)

// f1.bind(ob,10,20)()
// let r1=f1.bind(ob,10,20);
// r1();

// let a=new Promise((res,rej)=>{
//   // res([1,2,3,4]);
//   rej("its an error cause of something!")
// })
// console.log(a);

// //then(),catch(),finally():-
// // a.then((j)=>{  //it will execute for resolved state!
// //   console.log(j);
  
// // })
// // a.catch((k)=>{ //it will execute for rejected state!
// //   console.log(k);
  
// // })
// // a.finally(()=>{  //it will  always execute!
// //   console.log(" i'll always be there");
  
// // })

// a.then((j)=>{console.log(j);
// },(k)=>{console.log(k);
// })


// let v=new Promise((a,b)=>{
//   setTimeout(()=>{
//     a({name:"Mayu"});
//   },2000)
//   setTimeout(()=>{
//     b("Hey Beautiful!")
//   },3000)
// })
// console.log(v);
// v.then((data)=>{
//   console.log(data);
// }).catch((reason)=>{
//   console.log(reason);
// })







// let a = new Promise((res,rej)=>{
//   // res("sandesh");
//   rej("reason");
// })
// console.log(a);
// a.then((g)=>{
//   console.log(g);
  
// },(r)=>{
//   console.log(r);
  
// });
// a.finally(()=>{
//   console.log("finally");
  
// })






// let y=new Promise((res,rej)=>{
//   setTimeout(()=>{  
//     res([1,2,3,5]);
  
//   },4000);
//   setTimeout(()=>{
//     rej("error");
    
//   },3000);
// })
// console.log(y);






// const r=new Promise((a,b)=>{

//   setTimeout(()=>{
//     a([10,20]);
//   },5000)
//   setTimeout(()=>{
//     b("im not executing")
//   },2000);
// })
// console.log(r);
// r.then((t)=>{
//   console.log(t);
  
// }).catch((m)=>{
//   console.log(m);
  
// }).finally((f)=>{
//   console.log(f);
  
// })



// let v=Promise.resolve([11,22,33]);
// console.log(v);

// v.then((a)=>{
//   console.log(a);
// })

// let u=Promise.reject("whatever the reason!");
// console.log(u);
// u.catch((n)=>{
//   console.log(n);
  
// })


// let a=window.fetch('https://fakestoreapi.com/products/1');
// console.log(a);
// a.then((c)=>{
//   console.log(c);
//   let v=c.json();
//   console.log(v);
//   v.then((d)=>{
//     console.log(d);
//     // for(let j of d){
//     //   let{id,title,description,image,price}=j;
//     //   console.log(id,title,description,image,price);
//     // }
//   })
// })


