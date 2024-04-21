var amigo = {nome:'Leandro', sexo: 'M', peso: '61.5', engordar(p=0) {
  console.log('Engordou')
  this.peso += p
}}

amigo.engordar(10)
console.log(`Amigo ${amigo.nome} pesa ${amigo.peso}`)
