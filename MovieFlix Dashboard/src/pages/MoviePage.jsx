import { useLocation } from "react-router-dom";
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'   
import '../styles/styles.css'

function MoviePage(){
    const { state } = useLocation();
    const genre = state.movie.Genre ? state.movie.Genre.split(",") : [];
    console.log(genre);
    console.log(state.movie);

    return (
        <div>
            <Header className='headerLogin' />

            <div className="Moviedetails">
                <h1>{state.movie.Title}</h1>
                <p>{state.movie.Year} • {state.movie.Rated} • {state.movie.Runtime}</p>
                <div>
                    <img src={state.movie.Poster} alt="Movie poster"/>
                    <h3>⭐ <span style={{fontSize: '20px'}}>{state.movie.imdbRating}</span>/10</h3>
                </div>
                
                <div className="genre">
                    {genre.map((value, index) => (
                        <span key={index} style={{ marginRight: '10px' }}>
                            {value}
                        </span>
                    ))}
                </div>

                <hr/>
                <h3>Director: {state.movie.Director}</h3>
                <hr />
                <h3>Cast: {state.movie.Actors}</h3>
                <hr />
                
                <h3>Storyline: {state.movie.Plot}</h3>
            </div>

            <Footer />
        </div>
    );
}

export default MoviePage