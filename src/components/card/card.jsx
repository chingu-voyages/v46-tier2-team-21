import React from 'react'
import './card.css'
import { Link } from 'react-router-dom'

const Card = ({ recipeData }) => {
      
    return (
        <Link to="/recipedetails" state={ {recipeData:recipeData} }>
        <div className='recipe-card'>
            <img src={recipeData.thumbnail_url} />
            <section className='card-info'>
                <h3 className='recipe-title'>{recipeData.name}</h3>
                <p className='recipe-description'>{recipeData.description}</p>
            </section>
        </div>
        </Link>
    )
}

export default Card