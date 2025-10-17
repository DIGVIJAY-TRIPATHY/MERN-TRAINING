const a=[10,20,4,556,4891,1,12,46]
let max=a[0]
for(let i=0;i<a.length;i++){
    if(a[i]<max){
        max=a[i]
    }
}
console.log(max);