function veri() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fano.value.length == 0 || Number(fano.value) > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade <= 1) {
                //BB
                img.setAttribute('src', 'bbm.png')
            } else if (idade < 10) {
                //criança
                img.setAttribute('src', 'crim.png')
            } else if (idade < 18) {
                //adolecente
                img.setAttribute('src', 'adolm.png')
            } else if (idade < 40) {
                //adulto
                img.setAttribute('src', 'adultm.png')
            } else if (idade < 60) {
                //40+
                img.setAttribute('src', 'adul40m.png')
            } else {
                //velho
                img.setAttribute('src', 'idom.png')
            }

        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade <= 1) {
                //BB
                img.setAttribute('src', 'bbf.png')
            } else if (idade < 10) {
                //criança
                img.setAttribute('src', 'crif.png')
            } else if (idade < 18) {
                //adolecente
                img.setAttribute('src', 'adolf.png')
            } else if (idade < 40) {
                //adulto
                img.setAttribute('src', 'adultf.png')
            } else if (idade < 60) {
                //40+
                img.setAttribute('src', 'adul40f.png')
            } else {
                //velho
                img.setAttribute('src', 'idof.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}