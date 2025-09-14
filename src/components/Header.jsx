import React, { useState } from 'react'
import logo from "/logo.png";


const Header = () => {
  const [btnName,setBtnName]=useState('Login')
   return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={logo} alt="Header Logo" />
      </div>
      <div className="nav-items">
        <ul>
        
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
           <button onClick={() => {setBtnName("Logout")}} className='login'>{btnName}</button>
        </ul>
      </div>
    </div>
  );
}

export default Header