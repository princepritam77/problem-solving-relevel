let Array = [43,23,234,948,677]
let maxvalue = Array[0];
for(let i = 0; i <= Array.length-1; i++) {
if(Array[i]>maxvalue) {
    maxvalue = Array[i];
}
}
console.log(maxvalue);