import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const SignUp = () => {
    const navigate = useNavigate();
    const [userInfo, setUserInfo] = useState({
        username: "",
        email: "",
        password: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("sigin-signup", JSON.stringify(userInfo));
        navigate('/login')
    }

    return (
        <div className='w-[1320px] m-auto text-center mt-[100px]'>
            <div className='w-[400px] py-10 px-6 bg-slate-500 rounded-md m-auto'>
                <h1 className='mb-10 text-center'>SignUp</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label className='d-block left-0 text-[22px]'>User Name:</label>
                        <input className='w-full outline-0 py-3 px-2 rounded-md bg-slate-800 mb-5' type="text" placeholder='user name' value={userInfo.username} onChange={(e) => setUserInfo({ ...userInfo, username: e.target.value })} required />
                    </div>
                    <div>
                        <label className='d-block left-0 text-[22px]'>Email</label>
                        <input className='w-full outline-0 py-3 px-2 rounded-md bg-slate-800 mb-5' type="email" placeholder='email' value={userInfo.email} onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })} required />
                    </div>
                    <div>
                        <label className='d-block left-0 text-[22px]'>Password</label>
                        <input className='w-full outline-0 py-3 px-2 rounded-md bg-slate-800 mb-5' type="password" placeholder='password' value={userInfo.password} onChange={(e) => setUserInfo({...userInfo, password:e.target.value})} required />
                    </div>
                    <div className='text-center'>
                        <button type='submit' className=' bg-[#3046c4] hover:bg-[#ae4cd4] outline-none border-none mb-5'>Sign up</button>
                    </div>
                    <div>
                    <p className='text-center'>you hava already account? <Link to={'/login'} className=' text-cyan-300 hover:text-yellow-600'>Login</Link> </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;