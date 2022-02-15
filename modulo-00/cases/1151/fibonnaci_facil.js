var input = require('fs').readFileSync('./stdin', 'utf-8')
var lines = input.split('\n')

var count = parseInt(lines[0])

let a = 0
let b = 1
let c = 0
let string = ''

for (let i = 0; i < count; i++){
    a = b
    b = c
    c = a+b
    string += `${c} `
}

console.log(string)