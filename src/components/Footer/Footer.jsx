import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">

        {/* Left */}
        <p className="footer__text">
          © {new Date().getFullYear()} Jmik Thang. All rights reserved.
        </p>

        {/* Right */}
        <div className="footer__links">
          <a href="https://github.com/JMIK-THANG" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/jmik-thang-8b6728179/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="mailto:jmikthang5@gmail.com">
            Email
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
