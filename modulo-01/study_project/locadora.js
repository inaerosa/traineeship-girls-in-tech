var readlineSync = require('readline-sync')

const movie_list = ['Twister', 'The Lost World: Jurassic Park', 'The Perks of Being a Wallflower']
const unavailable_movies = ['Twister']
let isClient = false;

function register_client(){
    const client_name = readlineSync.question('Hey, whats your name?')
    const phone = readlineSync.question(`${client_name}, whats your phone number?`)
    isClient = true;
    console.log(`Thanks, you are now our client!`)
}

if (isClient && !unavailable_movies.includes(movie)){
    console.log(`Great news, ${client_name}, you rented the movie '${movie}', please comeback in three days`)
    unavailable_movies.push(movie)
} else {
    console.log(`Oh no :c, ${movie} has been rented, maybe you have interessed in another titles? `)
    for (let i = 0; i < movie_list.length; i++){
        if (unavailable_movies.includes(movie_list[i])){
           movie_list.splice(i,1)
        }
    }
    console.log(movie_list)
}