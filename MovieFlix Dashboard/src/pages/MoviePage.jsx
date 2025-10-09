import { useLocation } from "react-router-dom";
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'   
import '../styles/styles.css'

function MoviePage(){
    const { state } = useLocation();
    const genre = state.movie.Genre ? state.movie.Genre.split(",") : [];
    const director = state.movie.Director ? state.movie.Director.split(",") : [];
    const actors = state.movie.Actors ? state.movie.Actors.split(",") : [];
    const imdbLink = "https://www.imdb.com/title/" + state.movie.imdbID;
    const googgleSearchLink = "https://www.google.com/search?q=";
    console.log(genre);
    console.log(state.movie);
    console.log(imdbLink);

    return (
        <div>
            <Header className='headerLogin' />

            <div className="Moviedetails">
                <h1>{state.movie.Title}</h1>
                <p>{state.movie.Year} • {state.movie.Rated} • {state.movie.Runtime}</p>

                <div className="mainMovieContent">
                    <div className="leftAlign">
                        <div className="genre">
                            {genre.map((value, index) => (
                                <span key={index} style={{ marginRight: '10px' }}>
                                    {value}
                                </span>
                            ))}
                        </div>
                        
                        <div className="leftMain">
                            <h3>{state.movie.Plot}</h3>
                            <hr className="flex-hr" />
                            <h3>Director: {director.map((value, index) => (
                                
                                <span key={index} style={{ marginRight: '10px' }}>
                                    <a href={googgleSearchLink + value.replace(/ '+', /g)} target="_blank" rel="noopener">{value}</a>
                                </span>
                            ))}</h3>
                            <hr className="flex-hr" />
                            <h3>Cast: {actors.map((value, index) => (
                                
                                <span key={index} style={{ marginRight: '10px' }}>
                                    <a href={googgleSearchLink + value.replace(/ '+', /g)} target="_blank" rel="noopener">{value}</a>
                                </span>
                            ))}</h3>
                            <hr className="flex-hr" />
                            <h3><span className="imdb">IMDB</span>: <a href={imdbLink} target="_blank" rel="noopener">IMDB Website</a></h3>
                        </div>
                    </div>
                    <div className="rightAlign">
                        <img src={state.movie.Poster} alt="Movie poster"/>
                        <h3>⭐ <span style={{fontSize: '24px'}}>{state.movie.imdbRating}</span>/10</h3>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default MoviePage