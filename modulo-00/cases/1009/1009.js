var input = require('fs').readFileSync('./stdin', 'utf-8')
var [nome , s, t] = input.split('\n');

const salario = parseFloat(s)
const totalVendas = parseFloat(t)

const comissao = totalVendas * (15/100);
const totalSalarioComissao = (salario + comissao).toFixed(2);

console.log("TOTAL = R$", totalSalarioComissao)
