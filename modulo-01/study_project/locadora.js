const movie_list = ['Twister', 'The Lost World: Jurassic Park', 'The Perks of Being a Wallflower']

let register_client = true
const client = 'Inaê'
let movie = 'The Lost World: Jurassic Park'

const unavailable_movies = ['Twister']

if (register_client && !unavailable_movies.includes(movie)){
    console.log(`Great news, ${client}, you rented the movie '${movie}', please comeback in three days`)
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








