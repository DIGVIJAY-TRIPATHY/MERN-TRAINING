// this is another syntax and mostly we use this
const sss=(a,b)>={
    return: a+b     // this is EXPLICIT type
}


// there are three types of arrow function
    // ----> SINGLE PARAMETER
    // ----> NO PARAMETER
    // ----> MULTIPLE PARAMETER




// SINGLE PARAMETER
const square=x=>x*x
console.log(square(5))


// NO PARAMETER
const hello=()=>console.log("hello world")
hello()


// MULTIPLE PARAMETER
const add=(a,b)=>a+b  //also known as IMPLICIT type
console.log(add(5,10))


// PRACTICE

const sum=function(a,b){
    return a+b
}

// the arrow type of implicit will
const sum=(a,b)=>a+b   //here is the error because i took two sum as constant

// the arrow type of explicit will
const sum=(a,b)=>{
    return a+b
}
// the arrow type of single parameter of this function will be
const sum=a=>a+a





const su=function(x){
    return x**x
}
console.log(su(5))

// this is 1 parameter function so we can write in arrow function
const su=x=>x**x
console.log(su(5))




const getpi=()=>console.log("3.14")
getpi()

