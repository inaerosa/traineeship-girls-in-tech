var input = require('fs').readFileSync('./stdin', 'utf-8')
var lines = input.split('\n')

let count = parseInt(lines[0])
let value = 1;

for (let i = 1; i <= count; i ++){
    console.log(`${value} ${value+1} ${value+2} PUM`)
    value +=4
}