import './card.css'
import { Link } from 'react-router-dom'

const Card = ({ recipeData }) => {
<<<<<<< HEAD
      
=======
>>>>>>> e434ab5b4c53279cac62c11d386f334c9044e139
    return (
        <Link to="/recipedetails" state={ {recipeData:recipeData} }>
        <div className='recipe-card'>
            <img src={recipeData.thumbnail_url} />
            <section className='card-info'>
                <h3 className='recipe-title'>{recipeData.name}</h3>
                <p className='recipe-description'>{recipeData.description.slice(0, 120)}...</p>
                <button className="details-btn">see details</button>
            </section>
        </div>
        </Link>
    )
}

export default Card