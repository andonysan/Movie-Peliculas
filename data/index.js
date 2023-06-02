const {writeFileSync, readFileSync} = require('fs');
const path = require('path')

let readMovies = ()=> JSON.parse(readFileSync(path.join(__dirname,'movies.json'),'utf-8'));
let writeMovies = (movie)=> writeFileSync(path.join(__dirname, 'movies.json'), JSON.stringify(movie, null,3), 'utf-8');

module.exports = {
    readMovies,
    writeMovies,
}