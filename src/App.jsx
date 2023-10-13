
import './App.css'

function App() {

  return (
    <div className='App'>
      <div className='left-side-content'>
        <h1 id='title'>Recipe Box</h1>
        <h2 id='tagline'> Unleash your <span id='light_text'>inner </span>chef</h2>
        <p id='landing_p'>Find recipes for the food you love and flavors you didn't know existed!</p>
        <div className='input-wrapper'><input type='text' placeholder='Search by ingredient or dish name' className='search-input'></input>
          <button className='search-button'>Search</button>
        </div>
      </div>
      <div className='right-side-content'><img src='/assets/mainPicture.jpg' className='image'></img></div>
    </div>
  )
}

export default App
