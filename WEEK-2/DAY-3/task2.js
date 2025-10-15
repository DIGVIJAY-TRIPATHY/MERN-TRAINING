const a=[19,17,16,14,2222,21,13]

for(let i=0;i<a.length;i++){
    if(a[i]<=1){
        console.log("invalid");
        
    }
    cum=0
    for(let j=2;j<=a.length;j++){
        if(a[i]%j==0){
            cum++
            break;
        }
    }
    if(cum==0 && a[i]!=1){
        console.log(a[i]+" TRUE");
    }
    else{
        console.log(a[i]+" FALSE");
        
    }

}


