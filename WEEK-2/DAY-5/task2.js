// rotating an array
const rotateArray = (arr, d) => {
    n=arr.length;
    for(let i=0;i<d;i++){
        let last=arr[n-1]
        for(let j=n-1;j>0;j--){
            arr[j]=arr[j-1]
        }
        arr[0]=last
    }
    console.log(arr);
}

var arr = [1, 2, 3, 4, 5];
console.log(arr);       //this is for understanding
var d = 1;
rotateArray(arr, d);