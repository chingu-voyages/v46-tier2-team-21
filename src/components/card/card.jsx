import './card.css'

const Card = ({ recipeData }) => {
    return (
        <div className='recipe-card'>
            <img src={recipeData.thumbnail_url} />
            <section className='card-info'>
                <h3 className='recipe-title'>{recipeData.name}</h3>
                <p className='recipe-description'>{recipeData.description.slice(0, 120)}...</p>
                <button className="details-btn">see details</button>
            </section>
        </div>
    )
}

export default Card