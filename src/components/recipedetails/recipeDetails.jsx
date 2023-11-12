import React from 'react'
import { useLocation } from "react-router-dom";

// this page needs to be designed

function RecipeDetails() {
    const location = useLocation();
    const {recipeData} = location.state;
    console.log(recipeData.instructions);
  return (
    <div>
      <h1>RecipeeDetails</h1>
      <h2>Name: {recipeData.name}</h2>
      <h3> Instruction: </h3>
      {
        recipeData.instructions.map(instruction => {
            return  (
                <div>
                    <p> Start Time: {instruction.start_time}</p>
                    <p> End Time: {instruction.end_time}</p>
                    <p> Steps: {instruction.display_text} </p>
                    <br/>
                </div>

            );
        })
      }
    </div>
  )
}

export default RecipeDetails;
