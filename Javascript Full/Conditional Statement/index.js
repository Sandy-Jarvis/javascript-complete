//*******Conditional Statement:- */
// If we want to execute some set of code based on the condition then we use conditional statement!


//1):-if-else:-
//1):-
let a=99;
if(a<100){
  console.log("less than 100");
}else{
  console.log("Greater than 100");
}

//2):-
let age=68;

if(age<18){
  console.log("Yoy're not eligible for vote");
}else if(age<=65){
  console.log("You can Vote!");
}else if(age<80){
  console.log("Update your voter ID!");
}else{
  console.log("Why are you here?");
}

//***************************************************

//2)Switch Case:-

let b=21;
 switch(b){
  case 1:
    console.log("im 1");
    break;
    case 2:
      console.log("iam 2");
      break;
      case 45:
        console.log("i am real");
        break;
        case 66:
          console.log("helo");
          break;
          default:
            console.log("i am defalut!");  
 }

 //******************************************************* */

 //3):-ternary-operator:-

 let n=110;
 let res=n%2==0?"even":"odd";
 console.log(res);
 