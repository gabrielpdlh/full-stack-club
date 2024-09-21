const numeros = [1, 2, 3, 4]

const primeiro = numeros[0]
const segundo = numeros[1]
const terceiro = numeros[2]
const quarto = numeros[3]

console.log(primeiro, segundo, terceiro, quarto)

// ----------------------------------------------------------------------------

const numeros2 = [1,2,3,4]

const [first, second, third, fourth] = numeros
// Dessa forma, o JS está assinalando cada variável a o seu respectivo index da lista, ou seja, o "first" condiz com o primeiro item da lista "numero2", o "1"
console.log(first,second,third,fourth)

// ----------------------------------------------------------------------------

let a = 1;
let b = 3;

[a, b] = [b, a];

console.log(a);
console.log(b);
// Aqui estamos usando descructuring para inverter as variáveis

// ----------------------------------------------------------------------------

const person = {
  name: 'Gabriel',
  age: 19,
  job: 'Developer',
  city: 'Joao Pessoa'
}

const {name, job} = person

console.log(name)
console.log(job)
// Aqui estamos usando o destructuring em um objeto.

