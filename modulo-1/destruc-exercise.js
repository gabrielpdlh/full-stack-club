const numeros = [1,2,3,4,5]

const [um, dois, tres, quatro, cinco] = numeros

console.log(`um: ${um}`)
console.log(`dois: ${dois}`)
console.log(`tres: ${tres}`)
console.log(`quatro: ${quatro}`)
console.log(`cinco: ${cinco}`)
console.clear

// ------------------------------------------------------------------

let a = 5;
let b = 10;

[a, b] = [b, a]

console.log(`a:${a}, b:${b}`)

// ------------------------------------------------------------------

const melhoreSeriesDoMundo = ['GOAT' , 'BREAKING BAD' , 'VIKINGS']

const minhasMelhoreSeries = ['PEAKY BLINDERS', ...melhoreSeriesDoMundo, 'THE WALKING DEAD',]

console.log(minhasMelhoreSeries)

// ------------------------------------------------------------------

const sobremesas = ['Sorvete', 'Petit Gateau', 'Açai', 'Pudim', 'Mousse de Maracujá']

const [opcao1, opcao2, ...outrasOpcoes] = sobremesas

console.log(opcao1)
console.log(opcao2)
console.log(outrasOpcoes)