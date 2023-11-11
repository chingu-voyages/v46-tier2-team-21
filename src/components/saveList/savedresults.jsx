import React,{useEffect, useState, useContext} from 'react';
import SearchResults from '../searchresults/searchresults'
import { RecipeContext } from '../context/savedContext';


function Savedresults() {
  
  const { savedRecipe,fetchRecipe } = useContext(RecipeContext);
    useEffect(() => {
      fetchRecipe();
    },[])
  
  const searchedRecipes = Object.values(savedRecipe);

  console.log(searchedRecipes)

  return (
    <>
        
    <div style={{ marginTop: '20px'}}>
    { searchedRecipes && <SearchResults searchedRecipes={searchedRecipes} /> }
    {/* we can also style the following */}
    { searchedRecipes.length === 0 ? ( <h2 style={{ textAlign: 'center', fontSize: '24px', color:'blue' }}>Empty list</h2> ):"" }

    </div>

        
    </>
  )
}

export default Savedresults
