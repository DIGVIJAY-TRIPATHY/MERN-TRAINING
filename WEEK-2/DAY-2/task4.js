
const isprime=(number)=>{
    let cum=0
    for(let i=2;i<=Math.sqrt(number);i++){
        if(number%i==0){
            cum++
            break;
        }
    }
    if(cum==0 && number!=1){
        console.log("TRUE");
    }
    else{
        console.log("FALSE");
    }
}
isprime(44)