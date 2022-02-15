var input = require('fs').readFileSync('./stdin', 'utf-8')
var lines = input.split('\n')

let N = parseInt(lines[0]);
let rabbit = 0;
let frog = 0;
let mouse = 0;

for (let i = 1; i < N + 1; i++){
    let line = lines[i].split(' ')
    let count_test = parseInt(line[0]);
    let animal = line[1];

    if (animal == 'C\r'){
       rabbit+= count_test;
    } else if (animal == 'S\r'){
        frog+= count_test;
    } else if (animal == 'R\r'){
        mouse+= count_test;
    } else if (animal == 'R'){
        mouse+=count_test;
    }
}

const lab_rat = rabbit+frog+mouse

console.log(`Total: ${lab_rat} cobaias`);
console.log(`Total de coelhos: ${rabbit}`);
console.log(`Total de ratos: ${mouse}`);
console.log(`Total de sapos: ${frog}`);
console.log(`Percentual de ${rabbit} : ${lab_rat*rabbit/100} %`)
console.log(`Percentual de ${mouse} : ${lab_rat*mouse/100} %`)
console.log(`Percentual de ${frog} : ${lab_rat*frog/100} %`)