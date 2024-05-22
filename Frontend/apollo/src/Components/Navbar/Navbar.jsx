// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import "./Navbar.css";
import logo from "../assests/logo.jpeg"; 
import account from '../assests/account.png'
import { Link } from 'react-router-dom'; 

function Navbar() {
  const [popupVisible, setPopupVisible] = useState(false);

  const togglePopup = () => {
    setPopupVisible(!popupVisible);
  };
  return (
    <nav className='nav-section'>
      <ul>
        <li><img className='logo' src={logo} alt="Logo" /></li>
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/appointment">APPOINTMENT</Link></li>
        <li><Link to="/queries">QUERIES</Link></li>
        <li className="account-container" onClick={togglePopup}>
          <img className='account' src={account} alt="account" />
          {popupVisible && (
            <div className="account-popup">
              <a href="#">Login</a>
              <a href="#">Logout</a>
            </div>
          )}
       </li>
      </ul>
    </nav>
    
  );
}

export default Navbar;
