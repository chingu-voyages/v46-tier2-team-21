import './style.css'

const Search = () => {
    return (
      <div className='input-wrapper'><input type='text' placeholder='Search by ingredient or dish name' className='search-input'></input>
        <button className='search-button' >Search</button>
      </div>
    )
}

export default Search