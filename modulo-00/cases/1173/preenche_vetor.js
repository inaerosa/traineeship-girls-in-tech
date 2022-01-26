var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\n');

let qtd = parseInt(lines[0]);

let arr = [qtd]

for (let i = 0; i < 10; i++){
    console.log(`N[${i}] = ${arr[i]}`)
    arr.push((i + qtd) *2)
}