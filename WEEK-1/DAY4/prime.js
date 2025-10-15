var count =0
var num=29
if(num<=1){
    console.log(`the number ${num} is INVALID`);
    
}
for(var i=2;i<=Math.sqrt(num);i++){
    if(num%i==0){
        count ++
        break
    }
}
if(count==0){
    console.log(`the number ${num} is PRIME`);
}
else{
    console.log(`the number ${num} is NOT-PRIME`);
}