// Function Declaration vs Function Expression
// function myFn(a,b){
//     return a+b;
// }

// console.log(myFn(10,20));
// console.log(myFn());

// const myFn = function(a,b){
//     console.log(a+b);
//     return a+b;
// };
// // console.log(myFn(10,20));

// setTimeout(function(){console.log("inside")},20000);
// let i=1;
// setInterval(function(){
//     console.log(`Hello ${i}`);
//     i++;
// },1000);
let i=1;
const myInterval = setInterval(function(){
    console.log(`Hi ${i}`);
    i++;
},2000);

setTimeout(function(){
    clearInterval(myInterval);
},10000)