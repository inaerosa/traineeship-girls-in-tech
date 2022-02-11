var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split(' ');

let a = parseFloat(lines[0])
let b = parseFloat(lines[1])
let c = parseFloat(lines[2])

if ( a + b > c && b+c > a && a + c > b){
    console.log(`Perimetro = ${(a+b+c).toFixed(1)}`)
} else {
    console.log(`Area = ${((a+b)*2/2).toFixed(1)}`)
}
