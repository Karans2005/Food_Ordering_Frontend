import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>     The only thing we're serious about is food.
                Fresh ingredients, bold flavors, and no shortcuts.
                Because real taste deserves real effort.
                One bite, and you'll know we mean it.
              </p>
            </div>
            <p className="mid">
              Food isn't just fuel — it's an experience.
              From farm-fresh ingredients to the final bite,
              we pour heart into every dish we make.
              Because good food doesn't just fill you — it stays with you.
            </p>

          </div>
        </div>
      </section>
    </>
  );
};

export default About;
