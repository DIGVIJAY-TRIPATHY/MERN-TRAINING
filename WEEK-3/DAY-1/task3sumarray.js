const a=[45,55,124,46,58]

// this way we can do in foreach loop

var b=0
a.forEach(element => {
    b=b+element
    
});
console.log(b);




// the simple for loop
arrays=(arr)=>{
    var sum=0
    for(let i=0;i<=arr.length-1;i++){
        sum=sum+arr[i]
    }   
    return sum
}
console.log(arrays([45,55,124,46,58]))





// the recursive method

arraysum=(arr,index=0)=>{
    if(index>=arr.length){
        return 0;
    }
    return arr[index]+arraysum(arr,index+1)
}

console.log(arraysum([1,2,3,4,5]));



//this is another recursive method
function arraysum2(arr){
    if(arr.length===0){
        return 0;
    }
    return arr[0]+arraysum2(arr.slice(1));
}

console.log(arraysum2([45,55,124,46,58]));