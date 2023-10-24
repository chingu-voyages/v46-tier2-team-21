import { useState } from 'react'
import "./searchbar.css"

const SearchBar = ({ setSearchResults }) => {
    const [searchText, setSearchText] = useState('')

    const rapidApiKey = import.meta.env.VITE_RAPIDAPI_KEY
    const rapidApiHost = import.meta.env.VITE_RAPIDAPI_HOST

    function updateInput(e) {
        setSearchText(e.target.value)
    }

    async function getRecipes(e) {
        e.preventDefault()
        setSearchResults({data: {}, error: null, loading: true})
        const url = `https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&q=${searchText}`
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': rapidApiKey,
                'X-RapidAPI-Host': rapidApiHost
            }
        };
    
        try {
            const response = await fetch(url, options)
            const results = await response.json()
            setSearchResults(prev => ({...prev, data: results, loading: false}))
        } catch (error) {
            setSearchResults({data: {}, error: error, loading: false})
            console.error(error)
        }
    }

    return (
        <div className='input-wrapper'>
            <form onSubmit={getRecipes} id='search-form'>
                <input onChange={updateInput} type='text' placeholder='Search by ingredient or dish name' className='search-input' />
                <button className='search-button' >Search</button>
            </form>
        </div>
    )
}

export default SearchBar