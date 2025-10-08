import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'   
import '../styles/styles.css'
import { useNavigate } from 'react-router-dom';

function LoginForm(){
    const navigate = useNavigate();

    function handleClick(){
        navigate('/Main-Page');
    }

    return (
        <div className='wholePage'>
            <Header className='headerLogin' />
            <div className='loginPage'>
                <h1>Login</h1>

                <h2>User Name</h2>
                <input type='text' className='inputBox' placeholder='User name'></input>
                <h2>Password</h2>
                <input className='inputBox' placeholder='Password'></input>
                <button className='loginBtn' onClick={handleClick}>Login</button>
            </div>

            <Footer />
        </div>
    );
}

export default LoginForm