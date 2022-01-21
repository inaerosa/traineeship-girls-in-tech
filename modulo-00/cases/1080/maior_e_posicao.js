var input = require('fs').readFileSync('./stdin', 'utf-8')
var lines = input.split('\n')

// for (let i = 0; i < 1000; i++){
//     let number = Math.floor(Math.random()*1000)
//     console.log(number)
// }

var arr = JSON.parse("[" + lines + "]")

let maiorValor = 0

for (let i = 0; i < lines.length ; i++){
    if (arr[i] > maiorValor){
        maiorValor = arr[i]
    }
}

let index = arr.findIndex( number => number >= maiorValor);

console.log(maiorValor)
console.log(index)









