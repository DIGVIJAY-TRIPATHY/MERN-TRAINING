// fact=(a)=>{
//     for(let i=a-1;i>0;i--){
//         a=a*i
//     }
//     console.log(a);
// }
// fact(15)




// we can do it by recursion

fact=(a)=>{
    if(a===0 || a===1){
        return 1
    }
    return a*fact(a-1)
}

console.log(fact(15));
