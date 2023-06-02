const {readMovies, escribirMovies} = require('../data');
// const movies = require('../')
let result;
module.exports ={
    movies: readMovies(),
    listMovies: function(movies = this.movies){
        console.log("-----------------Lista de Movies----------------")
        movies.forEach(movie => {
            console.log(`${movie.id} | ${movie.title} - ${movie.rating} - ${movie.awards} - ${movie.length} hs - $${movie.price} - ${movie.gender}`)
        });
        console.log("---------------------------------------------------")
    },
    searchMovies:  function(searchM){
        let peliEcontrado = [];
        if(!isNaN(+searchM)){
            result = this.movies.find(movie => movie.id === +searchM);
            peliEcontrado.push(result);
            return peliEcontrado;
        }else{
            result = this.movies.find(movie => movie.title === searchM);
            peliEcontrado.push(result);
            return peliEcontrado;
        }
    },
    searchMoviesGender: function(gender){
        return this.movies.filter(movie => movie.gender === gender);
    }
}