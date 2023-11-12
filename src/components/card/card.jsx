import './card.css'
import { Link } from 'react-router-dom'
import {useEffect, useState, useContext} from 'react';
import { RecipeContext } from '../context/savedContext';

const Card = ({ recipeData }) => {
    // access context variable
    const { savedRecipe, setSavedRecipe } = useContext(RecipeContext);

    //manageSaveState  // Immediately invocked function expression
    (() => { 
        if ( savedRecipe && savedRecipe.hasOwnProperty(recipeData.id)){
            recipeData.isSaved = true;
        }else{
            recipeData.isSaved = false;
        }
    })();

    const handleSaveClick = async () =>{
        
        const updatedRecipes = { ...savedRecipe };
        const isCurrentlySaved = recipeData.isSaved;

        if(isCurrentlySaved){
            delete updatedRecipes[recipeData.id];
        }else{
            updatedRecipes[recipeData.id] = recipeData;
        }

        recipeData.isSaved = !isCurrentlySaved;
        
        // update data into context variable
        setSavedRecipe(updatedRecipes);

        // store the updated list in localStorage 
        localStorage.setItem('savedRecipe', JSON.stringify(updatedRecipes));
    }

    
    return (
        <div className='recipe-card'>
            <img src={recipeData.thumbnail_url} alt="Recipe Thumbnail" />
            <section className='card-info'>
                <div className='card-text'>
                    <h3 className='recipe-title'>{recipeData.name}</h3>
                    <p className='recipe-description' >{recipeData.description.slice(0, 120)}...</p>
                </div>
                <div className='card-btn'>
                    <Link to="/recipedetails" state={ {recipeData:recipeData} }>
                    <button className="details-btn">see details</button>
                    </Link>

                    {/* Save button with heart shape and color change based on the save state */}
                    <button className={`save-btn`} onClick={handleSaveClick}>
                    {recipeData.isSaved ? '❤️' : '🤍'}
                    </button>
                </div>
            </section>
        </div>
    )
}

export default Card