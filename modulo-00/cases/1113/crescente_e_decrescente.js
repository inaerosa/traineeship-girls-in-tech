var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\n');

for (let i = 0; i < lines.length; i++){
    let value = lines[i].split(' ');
    let valueA = parseInt(value[0]);
    let valueB = parseInt(value[1]);
    
    if (valueA > valueB){
        console.log("Decrescente")
    } else if (valueB > valueA){
        console.log("Crescente");
    } else if (valueA == valueB){
        console.log(" ")
    }
    
    
}