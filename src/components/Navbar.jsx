import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/homepage.css';

const Navbar = () => {
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
      <Link to="/">Home</Link>
    </div>
  )
}

export default Navbar