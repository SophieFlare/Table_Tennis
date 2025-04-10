"use client"
// src/pages/Homepage.js
import React, { useEffect, useState } from 'react';
import "../styles/homepage.css"; // Import your styles
import animateElements from '../script/gsapAnimations.js'; // Correct import (default export)
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

const Homepage = () => {

  useGSAP(() => {
    gsap.from("h1", 2, {
    y: 50,
    opacity: 0,
    ease: "power4.inOut",
    delay: 1.5,
    stagger: {
      amount: 0.3,
    }
  });

  gsap.from(".play-wrapper, .pattern, .copy", 2, {
    scaleY: 0,
    ease: "power3.inOut",
    stagger: {
      amount: 0.3,
    },
    delay: 2.5,
  });

  gsap.from(".hr", 2, {
    width: "0",
    ease: "power3.inOut",
    delay: 3,
  });

  gsap.from(".btns", 2, {
    x: 50,
    opacity: 0,
    ease: "power3.inOut",
    delay: 3,
  });

  gsap.from(".play-btn", 2, {
    scale: 0,
    ease: "power3.inOut",
    delay: 3,
  });

  gsap.from(".hero-wrapper", 2, {
    width: "100%",
    ease: "power3.inOut",
    delay: 3,
  });

  gsap.from(".arrow", 2, {
    scale: "0",
    ease: "power3.inOut",
    delay: 3,
  });

  gsap.from(".marquee", 2, {
    bottom: "-10rem",
    ease: "power3.inOut",
    delay: 4,
  });




  })

  return (
    <main>
    <section>
      
      <div className="container">
        <div className="header">
          <div className="header-left col">
            <div className="item">
              <h1>Table</h1>
              <h1>Tennis</h1>
            </div>
          </div>
          <div className="header-right col">
            <div className="play-wrapper">
              <div className="play-btn">
                <ion-icon name="play-sharp"></ion-icon>
              </div>
            </div>
            <div className="pattern">✦ ✦ ✦</div>
            <div className="copy">
              <p>texttttttttttttttttttt</p>
            </div>
          </div>
        </div>
        <div className="btn-container">
          <div className="btns col">
            <div className="btn">
              <ion-icon name="analytics"></ion-icon>
              <span>2025 Best agency</span>
            </div>
            <div className="btn">
              <ion-icon name="analytics"></ion-icon>
              <span>World Class Agency</span>
            </div>
          </div>
          <div className="divider col">
            <div className="hr"></div>
          </div>
        </div>
        <div className="hero">
          <img 
            src="images/open_the_world.png"
            alt=""
          />
          <div className="hero-wrapper"></div>
          <div className="arrow">
            <ion-icon name="arrow-forward-sharp">
             
            </ion-icon>
            <img className="arrow-img" src="../../public/butterfly.png"/>
          </div>
        </div>
        <div className="marquee">
          <span>
            BUTTERFLY BUTTERFLY BUTTERFLY BUTTERFLY BUTTERFLY BUTTERFLY
            BUTTERFLY BUTTERFLY BUTTERFLY BUTTERFLY BUTTERFLY BUTTERFLY
            
          </span>
        </div>
      </div>
    </section>
    <section>
 
    </section>
    </main>
  );
}

export default Homepage;
