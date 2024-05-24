// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import axios from 'axios';
import './Register.css';
import { Link } from 'react-router-dom';
import arrow from '../assests/arrow.png';

function Register() {
    const [registerUser,setRegisterUser] =useState({
        username:"",
        email:"",
        password:""
    });
    const handleChange = (e,field) =>{
        setRegisterUser({...registerUser,[field]:e.target.value})
    }
    const handleSubmit = async (e) =>{
        e.preventDefault();
        try{
            const response = await axios.post('http://localhost:3000/users/register',{
                username:registerUser.username,
                email:registerUser.email,
                password:registerUser.password
            });
            if(response.status >= 200 && response.status < 300){
                window.location.href = '/login';
                window.alert('Registration successful');
            }else{
                console.log('Registration Failed')
            }
        }catch (error){
            console.log('An error occured while registering',error)
        }
    }
  return (
<>
<Link to="/login">
        <img src={arrow} className="back-arrow" alt="back"/>
        </Link>
<div className='register-page'>
    <form className='register-form' onSubmit={handleSubmit}>
        <div>
            <label className='register-label'>Email:</label>
            <input className='register-input' type="email" value={registerUser.email} onChange={(e) => handleChange(e,'email')} />
        </div>
        <div>
            <label className="register-label">Username:   </label>
            <input className="register-input" type="text" value={registerUser.username} onChange={(e) => handleChange(e, "username")} />
        </div>
        <div>
            <label className="register-label">Password: </label>
            <input className="register-input" type="password" value={registerUser.password} onChange={(e) => handleChange(e, "password")} />
        </div>
        <div className='registerBtn-container'>
            <button className="button-19" type="submit">Register</button>
        </div> 
    </form>
</div>
</>  )
}

export default Register