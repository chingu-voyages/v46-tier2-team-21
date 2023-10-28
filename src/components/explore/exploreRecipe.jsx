import React,{useState} from 'react'
import SearchBar from '../searchbar/searchbar'
import SearchResults from '../searchresults/searchresults'

function ExploreRecipe() {

    const [searchResults, setSearchResults] = useState({data: {}, error: null, loading: false})
    const searchedRecipes = searchResults.data.results

  return (
    <>
    <div style={{margin:'10px', padding:'10px'}}>
        <SearchBar setSearchResults={setSearchResults}/>  
    </div>
        
    { searchedRecipes && <SearchResults searchedRecipes={searchedRecipes} /> }
    {/* we can also style the following */}
    { searchResults.loading && <p>finding recipes...</p> }
    { searchResults.error && <p>Could not search, please try again</p> }
        
    </>
  )
}

export default ExploreRecipe
