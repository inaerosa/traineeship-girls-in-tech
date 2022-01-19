var input = require('fs').readFileSync('./stdin', 'utf-8')
var [cod, qtd] = input.split('\n')

const cod_item = parseInt(cod)
const qtd_item = parseInt(qtd)
let total = 0;

switch (cod_item){
    case 1:
        total = qtd_item*4.00
    break
    case 2:
        total = qtd_item*4.50
    break
    case 3:
        total = qtd_item*5.00
    break
    case 4:
        total = qtd_item*2.00
    break
    case 5:
        total = qtd_item*1.50
    break          
}

console.log(`Total: R$ ${total.toFixed(2)}`)