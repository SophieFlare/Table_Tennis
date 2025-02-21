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