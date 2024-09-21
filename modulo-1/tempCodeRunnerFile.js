const pessoas = [
  {nome: 'Gabriel', idade: 19},
  {nome: 'Samuel', idade: 12},
  {nome: 'Leticia', idade: 20},
  {nome: 'Eloa', idade: 4}
]

const pessoasMaiores = pessoas.filter(pessoas => pessoas.idade >= 18)

console.log(pessoasMaiores)