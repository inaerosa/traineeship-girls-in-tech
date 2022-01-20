var input = require('fs').readFileSync('./stdin', 'utf-8')
var lines = input.split('\n')

let qtdGasolina = 0
let qtdAlcool = 0
let qtdDiesel = 0

for (let i = 0; i < lines.length; i++){
    let cod_atual = lines[i];
    if (cod_atual == 1){
        qtdAlcool++
    } else if (cod_atual == 2){
        qtdGasolina++
    } else if (cod_atual == 3){
        qtdDiesel++;
    } else if (cod_atual == 4){
        break;
    }
}

console.log('MUITO OBRIGADO')
console.log(`Alcool: ${qtdAlcool}`)
console.log(`Gasolina: ${qtdGasolina}`)
console.log(`Diesel: ${qtdDiesel}`)