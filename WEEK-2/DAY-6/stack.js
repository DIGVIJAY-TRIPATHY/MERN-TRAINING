class stack{
    constructor() {this.item=[];}
    push(element){this.item.push(element);}
    pop(){
        if(this.isEmpty()){
            return "underflow"
        }
        return this.item.pop();
    }
}