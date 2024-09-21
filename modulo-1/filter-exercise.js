const numeros = [3,6,8,2]

const numerosMaioresQueCinco = numeros.filter(num => num > 5)

console.log(numerosMaioresQueCinco)


const numeros2 = [1,2,3,4,5,6,7,8]

const numerosPares = numeros2.filter(numPar => numPar % 2 === 0)

console.log(numerosPares)

const pessoas = [
  {nome: 'Gabriel', idade: 19},
  {nome: 'Samuel', idade: 12},
  {nome: 'Leticia', idade: 20},
  {nome: 'Eloa', idade: 4}
]

const pessoasMaiores = pessoas.filter(pessoas => pessoas.idade >= 18)

console.log(pessoasMaiores)