
import "./searchbar.css"


return (
    <div className='input-wrapper'>
        <form>
            <input type='text' placeholder='Search by ingredient or dish name' className='search-input'>
            </input>
            <button className='search-button' >Search</button>
        </form>
    </div>
)
}

export default SearchBar