/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';
import LoginImg from '../assests/login.jpg';
import { Link } from 'react-router-dom';
import arrow from '../assests/arrow.png';

function LoginForm() {
    const [loginUser, setLoginUser] = useState({
        username: "",
        password: ""
    });
    const [error, setError] = useState("");

    const handleChange = (e, field) => {
        setLoginUser({ ...loginUser, [field]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(""); 
        try {
            const response = await axios.post('http://localhost:3000/users/login', {
                username: loginUser.username,
                password: loginUser.password
            });
            if (response.status === 200) {
                window.location.href = '/';
                window.alert('Login successful');
                console.log(response.data);
            } else {
                setError('Login failed');
            }
        } catch (err) {
            if (err.response && err.response.status === 404) {
                setError('User not found');
            } else if (err.response && err.response.status === 401) {
                setError('Invalid username or password');
            } else {
                setError('An error occurred while logging in');
                console.error(err);
            }
        }
    };

    return (
        <>
        <Link to="/">
        <img src={arrow} className="back-arrow" alt="back"/>
        </Link>
        <div className='login-page'>
            <div className='login-image-section'>
            <img className="LoginImage" src={LoginImg} alt="LoginImage" />
            </div>
            <div className='login-form'>
            <form onSubmit={handleSubmit}>
                <label className='login-username-label'>Username:</label>
                <input
                    className='login-username-input'
                    type="text"
                    value={loginUser.username}
                    onChange={(e) => handleChange(e, "username")}
                />
                <br/>
                <label className='login-password-label'>Password:</label>
                <input
                    className='login-password-input'
                    type="password"
                    value={loginUser.password}
                    onChange={(e) => handleChange(e, "password")}
                />
                {error && <div className='error'>{error}</div>}
                <div className='loginBtn-container'>
                 <button className='button-19' type="submit">Login</button>
                </div>
                <div>
                    <h3>Not a member ? <Link to='/register'>Register here</Link> </h3>
                </div>
                <div>
                    <h4><Link to='/doctorlogin'>LOGIN</Link> as Doctor</h4>
                </div>
            </form>
            </div>
        </div>
        </>
    );
}

export default LoginForm;
