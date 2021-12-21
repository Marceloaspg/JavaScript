var agora = new Date()
var hora = agora.getHours()
var min = agora.getMinutes()
var sec = agora.getSeconds()
console.log(`Agora são exatamente ${hora}:${min}:${sec} horas.`)
if (hora < 6) {
console.log('Tenha uma ótima madrugada!')
} else if(hora < 12) {
    console.log('Tenha uma ótima manhã!')
} else if(hora < 18) {
    console.log('Tenha uma ótima tarde!')
} else {
    console.log('Tenha uma otima noite!')
}