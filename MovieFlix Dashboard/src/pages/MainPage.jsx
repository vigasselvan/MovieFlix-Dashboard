import Header from '../components/Header.jsx'
import '../styles/styles.css'
import Footer from '../components/Footer.jsx'
import { useState } from 'react';

function MainPage(){
    const [MovieSearched, setMovieSearched] = useState('');
    
    function searchMovie(){
        const fetchData = async () => {
      try {
        let url = `http://www.omdbapi.com/?t=${MovieSearched}`;
        const apiKey = process.env.api_key;
        const response = await fetch(`http://www.omdbapi.com/?t=${MovieSearched}&apikey=${apiKey}`); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const json = await response.json();
        setData(json);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    }


    function checkClick(e){
        if(e.key === "Enter"){
            searchMovie();
        }else if(e.button === 0){
            searchMovie();
        }
    }

    return (
        <>
            <Header />

            <div className='mainContent'>
                <div className='searchArea'>
                    <input type="text" name="search" placeholder="Search Movie.." onKeyDown={checkClick} className='searchBox' value={MovieSearched}
        onChange={(e) => setMovieSearched(e.target.value)}></input>
                    <button className='searchBtn' onClick={checkClick}>Search 🔍</button>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default MainPage