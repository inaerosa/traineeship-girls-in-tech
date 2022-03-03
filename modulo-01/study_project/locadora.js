var readlineSync = require('readline-sync')

const movie_list = ['Twister', 'The Lost World: Jurassic Park', 'The Perks of Being a Wallflower']
const unavailable_movies = ['The Lost World: Jurassic Park']
let isClient = false;
let client_name;

function register_client(){
    console.log(`\n\n------------------REGISTER OF CLIENTS------------------------\n`)
    client_name = readlineSync.question('Whats your name?')
    const phone = readlineSync.question(`${client_name}, and your phone number?`)
    isClient = true;
    console.log(`Thanks, you are now our client!`)
}

const disponible_movies = () => {
    movie_list.map(movie => {
        if (unavailable_movies.includes(movie)){
            movie_list.splice(movie_list.indexOf(movie),1)
         }
    })
    return movie_list;
}

function rent_movie(interessed_movie){
    if (isClient && !unavailable_movies.includes(interessed_movie) && movie_list.includes(interessed_movie)){
        console.log(`Great news, ${client_name}, you rented the movie '${interessed_movie}', please comeback in three days`)
        unavailable_movies.push(interessed_movie)
    } else {
        console.log(`Oh no :c, ${interessed_movie} has been rented, maybe you have interessed in another titles? `)
        console.log(disponible_movies());
        let answer = readlineSync.question('Something? ')    
        validation_anwser(answer.toLowerCase())   
    }
}

function validation_anwser (answer){
    answer === 'no' ? 'break' : rent_movie(answer)
}

let visit_name = readlineSync.question('Whats up, interessed in watch some movies? \nPlease, say your name: ')

if (visit_name != client_name){
    console.log('\n \nWait, i guess u dont have a register, lets make this?')
    register_client();
}

console.log('\n---------------------MY MOVIE LIST------------------------\n')
console.log(disponible_movies())

let interessed_movie = readlineSync.question('Which movie you have interessed?')
rent_movie(interessed_movie);