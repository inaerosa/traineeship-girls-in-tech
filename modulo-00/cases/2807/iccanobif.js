var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\n');

let count = parseInt(lines[0])
let fib = []
fib[0] = 0
fib[1] = 1
let str = ''

for (let i = 2; i <= count + 2; i++){   
    fib[i] = fib[i-2] + fib[i-1]
}

for (let i = count; i > 0; i--){
    str += fib[i] + " "
}

console.log(str)