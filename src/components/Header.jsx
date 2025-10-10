import '../styles/styles.css'
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

function Header(){
    const navigate = useNavigate();

    function gotoHome(){
        navigate('/Main-Page')
    }

    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'Light');
    const [themeImg, setThemeImg] = useState('☀️');

    useEffect(() => {
        localStorage.setItem('theme', theme);
        document.documentElement.setAttribute('data-theme', theme); 
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'Light' ? 'Dark' : 'Light'));
        setThemeImg(theme === 'Light' ? '☀️' : '🌙');
    };

    return (
        <div className="header">
            <h1 onClick={gotoHome}>MovieFlix</h1>
            <button onClick={toggleTheme}>{themeImg}</button>
        </div>
    )
}

export default Header