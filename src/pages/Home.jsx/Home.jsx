import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/login')
    }
    return (
        <div className='w-[1320px] m-auto text-center mt-12'>
            <h1>Home </h1>
            <button className=' bg-[#3046c4] hover:bg-[#ae4cd4] outline-none border-none mb-5' type='submit' onClick={handleLogout}>logout</button>
        </div>
    );
};

export default Home;