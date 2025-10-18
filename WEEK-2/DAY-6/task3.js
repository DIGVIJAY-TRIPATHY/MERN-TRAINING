const arr=[]
const fun=(e)=>{
    for(let i=0;i<e.length;i++){
        arr.push(e[i])
        console.log(arr);
    }
    var n=e.length
    // arr.reverse()
    for (let i=0;i<n/2;i++){
        let temp = arr[i];
        arr[i]=arr[n - i - 1];
        arr[n - i - 1] = temp;
    }
    console.log(arr.toString().replaceAll(",",""));
        
}

fun("hello")