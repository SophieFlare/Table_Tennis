import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/homepage.css';
import { useEffect, useState } from 'react';
import navAnimateElements from '../script/navgGsapAnimations.js';

const Navbar = () => {

  
  const [reloadKey, setReloadKey] = useState(0);
  useEffect(() => {
    console.log("useEffect is running...");

    navAnimateElements();
  }, [reloadKey]);
  
  const handleReload = () => {
    // Increment the reloadKey to force the component to remount
    setReloadKey(prevKey => prevKey + 1);
  };

  return (
    <div>
      
        <div className="nav" >
          <div className="nav-logo">Open The World</div>
          <div className="nav-links">
            <Link to="/aboutus">About us</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/services">Services</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
        <button onClick={handleReload}>Force Reload</button>
      <Link to="/">Home</Link>
    </div>
  )
}

export default Navbar