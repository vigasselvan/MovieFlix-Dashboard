import Header from '../components/Header.jsx'
import '../styles/styles.css'
import Footer from '../components/Footer.jsx'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function MainPage(){
    const [MovieSearched, setMovieSearched] = useState('');
    const [data, setData] = useState(null);

    function searchMovie(){
      
      const fetchData = async () => {
        const parsedMovie = MovieSearched.replace(/ /g, '+');
        try {
          let url = `http://www.omdbapi.com/?t=${parsedMovie}&plot=full`;
          const apiKey = import.meta.env.VITE_API_URL;
          const response = await fetch(url + "&apikey=" + `${apiKey}`); // Replace with your API endpoint
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const json = await response.json();

          setData(json); //its async and takes time, so untill that use json itself instead of data

          if(!localStorage.getItem(json.Title)){
            localStorage.setItem(json.Title, JSON.stringify(json));
          }
          // Retrieving JSON data
          const storedData = JSON.parse(localStorage.getItem(json.Title));
        } catch (error) {
          console.log(error);
        }
      };

      fetchData();
    }

    function checkClick(e){
        if(e.key === "Enter" || e.button === 0){
            searchMovie();
        }
    }

    useEffect(() => {
      const allItems = {}; //storing all data in local storage to this variable
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        try {
          // Attempt to parse as JSON, otherwise store as raw string
          allItems[key] = JSON.parse(localStorage.getItem(key));
        } catch (e) {
          allItems[key] = localStorage.getItem(key);
        }
      }
      console.log(allItems);

      const avgRatingByGenre = {genre: [], rating: [], count: [], avg: []};
      for(let i = 0; i < localStorage.length; i++){
        const key = localStorage.key(i);
        console.log(allItems[key]);
      }
    }, []); // Empty dependency array ensures this runs only once on mount



    const navigate = useNavigate();

    return (
        <>
            <Header />

            <div className='mainContent'>
                <div className='searchArea'>
                    <input type="text" name="search" placeholder="Search Movie.." onKeyDown={checkClick} className='searchBox' value={MovieSearched}
        onChange={(e) => setMovieSearched(e.target.value)}></input>
                    <button className='searchBtn' onClick={checkClick}>Search 🔍</button>
                </div>

                <div>
                    {data !== null && (
                    <div className='movieCard' onClick={() => navigate('/Movie-Page', { state: { movie: data } })}>
                      <img src={data.Poster} alt="Movie Poster" />
                      <h2>{data.Title}</h2>
                      <h4><span className='released'>Released:</span> {data.Released}</h4>
                    </div>
                    )}
                </div>
            </div>

            <Footer />
        </>
    )
}

export default MainPage