import React from "react";

const Footer = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer>
      <div className="container">

        <div className="banner">
          <div className="left">HARSH</div>

          <div className="right">
            <p>DURG, CHHATTISGARH, <b>INDIA</b></p>
            <p><b>Open:</b> 05:00 PM - 12:00 AM</p>
            <p><b>Contact:</b> +91 8085565084</p>
          </div>
        </div>

        <div className="banner">
          <div className="left">
            <p><b>Developed By</b> HARSH SAHU</p>
          </div>
          <div className="right">
            <p><b>All Rights Reserved</b> © 2025.</p>
          </div>
        </div>

        {/* FLOATING TOP BUTTON */}
        <button className="topBtn" onClick={scrollToTop}>
          ↑
        </button>

      </div>
    </footer>
  );
};

export default Footer;