import { useState } from "react"
import { useFetch } from "../hooks/useFetch"

const  FormSearch = () => { 
    const [title, setTitle] = useState('')

    const { data } = useFetch(`search/movie?api_key=7957a776b99b4b78359fc32f48c848a0&query=Jack+Reacher`)

	const handleSubmit = (e) => {
		e.preventDefault()
		console.log('title:', title)
	}

	const handleChange = (e) => {
		setTitle(e.target.value)
	}

    return (
        <form onSubmit={handleSubmit}>
			<input name='inputName' placeholder='Top Gun' onChange={handleChange} />
			<button>Buscar</button>
		</form>
    )
}

export default FormSearch