// const arr=[1,2,9,4,5,6]
let lar=-1 
let seclar=-1
const a=(arr)=>{
for(let i=0;i<arr.length;i++){
    if(arr[i]>lar){
        seclar=lar
        lar=arr[i]
    }
    else if(arr[i]<lar && arr[i]>seclar){
        seclar=arr[i]
    }
}
console.log(seclar);
}

a([1,2,9,4,5,6])
