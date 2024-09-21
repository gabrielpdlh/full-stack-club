class Guerreiro {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
  
  lutar(){
    console.log(`O guerreiro ${this.nome}, de idade ${this.idade} anos está lutando!`)
  }
}

const guerreiro1 = new Guerreiro('Gabriel', 19)
guerreiro1.lutar()

class Viking extends Guerreiro {
  constructor(nome, idade){
    super(nome, idade)
  }

  lutar() {
    console.log(`O viking ${this.nome}, de ${this.idade} anos, está lutando em nome de Odin!`)
  }

  lutarComMartelo () {
    console.log(`O viking ${this.nome}, de ${this.idade} está lutando com seu martelo em nome de Thor!`)
  }
}

const viking = new Viking('Samuel', 11)
viking.lutar()
viking.lutarComMartelo()