function calculator(a,b){
    return{
        sum:a + b,
        substract:a - b,
        multiplication: a * b,
        division: a / b
    }
}
console.log(calculator(30,6))


const cal=(a,b)=>{
    return{
        sum:a + b,
        substract:a - b,
        multiplication: a * b,
        division: a / b
    }
}
console.log(cal(30,6));


const call=(a,b,symbol)=>{
    switch (symbol) {
        case "+":
            console.log(`addition of ${a} and ${b} is ${a+b}`)
            break;
        case "-":
            console.log(`substraction of ${a} and ${b} is ${a-b}`)
            break;
        case "*":
            console.log(`multiplication of ${a} and ${b} is ${a*b}`)
            break;
        case "/":
            console.log(`division of ${a} and ${b} is ${a/b}`)
            break;
        case "%":
            console.log(`remainder of ${a} and ${b} is ${a%b}`)
            break;
        case "**":
            console.log(`${a} to the power ${b} is ${a**b}`)
            break;
        default:
            break;
    }
}
call(30,6,"+")
call(30,6,"-")
call(30,6,"*")
call(30,6,"/")
call(30,6,"%")
call(30,6,"**")