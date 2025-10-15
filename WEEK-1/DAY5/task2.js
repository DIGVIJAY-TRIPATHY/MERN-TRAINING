function y(n1,n2,n3){
    if(n1>=n2 && n1>=n3){
        console.log(`${n1} is greater between ${n1} ${n2} ${n3}`)
    }
    else if(n2>=n1 && n2>=n3){
        console.log(`${n2} is greater between ${n1} ${n2} ${n3} `)
    }
    else{
        console.log(`${n3} is greater between ${n1} ${n2} ${n3}`)
    }
}
y(5,4,11)
y(5,45,11)
y(54,45,11)
y(45,78,64)