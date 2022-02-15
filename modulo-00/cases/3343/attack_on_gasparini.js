var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = input.split('\n');
var first_input = lines[0].split(' ')

var wall_size = parseInt(first_input[1])
var titan_damage = []
var order_attack = lines[1]
var line = lines[2].split(' ')
let add_wall = 1;

for (let i = 0; i < line.length; i++){
    titan_damage.push(line[i])
}

for (let i = 0; i < order_attack.length - 1; i++){    
    if (order_attack.charAt(i) == 'P'){
        wall_size -= titan_damage[0] 
    } else if (order_attack.charAt(i) == 'M'){
        wall_size -= titan_damage[1]
    } else if (order_attack.charAt(i) == 'G'){
        wall_size -= titan_damage[2]
    }

    if (wall_size <= 0){
        add_wall++
        wall_size += parseInt(first_input[1])
    }
}

console.log(add_wall)


   







