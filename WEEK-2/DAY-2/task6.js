count=0
const countvowel=(string)=>{
    return string.match(/[aeiou]/gi)?.length || 0;
}
console.log(countvowel("aeggdoo"));
