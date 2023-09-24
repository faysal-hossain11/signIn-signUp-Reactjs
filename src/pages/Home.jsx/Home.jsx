import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/')
    }
    return (
        <div>
            <h1>Home </h1>
            <button type='submit' onClick={handleLogout}>logout</button>
        </div>
    );
};

export default Home;