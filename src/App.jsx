import './App.css'
import { useState } from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Home from './components/home/home'
import ExploreRecipe from './components/explore/exploreRecipe';
import RecipeDetails from './components/recipedetails/recipeDetails';
// import SearchResults from './components/searchresults/searchresults'
// import chefHat from './assets/chefhat.svg'
// import SearchBar from './components/searchbar/searchbar'


function App() {
  const [searchResults, setSearchResults] = useState({data: {}, error: null, loading: false})
  const searchedRecipes = searchResults.data.results

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/explore" element={<ExploreRecipe/>} />
          <Route path="/recipedetails" element={<RecipeDetails/>} />
        </Routes>
      </BrowserRouter>
    </>
    
  )
}

export default App
