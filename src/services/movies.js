/* aca va el fetch */
/* https://api.themoviedb.org/3/movie/550?api_key=7957a776b99b4b78359fc32f48c848a0 */
/* https://api.themoviedb.org/3/movie/now_playing?api_key=7957a776b99b4b78359fc32f48c848a0&language=en-US&page=1 */
/* TODO: APIKEY va en .env */

/* const API_KEY = '7957a776b99b4b78359fc32f48c848a0'


const setMovies = async () => {
    try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`)
        const dataJson = await response.json()

        const data = dataJson.results
        console.log(dataJson)

         setPeliculas(data)
    }

    catch (e) {
        throw new Error('Error searching movies')
    }
}

export default setMovies */

