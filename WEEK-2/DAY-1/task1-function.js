const addition=function(a,b){       //this is function expression
    return a+b
}

function substraction(a,b){     //this is function declaration
    return a-b
}

const multiplication=(a,b)=>a*b     //this is arrow function with implicit return


const division=(a,b)=>{         //this is the arrow function with explicit return
    return a/b
}
console.log(addition(30,6))
console.log(substraction(30,6))
console.log(multiplication(30,6))
console.log(division(30,6))


