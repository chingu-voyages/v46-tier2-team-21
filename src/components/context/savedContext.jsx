import React, { createContext, useState } from 'react';


// Create a new context
const RecipeContext = createContext();


const RecipeProvider = ({ children }) => {
  
  // sate variable to store data
  const [savedRecipe, setSavedRecipe] = useState({});
  

  // create a function to fetch the recipe from local storage
  const fetchRecipe = () =>{
    const getlocalData = JSON.parse(localStorage.getItem('savedRecipe')) || {};
    setSavedRecipe(getlocalData);
  }
  
  // Provide the state and the function to the children components
  return (
    <RecipeContext.Provider value={{ savedRecipe, setSavedRecipe,fetchRecipe }}>
      {children}
    </RecipeContext.Provider>
  );
};

export {RecipeProvider};
export {RecipeContext};