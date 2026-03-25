import React from "react";
import Navbar from "./Navbar";

const HeroSection = () => {
  return (
    <section className="heroSection" id="heroSection">
      <Navbar />
      <div className="container">
        <div className="banner">
          <div className="largeBox">
            <h1 className="title" style={{color:'white'}}>Eat Fresh </h1>
          </div>
          <div className="combined_boxes">
           
            <div className="textAndLogo">
              <div className="textWithSvg">
                <h1 className=" title" id="title2" style={{color:'white'}}>Feel.. Great</h1>
              </div>
                <p className="para">   "Every bite filled with freshness, a new experience of taste. Pure, clean, and wholesome food – where quality lives in every ingredient. Enjoy it yourself, and share it with others too. Eat fresh, live better – because real taste comes straight from the heart."

</p>
              <img className="logo" src="restaurentLogo-png.webp" alt="logo"  />
            </div>
          </div>
        </div>
        <div className="banner">
          
          <div className="imageBox">
            <img src="home.png" alt="hero" />
          </div>
          {/* <h1 className="title dishes_title">Dishes</h1> */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
