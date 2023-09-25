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
        navigate('/')
    }

    return (
        <div>
            
            <div className='w-[400px] py-10 px-6 bg-slate-500 rounded-md'>
                <h1 className='mb-10'>SignUp</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label className='d-block left-0 text-[22px]'>User Name:</label>
                        <input className='w-full outline-0 py-3 px-2 rounded-md bg-slate-800 mb-5' type="text" placeholder='user name' value={userInfo.username} onChange={(e) => setUserInfo({...userInfo, username:e.target.value})} />
                    </div>
                    <div>
                        <label className='d-block left-0 text-[22px]'>Email</label>
                        <input className='w-full outline-0 py-3 px-2 rounded-md bg-slate-800 mb-5' type="email" placeholder='email' value={userInfo.email} onChange={(e) => setUserInfo({...userInfo, email:e.target.value})} />
                    </div>
                    <div>
                        <label className='d-block left-0 text-[22px]'>Password</label>
                        <input className='w-full outline-0 py-3 px-2 rounded-md bg-slate-800 mb-5' type="password" placeholder='password' value={userInfo.password} onChange={(e) => setUserInfo({...userInfo, password:e.target.value})}/>
                    </div>
                    <div>
                        <button type='submit' className=' bg-blue-700 mb-5'>Sign up</button>
                    </div>
                    <div>
                        <p>you hava already account? <Link to={'/'} className=' text-cyan-300 hover:text-cyan-100'>Login</Link> </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;