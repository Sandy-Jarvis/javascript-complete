let v=document.querySelector(".hero");
console.log(v);

//1):-add():-
v.classList.add("hi","hello");

//2):-remove():-
v.classList.remove("hero");

//3):-contains():-
console.log(v.classList.contains("hero"));
console.log(v.classList.contains("hi"));

//4):-toggle():-
v.classList.toggle("ID");
v.classList.toggle("hello");

//5):-replace():-
v.classList.replace("ID","value");