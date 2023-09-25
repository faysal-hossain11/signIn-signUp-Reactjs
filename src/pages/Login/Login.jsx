import React, { useId, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [userInfo, setUserInfo] = useState({
        username: "",
        password: ""
    });

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        const loginInfo = JSON.parse(localStorage.getItem("sigin-signup"));
        if(loginInfo.username === userInfo.username && loginInfo.password === userInfo.password){
            console.log("successfully login");
        }else{
            console.log("incarret usename and password!");
        }
        navigate('/');
    }
    return (
        <div className='w-[1320px] m-auto text-center mt-[100px] mb-[200px]'>
            <div className='w-[400px] py-10 px-6 bg-slate-500 rounded-md m-auto'>
                <h1 className='text-center mb-10'>login</h1>
                <form onSubmit={handleLoginSubmit}>
                    <div>
                        <label className='mb-3 text-[20px]'>UserName</label>
                        <input className='w-full py-2 px-2 rounded-md mb-5' type="text" placeholder='username' value={userInfo.username} onChange={(e) => setUserInfo({ ...userInfo, username: e.target.value })} required />
                    </div>
                    <div>
                        <label className='mb-3 text-[20px]'>Password</label>
                        <input className='w-full py-2 px-2 rounded-md mb-5' type="password" placeholder='password' value={userInfo.password} onChange={(e) => setUserInfo({ ...userInfo, password: e.target.value })} required />
                    </div>
                    <div className='text-center'>
                        <button className='bg-[#3046c4] hover:bg-[#ae4cd4] mb-5' type='submit'> Login</button>
                    </div>
                    <div>
                        <p className='text-center'>you dont hava any account? <Link className=' text-cyan-300 hover:text-yellow-600' to={'/signup'}>signup</Link> </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;