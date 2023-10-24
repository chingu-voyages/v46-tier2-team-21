import Card from '../card/card'
import './searchresults.css'

const SearchResults = ({ searchedRecipes }) => {
  
  // we can style this as a scrollable list of cards
    return (
      <>
        {searchedRecipes.map(recipeData => {
          return (
            <Card key={recipeData.id} recipeData={recipeData} />
          )
        })}
      </>
    )
}

export default SearchResults