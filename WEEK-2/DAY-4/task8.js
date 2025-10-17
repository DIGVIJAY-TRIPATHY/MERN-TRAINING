//finding the most time repeated number from array
// const arr=[1,1,2,1,3,5,1]

const major=(arr)=>{
    let n=arr.leng
    arr.sort()
    for(let i=0;i<n;i++){
        let count=0
        for(let j=0;j<n;j++){
            if(arr[i]==arr[j]){
                count++

            }

        }
        if(count>n/2){
            return arr[i]
        }

    }



}
const arr=[1,1,2,1,3,5,1]
console.log(major(arr))
