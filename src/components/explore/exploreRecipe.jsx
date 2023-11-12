import { useState } from 'react'
import SearchBar from '../searchbar/searchbar'
import SearchResults from '../searchresults/searchresults'
import { useLocation } from 'react-router-dom'

function ExploreRecipe() {

  const [searchResults, setSearchResults] = useState({ data: {}, error: null, loading: false })
  let searchedRecipes = searchResults.data.results
  const location = useLocation();

  if (!searchedRecipes) {

    searchedRecipes = location.state.searchedRecipes;
  }

  return (
    <>
      <div className='explore-input' >
        <SearchBar setSearchResults={setSearchResults} />
      </div>

      {searchedRecipes && <SearchResults searchedRecipes={searchedRecipes} />}
      {/* we can also style the following */}
      {searchResults.loading && <p>finding recipes...</p>}
      {searchResults.error && <p>Could not search, please try again</p>}

    </>
  )
}

export default ExploreRecipe
