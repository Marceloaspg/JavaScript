let num = document.getElementById('fnum')
let lista = document.getElementById('flista')
let res = document.getElementById('res')
let valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    res.innerHTML = ''
    if (isNumero(num.value) && !inLista(num.value, valores)) {
       let n = Number(num.value)
       let sel = document.createElement('option')
       sel.text = `O Valor ${n} foi adicionado`
       sel.value = `${n}`
       valores.push(Number(sel.value))
       lista.appendChild(sel)
   
    } else {
        alert('Valor inválido ou ja encontrado na lista!')
    }
    num.value = ''
    num.focus()
}

  function finalizar() {
      if (valores.length == 0) {
          alert('Adicione Valores antes de finalizar!')
      } else {

            let sel = valores
    valores.sort()
    res.innerHTML += `<p>Ao todo, temos ${sel.length} valores cadastrados.</p>`
    res.innerHTML += `<p>O maior valor informado foi ${sel[sel.indexOf[100]]}</p>`
    res.innerHTML += `<p>O menor valor informado foi ${sel[0]}</p>`
    res.innerHTML += `<p>Somando todos os valores, temos ${valores}</p>`
    res.innerHTML += `<p>A média dos valores adicionados é ${sel.length / valores.length}</p>`
      }

}  