// // EXAMPLE 1 traditional function declaration
// const num = {
//     value : 100,
//     info : function info(){
//         console.log(this); // num object
//         console.log(this.value); // 100
//     }
// };
// num.info();


// // Example 2 using ananymous function declaration
// const num = {
//     value : 100,
//     info : function(){
//         console.log(this); // num object
//         console.log(this.value); //100
//     }
// };
// num.info();

// // EXAMPLE 3 using arrow function declaration
// const num = {
//     value : 100,
//     info : () => {
//         console.log(this); // global/window object
//         console.log(this.value); // undefined
//     }
// };
// num.info();

// // EXAMPLE 4 using anonymous function declaration
// const newNum = {value:17};
// const num = {
//     value : 100,
//     info : function (){
//         console.log(this); // newNum object
//         console.log(this.value); // 17
//     }
// };
// num.info.call(newNum);

// // EXAMPLE 5 using arrow function declaration
// const newNum = {value:17};
// const num = {
//     value : 100,
//     info : ()=>{
//         console.log(this); // window/global object
//         console.log(this.value); // undefined
//     }
// };
// num.info.call(newNum);

// EXAMPLE 6 using Traditional function declaration
// const str = {
//     value : "Delayed greeting",
//     greet : function greet(){
//         console.log(this); //str object
//         console.log(this.value); // "Delayed greeting"
//         const fn = function fn(){ // we lost this
//             console.log(this); //Timeout object
//             console.log(this.value); //undefined       
//         };
//         setTimeout(fn,5000);      
//     }
// };
// str.greet();

// // EXAMPLE 7 using anonymous function declaration
// const str = {
//     value : "Delayed greeting",
//     greet : function(){
//         console.log(this); //str object
//         console.log(this.value); //"Delayed greeting"
//         setTimeout(function(){ // we lost this here
//             console.log(this); //Timeout object
//             console.log(this.value); //undefined       
//         },5000);      
//     }
// };
// str.greet();

// // EXAMPLE 8 using arrow function declaration
// const str = {
//     value : "Delayed greeting",
//     greet : ()=>{
//         console.log(this); //window object
//         console.log(this.value); //undefined
//         setTimeout(()=>{
//             console.log(this); //Timeout object
//             console.log(this.value); //undefined       
//         },5000);      
//     }
// };
// str.greet();

// // EXAMPLE 9 using traditional/anonymous function declaration
// const str = {
//     value : "Delayed greeting",
//     greet : function(){
//         console.log(this); //str object
//         console.log(this.value); //"Delayed greeting"
//         const self = this;
//         setTimeout(function(){ //we lost this, we have self having this
//             console.log(self); //str object
//             console.log(self.value); //"Delayed greeting"
//         },5000);      
//     }
// };
// str.greet();

// EXAMPLE 10 using arrow function declaration
const str = {
    value : "Delayed greeting",
    greet : function(){
        console.log(this); //str object
        console.log(this.value); //"Delayed greeting"
        setTimeout(()=>{ 
            console.log(this); //str object
            console.log(this.value); //"Delayed greeting"
        },5000);      
    }
};
str.greet();