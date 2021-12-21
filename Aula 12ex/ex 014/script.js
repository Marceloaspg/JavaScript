function carregar() {
var msg = document.getElementById('msg')
var img = document.getElementById('foto')
var agora = new Date()
var hora = agora.getHours()
var min = agora.getMinutes()
var sec = agora.getSeconds()
var sect = document.getElementById('cor')
msg.innerHTML = `Agora são exatamente ${hora} horas ${min} minutos e ${sec} segundos.`
if(hora >= 0 && hora < 12) {
img.src = 'manha.png'
document.body.style.backgroundColor = '#c0ba76'
} else if (hora >= 12 && hora < 18) {
img.src = 'tarde.png'
document.body.style.backgroundColor = '#fc6e01'
} else {
img.src = 'noite.png'
document.body.style.backgroundColor = '#411e25'
}
}