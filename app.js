const argv = require('process').argv;
const moduloMovies = require('./movies/funcionesDeMovies.js');

const comando = argv[2];
let answer;

if(!comando){
    console.log("por favor, tienes que pensar en una acción");
}else{
    switch (comando) {
        case 'list':
            moduloMovies.listMovies();
            break;
        case 'search':
            let searchM = argv[3];
            if([searchM].includes(undefined)){
                console.log("No se registro ningun valor")
                break
            }
            answer = moduloMovies.searchMovies(searchM);
            moduloMovies.listMovies(answer);
            // console.log(typeof respuesta);
            break
        case 'searchGender':
            let gender = argv[3];
            if(!gender){
                console.log("por favor ingresa un genero")
                break;
            }
            answer = moduloMovies.searchMoviesGender(gender);
            moduloMovies.listMovies(answer);
            break
        default:
            break;
    }
}

