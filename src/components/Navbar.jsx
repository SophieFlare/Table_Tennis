import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/homepage.css';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
 


const Navbar = () => {

useGSAP(() => {
  gsap.from(".nav-logo, .nav-links > a", 2, {
    top: "30px",
    opacity: 0,
    ease: "power4.inOut",
    delay: 1,
    stagger: {
      amount: 0.3,
    }
  })
  })
  return (
    <div>
      <div id="navbar-spacer"></div>
        <div id="navbar" className="nav" >
        <Link to="/">
          <div className="nav-logo">Open The World</div>
        </Link>
          <div className="nav-links">
            <Link to="/aboutus">About us</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/services">Shop</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
    </div>
  )
}

export default Navbar