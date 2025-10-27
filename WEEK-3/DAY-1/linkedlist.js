class node{
    constructor(data){
        this.data=data
        this.next=null
    }
}
const node1=new node(10)
const node2=new node(20)
const node3=new node(30)
const node4=new node(40)

node1.next=node2
node2.next=node3
node3.next=node4

console.log(node1.data);
console.log(node1.next.data);

