const name=["rudra","himanshu","biswa","sourav","piyush"]
for(let i=0;i<name.length;i++){
    
    if(name[i].match(/[aeiou]/gi)?.length  >=3){
        name.pop()
    }
}
console.log(name);