import { useState } from 'react'
import './style.css'

const Search = () => {
  const [searchText, setSearchText] = useState('')

  function updateInput(e) {
    setSearchText(e.target.value)
  }

  function getRecipes(e) {
    e.preventDefault()
    console.log("find recipes with ", searchText)
  }

  return (
    <form onSubmit={getRecipes}>
      <div className='input-wrapper'><input onChange={updateInput} type='text' placeholder='Search by ingredient or dish name' className='search-input' value={searchText}></input>
        <button className='search-button' >Search</button>
      </div>
    </form>
  )
}

export default Search