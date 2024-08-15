function mult(a,b,c){
    const result = a*b*c;
    console.log(result);
}
mult(10,3,4);
mult(2,3,"test");
mult();

function concatenateStrings(str1,str2){
    console.log(str1+" "+str2);
}

concatenateStrings();
concatenateStrings("Madhava","Reddy");


function outerFunction(a,b){
function innerFunction(c){
    return c*c;   
}
console.log(innerFunction(a+b));
}

outerFunction(3,5);
outerFunction("Madhava","Reddy");