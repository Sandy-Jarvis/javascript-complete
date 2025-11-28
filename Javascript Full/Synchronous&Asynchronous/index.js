//1):-SetTimeOut():-

setTimeout(()=>{
  document.write("H");
},2000)

setTimeout(()=>{
  document.write("e");
},2200)

setTimeout(()=>{
  document.writeln("y");
},2400)

//2):-setInterval():-

let x=setInterval(()=>{
  document.writeln("She is so beautiful!")
},2000)

setTimeout(()=>{
  clearInterval(x)
},6000)