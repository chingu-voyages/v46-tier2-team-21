/* eslint-disable react/prop-types */
import { useState } from 'react'
import './style.css'

const Search = ({setSearchResults}) => {
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
      setSearchResults(prev => ({...prev, error: error, loading: false}))
      console.error(error)
    }

    console.log("find recipes with ", searchText)
  }

  // async function getInfo(id) {
  //   const url = `https://tasty.p.rapidapi.com/recipes/get-more-info?id=${id}`
  //   const options = {
  //     method: 'GET',
  //     headers: {
  //       'X-RapidAPI-Key': '9fd93a7c3fmsh2eb076a1d319ec6p1722fejsn590e5f4b37bd',
  //       'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
  //     }
  //   };

  //   try {
  //     const response = await fetch(url, options)
  //     const result = await response.json()
  //     console.log(result)
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }

  return (
    <>
    <form onSubmit={getRecipes}>
      <div className='input-wrapper'><input onChange={updateInput} type='text' placeholder='Search by ingredient or dish name' className='search-input' value={searchText}></input>
        <button className='search-button' >Search</button>
      </div>
    </form>
    </>
  )
}

export default Search