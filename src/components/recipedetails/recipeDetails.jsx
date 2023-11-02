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

        <h3> Instruction: </h3>
        {
          recipeData.instructions.map(instruction => {
            return (
              <ul>
                {/* <p> Start Time: {instruction.start_time}</p>
              <p> End Time: {instruction.end_time}</p> */}
                <li> {instruction.display_text} </li>

              </ul>

            );
          })
        }
      </section>
      <section className='image-section'>
        <img id='detail-image' src={recipeData.thumbnail_url} alt="" />
      </section>

    </div>
  )
}

export default RecipeDetails;
