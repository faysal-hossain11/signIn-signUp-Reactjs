import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();

    const handleHeaderLogin = () => {
        navigate('/login');
    };
    const handleHeaderSignUp = () => {
        navigate('/signup');
    };
    return (
        <>
            <div className='bg-[#4340ff] '>
                <div className='w-[1320px] m-auto py-5 text-center flex item-center justify-between'>
                    <div>
                        <Link className='text-white hover:text-white px-4 ' to='/about'>About </Link>
                        <Link className='text-white hover:text-white px-4 ' to='/blog'>Blog</Link>
                    </div>
                    <div className='gap-4'>
                        <button type='submit ' className=' bg-slate-700 mr-5' onClick={handleHeaderLogin}>Login</button>
                        <button type='submit ' className=' bg-slate-700' onClick={handleHeaderSignUp}>SignIn</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;