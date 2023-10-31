import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home/home'
import ExploreRecipe from './components/explore/exploreRecipe';
import RecipeDetails from './components/recipedetails/recipeDetails';


function App() {

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
