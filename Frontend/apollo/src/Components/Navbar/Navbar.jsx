// eslint-disable-next-line no-unused-vars
import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from "../assests/logo.jpeg";
import account from '../assests/account.png'
import "./Navbar.css";
import Cookies from 'js-cookie';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverCloseButton,
} from '@chakra-ui/react'

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(Cookies.get('loggedIn') === 'true');

  const handleLogout = (e) => {
      e.preventDefault();
      console.log("Logging out...");
      Cookies.remove('loggedIn', { path: '/' });
      setIsLoggedIn(false); 
  };
  return (
    <nav className='nav-section'>
      <ul>
        <li><img className='logo' src={logo} alt="Logo" /></li>
        <li><Link to="/" style={{ textDecoration: 'none' }}>HOME</Link></li>
        <li><Link to="/appointment" style={{ textDecoration: 'none' }}>APPOINTMENT</Link></li>
        <li><Link to="/queries" style={{ textDecoration: 'none' }}>QUERIES</Link></li>
        <li className="account-container">
        {isLoggedIn ? (
        <Link onClick={handleLogout}>Logout</Link> 
          ) : (
          <Popover>
            <PopoverTrigger>
              <img className='account' src={account} cursor='pointer' alt="account" />
            </PopoverTrigger>
            <PopoverContent style={{ border: '1px solid #ccc', backgroundColor:"#CAF0F8",margin:'10px',padding: '1em' }}>
              <PopoverCloseButton style={{position:'relative',width:'20px',marginLeft:"300px",border:'none',backgroundColor:'transparent'}}/>
              <Link style={{position:'relative',right:'200px',textDecoration: 'none' }} to='/login'>Login</Link>
            </PopoverContent>
            </Popover>
          )}
          </li>
      </ul>
    </nav>
  );
}

export default Navbar;
