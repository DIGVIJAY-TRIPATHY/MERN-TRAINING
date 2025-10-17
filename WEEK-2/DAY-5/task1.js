// sorting an array from 1 to n
// the time complexity of this program is O(n) and this is of high time complexity
const sort=(a,n)=>{
    var i=0
    while(i<n){
        var correct=a[i]-1
        if(a[correct]!=a[i]){
            swap(a,i,correct)
        }else{
            i++
        }
    }
}

function swap(a,i,correct){
    var temp=a[i]
    a[i]=a[correct]
    a[correct]=temp
}
var a=[3,5,2,1,4]
var n=a.length
sort(a,n)
console.log(a)