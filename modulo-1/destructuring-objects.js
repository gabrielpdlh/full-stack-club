// const usuario = {
//   primeiroNome: 'Gabriel',
//   sobrenome: 'Padilha',
//   idade: 19,
// }

// const {primeiroNome:firstName, sobrenome:lastName, idade:age} = usuario

// console.log(firstName, lastName, age)

// // -----------------------------------------------------------------------

// const vikings = {
//   familia: 'Lothbrok',
//   tamanhoDaBarba: 'enorme',
//   idade: 30
// }

// const {familia, tamanhoDaBarba, idade} = vikings
// console.log(familia,tamanhoDaBarba,idade)

// // -----------------------------------------------------------------------

// const usuario2 = {
//   name: 'Jane doe',
//   age: 29
// } 

// const {name:nome, age:idade} = usuario2
// console.log(nome, idade)

// -----------------------------------------------------------------------

const piloto = {
  dadosPessoais: {
    nome: 'Ayrton Senna',
    idade: 34
  },
  dadosProfissionais: {
    categorias: 'Formula 1',
    conquistas: 'O melhor de todos os tempos'
  }
}

const {nome, idade,} = piloto.dadosPessoais
const {categorias, conquistas,} = piloto.dadosProfissionais

const {dadosPessoais: {nome:name, idade:age}, dadosProfissionais:{categorias: category, conquistas: achievements}} = piloto

console.log(nome, idade, categorias, conquistas)
console.log(name, age, category, achievements)

// -----------------------------------------------------------------------

