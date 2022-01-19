var input = require('fs').readFileSync('./stdin', 'utf-8')
var [vA,vB, vC] = input.split('\n')

const a = parseFloat(vA)
const b = parseFloat(vB)
const c = parseFloat(vC)

function calcTriangulo(a, c){
    return (a*c/2).toFixed(3)
}

function calcCirculo(c){
    return (3.14159*c**2).toFixed(3)
}

function calcTrapezio(a,b,c){
    return (((a+b)*c)/2).toFixed(3)
}

function calcQuadrado(b){
    return (b*b).toFixed(3)
}

function calcRetangulo(a,b){
    return (a*b).toFixed(3)
}

console.log(`TRIANGULO: ${calcTriangulo(a,c)}`)
console.log(`CIRCULO: ${calcCirculo(c)}`)
console.log(`TRAPEZIO: ${calcTrapezio(a,b,c)}`)
console.log(`QUADRADO: ${calcQuadrado(b)}`)
console.log(`RETANGULO: ${calcRetangulo(a,b)}`)