const arr=[15,25,26,45,66,78,11];
const a=(num)=>{
    for(let i=0;i<arr.length;i++){
        if(arr[i]===num){
            console.log(i);
            break;
        }
    }
    b=arr.toString()
    if(num!==Number(b)){
        console.log("not found");
    }
}
a(66)
a(10)
