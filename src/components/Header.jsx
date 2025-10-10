import '../styles/styles.css'
import { useNavigate } from 'react-router-dom';

function Header(){
    const navigate = useNavigate();

    function gotoHome(){
        navigate('/Main-Page')
    }

    return (
        <div className="header">
            <h1 onClick={gotoHome}>MovieFlix</h1>
        </div>
    )
}

export default Header