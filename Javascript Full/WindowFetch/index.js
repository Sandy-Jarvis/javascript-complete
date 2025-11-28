// Assignment:-How to fetch data from API:-
let f=document.querySelector(".tbody");
let a=window.fetch("https://api.escuelajs.co/api/v1/products");
console.log(a);
a.then((data)=>{
  console.log(data);
  let value=data.json();
  console.log(value);
  value.then((final)=>{
    console.log(final);
    for(let v of final){
      console.log(v);
      let {id,name,images,price,title}=v;
      console.log(id,name,images,price,title);
      f.innerHTML+=
       `<tr>
            <td>${id}</td>
            <td>${name}</td>
            <td>
            <img src=${images} alt=${id}/>
            </td>
            <td>${price}</td>
            <td>${title}</td>
          </tr>`;
    }
  })
  a.catch((e)=>{
    console.log(e);
  })
})

// let v=window.fetch("https://api.escuelajs.co/api/v1/products");
// console.log(v);
// v.then((data)=>{
//   console.log(data);
//   let value=data.json();
//   console.log(value);
//   value.then((final)=>{
//     console.log(final);
//     for(let v of final){
//       console.log(v);
//       let {id,images,price,title}=v;
//       // console.log(id,price,title);
//       f.innerHTML+=
//       `<tr>
//           <td>${id}</td>
//             <td>
//           <img src=${images} alt=${id}/>
//           </td>
//           <td>${price}</td>
//           <td>${title}</td>
//           </tr>`;
      
//     }
//   })
// })


// let a=window.fetch("https://fakestoreapi.com/products/1");
// console.log(a);
// a.then((data)=>{
//   console.log(data);
//   let value=data.json();
//   console.log(value);
//   value.then((final)=>{
//     console.log(final);
    
//   })
// })









// let r=Promise.resolve("N")

// async function f1() {
//   console.log("start");
  
// }





















// let f=document.querySelector(".tbody");

// let b=window.fetch("https://fakestoreapi.com/products");
// console.log(b);
// b.then((data)=>{
//   console.log(data);
//   let final=data.json();
//   console.log(final);
//   final.then((last)=>{
//     console.log(last);

//     for(let c of last){
//       console.log(c);
//       var{image,id,price,title,category}=c;
//       // console.log(image,id,price,title);
//       f.innerHTML+=
//       `<tr>
//             <td>
//               <img src="${image}" alt="img"></td>
//             <td>${id}</td>
//             <td>${price}</td>
//             <td>${title}</td>
//             <td>${category}</td>

            

//           </tr>`
//     }
//   })
// })

// let a=window.fetch("https://fakestoreapi.com/products");
// console.log(a);
// a.then((v)=>{
//   console.log(v);
//   let j=v.json();
//   console.log(j);
//   j.then((e)=>{
//     console.log(e);
//   })
// })
