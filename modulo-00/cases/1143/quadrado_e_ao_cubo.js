var input = require('fs').readFileSync('./stdin', 'utf-8')
var lines = input.split('\n')

let count = parseInt(lines[0]);

for (let i = 1; i <= count; i++){
    console.log(`${i} ${i*i} ${i*i*i}`)
}