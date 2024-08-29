const a = 10;
const b = 5;
const sum = myFn`Sum of the two variables a(${a}) and b(${b}) is ${a+b}`;
export function myFn(arrayOfArgs,a,b,sum){
    console.log(arrayOfArgs[0]);
}