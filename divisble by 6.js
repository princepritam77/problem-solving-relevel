function divisibleBy7(a, n) {
    let value = []
    for(let i = 0; i <a.length; i++) {
        if(a[i] % 7 === 0)value.push(a[i]);

    }
    return value;
}
a =[32,34,56,21,49,11,34,30]
console.log(divisibleBy7(a));