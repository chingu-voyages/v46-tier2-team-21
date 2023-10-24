import React from 'react'
import './card.css'

const Card = ({ recipeData }) => {
      //name, description, thumbnail_url
  // <div key={recipeData.id}>{recipeData.name}</div>
    return (
        <div className='recipe-card'>
            <img src={recipeData.thumbnail_url} />
            <section className='card-info'>
                <h3 className='recipe-title'>{recipeData.name}</h3>
                <p className='recipe-description'>{recipeData.description}</p>
            </section>
        </div>
    )
}

export default Card