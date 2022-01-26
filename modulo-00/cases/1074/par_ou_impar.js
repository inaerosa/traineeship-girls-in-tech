var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\n');

var qtd = parseInt(lines[0]);

for (let i = 1; i <= qtd; i++){
    let number = parseInt(lines[i]);

    if (number > 0 && number % 2 === 0){
        console.log("EVEN POSITVE")
    } else if (number > 0 && number % 2 != 0){
        console.log("ODD POSITVE")
    } else if (number < 0 && number % 2 != 0){
        console.log("ODD NEGATIVE")
    } else if (number < 0 && number % 2 === 0){
        console.log("EVEN NEGATIVE")
    } else if (number == 0){
        console.log("NULL")
    }
}