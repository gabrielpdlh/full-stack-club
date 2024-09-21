// const numeros = [1,2,3]

// const numerosMultiplicadosPor2 = numeros.map((item) => {
//   return item * 2
// })

// console.log(numerosMultiplicadosPor2)

// const usuarios = [
//   {
//     nome: 'Jon',
//     idade: 19
//   },

//   {
//     nome: 'Doe',
//     idade: 40
//   }
// ]

// const usuariosComIdadeMultiplicadas = 
// usuarios.map((item) => (
//    {...item, idade: item.idade * 2}
// ))

// console.log(usuariosComIdadeMultiplicadas)

// const users = [
// 	{
// 		name: 'Gabriel',
// 		age: 19
// 	},
// 	{
// 		name: 'Samuel',
// 		age: 11
// 	}
// ]

// const usersName = users.map(user => user.name)
// console.log(usersName) // Alice, Bob

// const numeros = [ 10, 20, 30 , 40 ,50 ]

// const numerosMultiplicadosPor2 = numeros.map(item => item * 2)

// console.log(numerosMultiplicadosPor2)

// const usuarios = [
//   {nome: 'Gabriel', idade: 19},
//   {nome:'Samuel', idade: 11},
//   {nome:'Letícia', idade: 19}
// ]

// const usariosComIdadesMultiplicadasPorDois = usuarios.map(item => item.idade = item.idade * 2)

// console.log(usariosComIdadesMultiplicadasPorDois)

const pessoas = [
  {
    nome: 'Letícia',
    idade: 19
  }, 

  {
    nome: 'Gabriel',
    idade: 17
  },

  {
    nome: 'Samuel',
    idade: 12
  }
]

const pessoasPermitasParaIrParaMatrix = pessoas.map(pessoa => {
  if(pessoa.idade > 18) {
    return `${pessoa.nome} pode ir para matrix`
  } else {
    return `${pessoa.nome} não pode ir para matrix`
  }
})

console.log(pessoasPermitasParaIrParaMatrix)


