const swap=(a,b)=>{
    a=a+b
    b=a-b
    a=a-b
    return [a,b]
}
[a,b]=swap(20,99)
console.log(a,b)