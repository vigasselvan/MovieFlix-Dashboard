import Header from '../components/Header.jsx'
import '../styles/styles.css'
import Footer from '../components/Footer.jsx'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PieChartComponent from '../components/PieChartComponent.jsx';

function MainPage(){
    const [MovieSearched, setMovieSearched] = useState('');
    const [data, setData] = useState(null);

    function searchMovie(){
      
      const fetchData = async () => {
        const parsedMovie = MovieSearched.replace(/ /g, '+');
        try {
          let url = `https://www.omdbapi.com/?t=${parsedMovie}&plot=full`;
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
    
    const avgRatingByGenre = {genre: [], sumRating: [], count: [], avg: []};

    useEffect(() => {
      const allItems = {}; //storing all data in local storage to this variable
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        console.log(key);
        try {
          // Attempt to parse as JSON, otherwise store as raw string
          allItems[key] = JSON.parse(localStorage.getItem(key));
        } catch (e) {
          allItems[key] = localStorage.getItem(key);
        }
      }
      console.log(allItems);

      
      for(let i = 0; i < localStorage.length; i++){
        const key = localStorage.key(i);
        const genre = allItems[key].Genre ? allItems[key].Genre.split(",") : [];

        for(let j = 0; j < genre.length; j++){

          
          if (!avgRatingByGenre.genre.includes(genre[j])) {
            avgRatingByGenre.genre.push(genre[j]);
            avgRatingByGenre.count.push(1);
          }else{
            let index = avgRatingByGenre.genre.indexOf(genre[j]);
            avgRatingByGenre.count[index]++;
          }
          
          const index = avgRatingByGenre.genre.indexOf(genre[j]);
          if(avgRatingByGenre.sumRating[index] === "undefined"){
            avgRatingByGenre.sumRating[index] = 0;
          }
          avgRatingByGenre.sumRating[index] += Number(allItems[key].imdbRating[0]);
          // avgRatingByGenre.sumRating[index] += allItems[key].imdbRating; //check allItems[key].Rating is correct once
          
          avgRatingByGenre.avg[index] = Number(avgRatingByGenre.sumRating[index]) / Number(avgRatingByGenre.count[index]);
        }
        // avgRatingByGenre.genre[i]
        // console.log(allItems[key]);
      }
      console.log(avgRatingByGenre);
    }, []); // Empty dependency array ensures this runs only once on mount

    const genre = avgRatingByGenre.genre;
    const count = avgRatingByGenre.count;
     const pieChartData = {
        labels: genre,
        datasets: [
          {
            label: '# of Votes',
            data: count,
            backgroundColor: [
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',   // blue
            'rgba(255, 206, 86, 0.6)',   // yellow
            'rgba(75, 192, 192, 0.6)',   // teal
            'rgba(153, 102, 255, 0.6)',  // purple
            'rgba(255, 159, 64, 0.6)',   // orange
            'rgba(201, 203, 207, 0.6)',  // gray
            'rgba(0, 200, 83, 0.6)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
            ],
            borderWidth: 1,
          },
        ],
      };

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

                <PieChartComponent chartData={pieChartData} />
            </div>

            <Footer />
        </>
    )
}

export default MainPage