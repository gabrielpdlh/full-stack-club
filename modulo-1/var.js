// Declaracao de variaveis

if ( 2+ 2 === 4){
  var message = "hello wordl"
  console.log(`Var declarada no escopo: ${message}`)
}

message = 'teste'
console.log(`Var alterada e chamada fora do escopo: ${message}`)

// Var nao tem block scoping, ou seja, ela nao se limita a um escopo. Independente de onde ela for declarada, ela pode ser chamada em qualquer lugar do codigo

if ( 2+2 ===4){
  const message2 = 'ola mundo'
  console.log(`Const limitada ao escopo: ${message2}`)
}


// Const, por sua vez, uma vez declarada ela se limita a um escopo especifico, caso declarada em um escopo, ela nao "vaza" para o resto do codigo


