import React from 'react'
import { useLocation } from "react-router-dom";
import "./recipeDetails.css"

// this page needs to be designed

function RecipeDetails() {
  const location = useLocation();
  const { recipeData } = location.state;
  console.log(recipeData);
  return (
    <div className='detail-display'>
      <section className='text-section'>
        <h1>{recipeData.name}</h1>
        <p>{recipeData.description}</p>
        <div className='seperator'></div>

        <div className='details' id='ingredients-div'>
          <h3 className='detail-title'> Ingredients </h3>
        </div>


        <div className='details' id='instructions-div'>
          <h3 className='detail-title'> Instructions </h3>
          {
            recipeData.instructions.map(instruction => {
              return (
                <ul className='instruction-list'>
                  <li className='dynamic-li'> {instruction.display_text} </li>
                </ul>
              );
            })
          }
        </div>


        <div className='details' id='nutrition-div'>
          <h3 className='detail-title'> Nutrition </h3>
          <ul className='nutrition-list'>
            <li>Calories: {recipeData.nutrition.calories}</li>
            <li>Carbohydrates: {recipeData.nutrition.carbohydrates} </li>
            <li>Fat: {recipeData.nutrition.fat}</li>
            <li>Fiber: {recipeData.nutrition.fiber}</li>
            <li>Protein: {recipeData.nutrition.protein}</li>
            <li>Sugar: {recipeData.nutrition.sugar}</li>
          </ul>
        </div>
      </section>

      <section className='image-section'>
        <img id='detail-image' src={recipeData.thumbnail_url} alt="" />
      </section>

    </div>
  )
}

export default RecipeDetails;
