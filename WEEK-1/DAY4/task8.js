// prime number

var count=0
var num=165
for(var i=2;i<=num/2;i++){
    if(num%i==0){
    count++
    break
    }
}
if(count==0){
    console.log("prime")
}
else{
    console.log("not prime")
}