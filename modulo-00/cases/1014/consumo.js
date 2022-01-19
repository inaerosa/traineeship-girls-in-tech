var input = require('fs').readFileSync('./stdin', 'utf-8')
var [dist, comb_gasto] = input.split('\n');

const distancia_percorrida = parseInt(dist)
const combustivel_gasto = parseFloat(comb_gasto)

const consumo_medio = (distancia_percorrida/combustivel_gasto).toFixed(3)

console.log(`${consumo_medio} km/l`)

