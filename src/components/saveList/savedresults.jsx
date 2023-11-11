import React,{useEffect, useState, useContext} from 'react';
import SearchResults from '../searchresults/searchresults'
import { RecipeContext } from '../context/savedContext';


function Savedresults() {
  
  const { savedRecipe,fetchRecipe } = useContext(RecipeContext);
  
  useEffect(() => {
    fetchRecipe();
  },[])
  

  //retrieve the recipe list in array format from object
  const searchedRecipes = Object.values(savedRecipe);

  return (
    <>
      <div style={{ marginTop: '20px'}}>

        { searchedRecipes.length === 0 ? ( <h2 style={{ textAlign: 'center', fontSize: '24px', color:'blue' }}>Empty list</h2> ):"" }

        { searchedRecipes && <SearchResults searchedRecipes={searchedRecipes} /> }

      </div>
    </>
  )
}

export default Savedresults
