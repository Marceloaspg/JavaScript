function gerar() {
    let num = document.getElementById('num')
    let tab = document.getElementById('tabuada')
    
if(num.value.length == 0) {
    alert('[ERRO] Dados Incorretos, Por favor confira as informações!')
} else {
    tab.innerHTML = ''
    let n = Number(num.value)
for (let t = 1; t <= 10; t++) {
    let item = document.createElement('option')
    item.text = `${n} x ${t} = ${n*t}`
    item.value = `tab${t}`
    tab.appendChild(item)
    
}

}
    
}