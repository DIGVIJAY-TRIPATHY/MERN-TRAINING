const a={
    name:"rudra",
    age:20,
    class:"mern",
    regd:146
}
a.college="nit"
console.log(a);

const b={...a,roll:156}
const c={...a,name:"rud"}
const d={...a,class:"py"}
const f={...a,sch:"kdp"}




console.log(b);
console.log(c);
console.log(d);
console.log(f);

//   here  f={
//           name: 'rudra',
//           age: 20,
//           class: 'mern',
//           regd: 146,
//           college: 'nit',
//           sch: 'kdp'
//          }

const{name,age,college,sch}=f
console.log(name,age,college,sch);
