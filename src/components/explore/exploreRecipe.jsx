import {useState} from 'react'
import SearchBar from '../searchbar/searchbar'
import SearchResults from '../searchresults/searchresults'
import Loader from '../loader/loader'
import { useLocation } from 'react-router-dom'
import './exploreRecipe.css'

function ExploreRecipe() {

    const [searchResults, setSearchResults] = useState({data: {}, error: null, loading: false})
    let searchedRecipes = searchResults.data.results
    const location = useLocation();
    let displayMessage = 'No results, please try again';

    if(!searchedRecipes){  
        searchedRecipes = location.state.searchedRecipes;
    }

    if (searchedRecipes.length > 0) {
      displayMessage = `Displaying ${searchedRecipes.length} matching results`
    } 
    
  return (
    <div className="results-page-container">
      <div className="results-searchbar">
          <SearchBar setSearchResults={setSearchResults}/>  
      </div>
          
      <p className="display-message">{displayMessage}</p>

      <hr size="3" width="50%"></hr>
      <br/>

      { searchedRecipes && <SearchResults searchedRecipes={searchedRecipes} /> }
      {/* we can also style the following */}
      { searchResults.loading && <Loader /> }
      { searchResults.error && <p>Could not search, please try again</p> }
          
    </div>
  )
}

export default ExploreRecipe
