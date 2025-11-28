
// Currying Function:-


function aayu(a){
  return function (b){          //returning an function.
    return function(c){
        return a+b+c;
    }
  }
} let yu=aayu(10)(20)(30);      //Instead of passing multiple parameter to an function.
console.log(yu);

function sandy(i){
  return function(o){
    return function(p){
      return i+o+p;
    }
  }
}
let jk=sandy(45)(55)(100);
console.log(jk);

//************************************************************* */
// IIFE:-
(function(){
  console.log("Hello");
})();

(()=>{
  console.log("Immediate Invoke Function");
})();

var ty=100;
(()=>{
  var ty=300;
  console.log(ty);  
})();
var ty=577;   // Here it is poluting to global variable.
console.log(ty);

//******************************************************************* */

// Pure Function:-

function pure(x,y){
  v=x+y;
  return v;
}
console.log(pure(66,22));

//***************************************************************8 */

// Impure Function:-

var i=0;
function impure(x,y){
  i++;
  return x+y+i;
}
console.log(impure(10,60,10));
console.log(impure(10,60,10));
console.log(impure(10,60,10));

//*********************************************************** */

// Use Strict:-

//StrictMode
//k=10;                               //Throws errors in strict mode.
//console.log(k);

// function golu(a,b,b){
//   console.log(a,b);
// }                                  //Throws errors in strict mode
// golu(90,80,56);

// var let =67;
// console.log(let);

//****************************************** */

// Arguments:-

function di(){
    console.log(arguments);
    console.log(arguments[4]);
    console.log("Execute");
}
di(2,3,4,5,6,7);





function mama(){
 console.log(arguments);
 console.log(arguments[0]);
 
 
}
mama(89,0,78,55,34);

(function(a,b){
  console.log("hello me");
  let c=a+b;
  console.log(c);
  
  
})(10,40);

function hi(h){
    return function(i){
      return function(j){
        return h+i+j;
      }
    }
  }
let tu=hi(3)(4)(7);
console.log(tu);

function pure1(a,b){
  c=a+b;
  console.log(c);
}
console.log(pure1(2,4));

var t=0;
function goto(x,y){
  t++;
  return x+y+t;
}
console.log(goto(1,2,1));
console.log(goto(1,2,1));
console.log(goto(1,2,1));
