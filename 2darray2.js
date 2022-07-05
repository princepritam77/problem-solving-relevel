let twoDarray = [
    ["prince" ,"student", "90"],
    ["mayank","teacher","110"],
    ["vinay","cook","230"],
];
for(let i = 0; i <=twoDarray.length-1; i++) {
console.log(twoDarray[i]);
}
/*
*/
let toDarray = [
    [66,77,88,99],
    [12,34,56,78,],
    [90,87,86,84],
];
for(let a = 0; a <=toDarray.length-1; a++) {
    for(let b = 0; b  <=toDarray[a].length-1; b++)
console.log(toDarray[a][b]*5);
}
/*
*/
let transposeM = [ 
    [1,2,3],
    [4,5,6],
    [7,8,9],
]
for(let j = 0; j <= transposeM.length-1; j++) {
for(let i = 0; i<=transposeM[j].length-1; i++)
console.log(transposeM[i][j]);
console.log("_____________");
}
