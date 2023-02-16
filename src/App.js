import './App.css';
import Movies from './components/Movies';
import FormSearch from './components/FormSearch';

function App() {
	/* const [peliculas, setPeliculas] = useState([])

	const API_KEY = process.env.TMDB_API_KEY;

	useEffect(() => {
		setMovies()
	}, [])

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
	} */


	return (
		<div className="App">
			<header className='header-class'>
				<h1>Bucador de películas</h1>
				<FormSearch />
			</header>
			<Movies />
		</div>
	);
}

export default App;
