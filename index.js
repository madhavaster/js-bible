// // regular function expression arguments
// function sum(){
//     console.log(arguments);
//     console.log(typeof arguments);
//     const argumentsArray = Array.from(arguments);
//     console.log(Array.from(arguments));
//     console.log(argumentsArray.length);
// }

// sum(1,2,3,4);

// arrow function arguments
const sum = (...args)=>{
    console.log(args);
    // console.log(typeof arguments);
    // console.log(Array.isArray(arguments));
    // const argumentsArray = Array.from(arguments);
    // console.log(Array.from(arguments));
    // console.log(argumentsArray.length);
}

sum(1,2,3,4);