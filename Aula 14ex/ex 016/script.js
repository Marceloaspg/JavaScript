function iniciar() {
    let inicio = document.getElementById('ini')
    let fim = document.getElementById('fim')
    let pul = document.getElementById('pul')
    let res = document.getElementById('res')
    let i = Number(inicio.value)
    let f = Number(fim.value)
    let p = Number(pul.value)
    res.innerHTML = 'Contando : </br>'
    if (inicio.value.length == 0 || fim.value.length == 0 || pul.value.length == 0) {
        alert('[ERRO] Dados para contagem Inválidos!!!')
        res.innerHTML = 'Impossível Iniciar Contagem!'
    } else {
        if (p <= 0) {
            alert('Número de pulos inválido! considerando Número de pulos como 1')
            p = 1
        }
        if (i < f){
            //contagem crescente
         for (let c = i; c <= f; c += p) {
            res.innerHTML += `🐱‍🏍${c}`
        }       
        } else {
            //contagem decrescente
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += `🐱‍🏍${c}`
            }           
        }
    } res.innerHTML += '🚩' 
}
    
    
