var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\n');

let count = parseInt(lines[0])

let tot = count * count;
let black = Math.round(tot/2);
if (black % 2 == 1){
    black--;
}
let white = tot-black;

console.log(`${white} casas brancas e ${black} casas pretas`)