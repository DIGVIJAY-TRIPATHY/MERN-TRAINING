// reversing an array
const arr=[1,2,9,4,5,6]
// arr.reverse();
var n=arr.length
for (let i=0;i<n/2;i++) {
        let temp = arr[i];
        arr[i]=arr[n - i - 1];
        arr[n - i - 1] = temp;
    }
console.log(arr);

