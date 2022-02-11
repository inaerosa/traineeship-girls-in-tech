var input = require('fs').readFileSync('./stdin', 'utf-8')
var lines = input.split(' ')

var elem_per_line = lines[0];
var tot_elem = lines[1];
var string = ""

for (let i = 1; i <= tot_elem; i++){
    string += `${i} `
    if (i % elem_per_line == 0){
        string += `\n`
    }
}

console.log(string)