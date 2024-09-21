const numeros2 = [1,2,3]

const numerosCom4e5 = [...numeros2, 4,5]

console.log(numerosCom4e5)

// O Spread está nos "...", ele está pegando tudo que tem dentro do "numeros2" e adicionando mais dois números.

// ----------------------------------------------------------------------------

const [dez, vinte, ...resto] = [10, 20, {name:'Gabriel', age:18, city:'João Pessoa'}, 30]
// Aqui estamos usando o Spread juntamente com o Destructuring para assinalar variáveis. Onde tem o "...resto" está falando para o JS pegar tudo que sobrou e assinalar para o "resto"
console.log(resto)