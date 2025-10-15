// print 1 to 5 but stop at 5
var res=0   
for(let i=0;i<=10;i++){
    if(i==6){
        continue
        res+=i
    }
    
    console.log(res)
}