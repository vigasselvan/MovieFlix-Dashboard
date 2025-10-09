import '../styles/styles.css'
import { useNavigate } from 'react-router-dom';

function Header(){
    const navigate = useNavigate();

    function handleClick(){
        navigate('/Dashboard');
    }

    function gotoHome(){
        navigate('/Main-Page')
    }

    return (
        <div className="header">
            <h1 onClick={gotoHome}>MovieFlix</h1>
            <h3 onClick={handleClick}>Dashboard</h3>
        </div>
    )
}

export default Header