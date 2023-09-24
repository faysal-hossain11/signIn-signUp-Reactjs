import { stringify } from 'postcss';
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
            
            <div className='w-[400px] py-10 px-6'>
                <h1>SignUp</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>User Name:</label>
                        <input type="text" placeholder='user name' value={userInfo.username} onChange={(e) => setUserInfo({...userInfo, username:e.target.value})} />
                    </div>
                    <div>
                        <label>Email</label>
                        <input type="email" placeholder='email' value={userInfo.email} onChange={(e) => setUserInfo({...userInfo, email:e.target.value})} />
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="password" placeholder='password' value={userInfo.password} onChange={(e) => setUserInfo({...userInfo, password:e.target.value})}/>
                    </div>
                    <div>
                        <button type='submit'>Sign up</button>
                    </div>
                    <div>
                        <p>you hava already account? <Link to={'/'}>Login</Link> </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;