import { useState } from 'react'
import './App.css'
import Search from './components/search/Search'
import chefHat from './assets/chefhat.svg'

function App() {
  const [searchResults, setSearchResults] = useState({data: {}, error: null, loading: false})

  console.log(searchResults)

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
        <Search setSearchResults={setSearchResults}/>
      </div>
      <div className='right-side-content'><img src='/assets/mainPicture.jpg' className='image'></img></div>
    </div>
  )
}

export default App
