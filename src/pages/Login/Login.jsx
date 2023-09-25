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
        navigate('/home');
    }
    return (
        <div>
            <div className='w-[400px] py-10 px-6 bg-slate-500 rounded-md'>
                <h1>login</h1>
                <form onSubmit={handleLoginSubmit}>
                    <div>
                        <label>UserName</label>
                        <input type="text" placeholder='username' value={userInfo.username} onChange={(e) => setUserInfo({...userInfo, username:e.target.value})}/>
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="password" placeholder='password' value={userInfo.password} onChange={(e) => setUserInfo({...userInfo, password:e.target.value})} />
                    </div>
                    <div>
                        <button type='submit'> Login</button>
                    </div>
                    <div>
                        <p>you dont hava any account? <Link to={'/signup'}>signup</Link> </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;