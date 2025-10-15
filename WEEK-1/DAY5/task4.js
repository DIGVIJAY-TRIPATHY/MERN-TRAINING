// create a basic calculator
function x(a,b,c){
    switch (c) {
        case "+":
            console.log(a+b)
            break;
        case "-":
            console.log(a-b)
            break;
        case "*":
            console.log(a*b)
        case "**":
            console.log(a**b)
            break;
        case "/":
            console.log(a/b)
            break;
        case "%":
            console.log(a%b)
            break;
    
        default:
            console.log("invalid")
            break;
    }
}
x(15,3,"+")
x(15,3,"-")
x(15,3,"*")
x(15,3,"**")
x(15,3,"/")
x(15,3,"%")




// using if else

function y(a,b,c){
    if(c=="+") return a+b
    if(c=="-") return a-b
    if(c=="*") return a*b
    if(c=="**") return a**b
    if(c=="/") return a/b
    if(c=="%") return a%b
}
console.log(y(15,3,"+"))
console.log(y(15,3,"-"))
console.log(y(15,3,"*"))
console.log(y(15,3,"**"))
console.log(y(15,3,"/"))
console.log(y(15,3,"%"))
