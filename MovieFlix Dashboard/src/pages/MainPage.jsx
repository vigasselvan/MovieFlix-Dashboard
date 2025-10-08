import Header from '../components/Header.jsx'
import '../styles/styles.css'
import Footer from '../components/Footer.jsx'

function MainPage(){
    function searchMovie(e){
        const MovieSearched = e.target.value;

    }

    function checkEnter(){
        const inputArea = document.querySelector(".searchBox");
        if(inputArea.key === 'Enter'){
            const MovieSearched = inputArea.value;
            console.log(MovieSearched);
        }
    }
    

    return (
        <>
            <Header />

            <div className='mainContent'>
                <div className='searchArea'>
                    <input type="text" name="search" placeholder="Search Movie.." className='searchBox' onKeyDown={checkEnter} onChange={searchMovie}></input>
                    <button className='searchBtn' onClick={checkEnter}></button>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default MainPage