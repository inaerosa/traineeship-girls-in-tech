var input = require('fs').readFileSync('./stdin', 'utf-8')
var [Px1,Py1,Px2, Py2] = input.split('\n');

const x1 = parseFloat(Px1)
const y1 = parseFloat(Py1)
const x2 = parseFloat(Px2)
const y2 = parseFloat(Py2)

var distancia = Math.sqrt(((x2-x1)**2) + ((y2 - y1))**2)

console.log(distancia.toFixed(4))