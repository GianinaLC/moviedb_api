import { useEffect, useState } from "react"
import '../styles/Movies.css'


const Movies = () => {

    const [peliculas, setPeliculas] = useState([])
    /* const API_KEY = process.env.TMDB_API_KEY; */
    const API_KEY = '7957a776b99b4b78359fc32f48c848a0'

   const URL = 'https://api.themoviedb.org/3/'

    useEffect(() => {
        setMovies()
    },[])
    
    const setMovies = async () => {
        try {
            const response = await fetch(`${URL}movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`)
            const dataJson = await response.json()

            const data = dataJson.results
            console.log(dataJson)

            setPeliculas(data)
        }

        catch (e) {
            throw new Error('Error searching movies')
        }
    }
    
    return (
        <div className="container-movies">
            {
                peliculas.map(peli =>
                    <div key={peli.id} className='div-movie'>
                        <img src={`https://image.tmdb.org/t/p/original${peli.poster_path}`} alt={peli.title} className='img-movies' />
                        <div>
                            <h3>{peli.title}</h3>
                            <h4>{peli.release_date}</h4>
                        </div>
                    </div>
                )
            }
       </div>
    )
}

export default Movies;