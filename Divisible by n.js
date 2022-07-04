function divisibleByn(array,a) {
    let value = []
    for(let i = 0; i <=array.length; i++) {
        if(array[i] % a === 0)value.push(array[i]);
       
    }
    return value
}
let a =[32,48, 90,78,72]
console.log(divisibleByn(a, 6));