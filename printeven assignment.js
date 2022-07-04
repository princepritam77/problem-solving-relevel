//first we take function even
//then we run a loop  from "a" to "b" by increamenting every 2 times
//then we gonna return array
function printEven(a , b) {
    let value = []
for(let i = a; i <= b; i+= 2) {
    if(a % 2 === 0 )a++;
    value.push(i)
    
}
return value;
}
console.log(printEven(4 , 85))