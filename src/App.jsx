
import './App.css'
import chefHat from './assets/chefhat.svg'

function App() {

  return (
    <div className='App'>
      <div className='left-side-content'>
        <h1 id='title'>Recipe Box</h1>

        <div className='tagline-wrapper'>
          {/* tagline */}
          <p id='tagline'> Unleash your <span id='light_text'> inner </span> chef </p>

          {/* svg chefhat image */}
          <span><img src={chefHat}></img></span>
        </div>

        <p id='landing_p'>Find recipes for the food you love and flavors you didn't know existed!</p>
        <div className='input-wrapper'><input type='text' placeholder='Search by ingredient or dish name' className='search-input'></input>
          <button className='search-button' >Search</button>
        </div>
      </div>
      <div className='right-side-content'><img src='/assets/mainPicture.jpg' className='image'></img></div>
    </div>
  )
}

export default App
