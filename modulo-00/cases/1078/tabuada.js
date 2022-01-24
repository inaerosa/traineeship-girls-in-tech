var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\n');

var tabuada = parseInt(lines[0])

for (let i = 1; i <= 10; i++){
    var resultado = i * tabuada;
    console.log(`${i} x ${tabuada} = ${resultado}`)
}
