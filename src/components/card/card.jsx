import './card.css'
import { Link } from 'react-router-dom'
import React,{useEffect, useState, useContext} from 'react';
import { RecipeContext } from '../context/savedContext';

const Card = ({ recipeData }) => {
    // const [isSaved, setIsSaved] = useState(false);

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
        setSavedRecipe(updatedRecipes);
        
        // updateStorage(); // error with this getting delayed not correct behaviour

        localStorage.setItem('savedRecipe', JSON.stringify(updatedRecipes));
        
    }
    
    return (
        <div className='recipe-card'>
            <img src={recipeData.thumbnail_url} />
            <section className='card-info'>
                <div>
                    <h3 className='recipe-title'>{recipeData.name}</h3>
                    <p className='recipe-description'>{recipeData.description.slice(0, 120)}...</p>
                </div>
                <div>
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