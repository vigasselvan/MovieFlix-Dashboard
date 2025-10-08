import Header from '../components/Header.jsx'
import '../styles/styles.css'

function MainPage(){
    return (
        <>
            <Header />
            <h1>Search Movie</h1>
            <input className='inputBox'></input>
            <button className='searchbrn'>Search</button>
        </>
    )
}

export default MainPage