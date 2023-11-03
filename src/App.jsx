import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Home from './components/home/home'
import ExploreRecipe from './components/explore/exploreRecipe';
import RecipeDetails from './components/recipedetails/recipeDetails';
import Savedresults from './components/saveList/savedresults';


function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/explore" element={<ExploreRecipe/>} />
          <Route path="/recipedetails" element={<RecipeDetails/>} />
          <Route path="/saved-list" element={<Savedresults/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
