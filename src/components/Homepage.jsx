// src/pages/Homepage.js
import React, { useEffect, useState } from 'react';
import "../styles/homepage.css"; // Import your styles
import animateElements from '../script/gsapAnimations.js'; // Correct import (default export)

const Homepage = () => {
  const [reloadKey, setReloadKey] = useState(0);

  useEffect(() => {
    console.log("useEffect is running...");

    animateElements();
  }, [reloadKey]);  // Empty dependency array ensures the effect 

  const handleReload = () => {
    // Increment the reloadKey to force the component to remount
    setReloadKey(prevKey => prevKey + 1);
  };

  return (
    <div>
      <button onClick={handleReload}>Force Reload</button>
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
            src="images/opentheworld.webp"
            alt=""
          />
          <div className="hero-wrapper"></div>
          <div className="arrow">
            <ion-icon name="arrow-forward-sharp"></ion-icon>
          </div>
        </div>
        <div className="marquee">
          <span>
            BUTTERFLY BUTTERFLY BUTTERFLY BUTTERFLY BUTTERFLY BUTTERFLY
          </span>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
