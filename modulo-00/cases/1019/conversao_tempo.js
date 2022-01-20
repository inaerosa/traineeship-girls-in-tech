var input = require('fs').readFileSync('./stdin', 'utf-8')
var [tempo] = input.split('\n')

let segundos = Number(tempo)

const horas = Math.trunc(segundos/3600)
segundos -= horas*3600;
const minutos = Math.trunc(segundos/60)
segundos -= minutos*60

console.log(`${horas}:${minutos}:${segundos}`)


