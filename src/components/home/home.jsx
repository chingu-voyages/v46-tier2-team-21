import React,{useState} from 'react';
import SearchBar from '../searchbar/searchbar';
import chefHat from '../../assets/chefhat.svg';
import { useNavigate } from 'react-router-dom';


function Home() {

    const navigate = useNavigate();
    const [searchResults, setSearchResults] = useState({data: {}, error: null, loading: false})
    const searchedRecipes = searchResults.data.results
    const totalCount = searchResults.data.count

  return (
    <>
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

        <SearchBar setSearchResults={setSearchResults}/>
      </div>
      <div className='right-side-content'><img src='/assets/mainPicture.jpg' className='image'></img></div>
    </div>
    
    { searchedRecipes && navigate("/explore", {state: {count: totalCount, searchedRecipes: searchedRecipes}}) }
    
    {/* we can also style the following */}

    { searchResults.loading && <p>finding recipes...</p> }
    { searchResults.error && <p>Could not search, please try again</p> }
  </>
  )
}

export default Home;
