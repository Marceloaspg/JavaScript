let amigo = {nome: 'José' ,
sexo: 'M' ,
peso: 85.4 ,
engordar(p) {
    console.log(`Engordou ${p}KG.`)
    this.peso += p
}
}
amigo.engordar(2)
console.log(`${amigo.nome} pesa atualmente ${amigo.peso}KG.`)