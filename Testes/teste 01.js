/*
let n = 10
for (let t in n) {
    let mult = t * n
    console.log(`${mult}`)
}
*/
var soma = 0
let num = [500, 200, 100, 7, 30, 25, 12, 8]
num.sort(Number)
for (var m = 0; m < num.length; m++) {
    soma += num[m]
    
}

console.log(`O primeiro numero é ${num.length -1}`)
console.log(`O maior Número é ${num[0]}`)
console.log(`A média entre os Números é ${soma / num.length}`)