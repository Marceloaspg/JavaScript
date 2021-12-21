let num = document.querySelector('input#num')
let sel = document.querySelector('select#sel')
let res = document.querySelector('div#res')
let array = []

function numero(n) {
    if(Number(num.value) >= 1 && Number(num.value) <= 100) {
        return true
    } else {
        return false
    }
}

function lista(n, l) {
    if(l.indexOf(Number(num.value)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
if(numero(num.value) && !lista(num.value, array)) {
    array.push(Number(num.value))
    let item = document.createElement('option')
    item.text = `Valor ${num.value} foi adicionado.`
    sel.appendChild(item)
    item.style.color = 'red'
    res.innerHTML = ''
} else {
    alert('Número inválido ou ja encontrado na lista!')
}
num.value = ''
num.focus()
}

function analise() {
 if (array.length == 0) {
     alert('Adicione Valores antes de Analisar!')
 } else {
    total = array.length
    array.sort(function(a,b){return a-b})
    menor = array[0]
    maior = array[array.length -1]
    soma = 0
    for (pos in array) {
        soma += array[pos]    
    }
    media = soma / total

    res.innerHTML += `<p>Ao todo, Temos ${total} valores Adicionados.</p>`
    res.innerHTML += `<p>O maior valor Adicionado Foi ${maior}.</p>`
    res.innerHTML += `<p>O menor valor Adicionado foi ${menor}.</p>`
    res.innerHTML += `<p>A soma entre todos os números é ${soma}.</p>` 
    res.innerHTML += `<p>A média dos Valores Adicionados é ${media}.</p>`
 }  
}

