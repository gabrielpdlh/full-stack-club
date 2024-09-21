class Usuario  {
  constructor(nome) {
    this.nome = nome
  }

  static sayHello () {
    console.log('Hello world')
  }

  login() {
    console.log(`${this.nome} fez Login!`)
  }
  logout() {
    console.log(`${this.nome} fez Logout!`)
  }
}

const usuario = new Usuario('Jhon')
const usuario1 = new Usuario('Gabriel')

console.log(usuario)
console.log(usuario1)

usuario.login()
usuario1.logout()