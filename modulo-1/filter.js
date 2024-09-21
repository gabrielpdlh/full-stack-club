const usuarios = [
  {
    nome: 'Leticia',
    idade: 19
  },

  {
    nome: 'Gabriel Safadinho',
    idade: 12
  },

  {
    nome: 'Samuel',
    idade: 19
  }
]

const usuariosMenoresDeIdade = usuarios.filter((idade) => {
  return idade.idade < 18
})

console.log(usuariosMenoresDeIdade)