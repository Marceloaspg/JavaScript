let  num = [510,810,210,910,310]
num.push(1000)
num.sort((a,b) => a - b)
console.log(num)
console.log(`Nosso Vetor tem ${num.length} posições.`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(510)
if (pos == -1) {
    console.log(`O valor não foi encontrado!`)
} else {
  console.log(`O valor da busca está na posição ${pos}`)  
}
