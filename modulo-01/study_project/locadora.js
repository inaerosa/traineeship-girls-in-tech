var readlineSync = require('readline-sync')

const movie_list = ['Twister', 'The Lost World: Jurassic Park', 'The Perks of Being a Wallflower']
const unavailable_movies = ['Twister']
let isClient = false;
let client_name;

function register_client(){
    client_name = readlineSync.question('Hey, whats your name?')
    const phone = readlineSync.question(`${client_name}, whats your phone number?`)
    isClient = true;
    console.log(`Thanks, you are now our client!`)
}

const disponible_movies = () => {
    for (let i = 0; i < movie_list.length; i++){
        if (unavailable_movies.includes(movie_list[i])){
           movie_list.splice(i,1)
        }
    }
    return movie_list
}

let visit_name = console.log('Hey, i have notticed you have some interessed in movies, maybe you want see someone that i have in my estableshment. First time in here? Lets make your register')
if (visit_name != client_name){
    console.log('Wait, i guess u dont have a register, lets make this?')
    register_client();
}

console.log('\n---------------------MY MOVIE LIST------------------------\n')
console.log(disponible_movies())

if (isClient && !unavailable_movies.includes(movie)){
    console.log(`Great news, ${client_name}, you rented the movie '${movie}', please comeback in three days`)
    unavailable_movies.push(movie)
} else {
    console.log(`Oh no :c, ${movie} has been rented, maybe you have interessed in another titles? `)
    console.log(disponible_movies())
}