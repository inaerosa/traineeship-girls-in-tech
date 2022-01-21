var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\n');

const renda = parseFloat(lines[0])
let imposto;

if (renda <= 2000.00){
    imposto = "Isento"
} else if ( renda <= 3000.00){
    imposto = ((renda - 2000.00)*0.08).toFixed(2)
} else if (renda <= 4500.00){
    imposto = (1000*0.08 + (renda - 3000) * 0.18).toFixed(2)
} else {
    imposto = (1000*0.08 + 1500*0.18 + (renda - 4500) * 0.28).toFixed(2)
}

console.log(`R$ ${imposto}`)