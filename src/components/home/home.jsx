import {useEffect, useState} from 'react';
import SearchBar from '../searchbar/searchbar';
import Loader from '../loader/loader'
import chefHat from '/assets/chefhat.svg';
import { useNavigate } from 'react-router-dom';
import './home.css';


function Home() {

    const navigate = useNavigate();
    const [searchResults, setSearchResults] = useState({data: {}, error: null, loading: false})
    const searchedRecipes = searchResults.data.results

    useEffect(() => {
      if(searchedRecipes) {
        navigate("/explore", {state: { searchedRecipes: searchedRecipes}})
      }
    }, [navigate, searchedRecipes])

  return (
    <>
    <div className='landing-container'>
      <div className='left-side-content'>
        <h1 id='title'>Recipe Box</h1>

        <div className='tagline-wrapper'>
          {/* tagline */}
          <p id='tagline'> Unleash your <span id='light_text'> inner </span> chef </p>

          {/* svg chefhat image */}
          <span><img id='tagline-img' src={chefHat}></img></span>
        </div>

        <p id='landing_p'>Find recipes for the food you love and flavors you didn't know existed!</p>

        <SearchBar setSearchResults={setSearchResults}/>
      </div>
      <div className='right-side-content'><img src='/assets/mainPicture.jpg' className='image'></img></div>
    </div>
        
    {/* we can also style the following */}

    { searchResults.loading && <Loader />}
    { searchResults.error && <p>Could not search, please try again</p> }
  </>
  )
}

export default Home;
