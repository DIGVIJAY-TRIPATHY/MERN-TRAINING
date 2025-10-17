//remove duplicate elements
const a=[10,20,30,10,40,50,20,10,60,20,60,70,80,10]
for(let i=0;i<a.length;i++){
    for(let j=i+1;j<a.length;j++){
        if(a[i]===a[j]){
            a.splice(j,1)
        }
    }
}
console.log(a);



// easy way for removing duplicate elements

// const a=[10,20,30,10,40,50,20,10,60,20,60,70,80]
// const b=[...new Set(a)]
// console.log(b);
