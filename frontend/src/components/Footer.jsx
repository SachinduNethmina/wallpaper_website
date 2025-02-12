import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-logo">
          <h3>Flickezz Wallpapers</h3>
        </div>
        <div className="footer-links">
          <Link to="/about" className="footer-link">
            About
          </Link>
          <Link to="/wallpapers" className="footer-link">
            Wallpapers
          </Link>
          <Link to="/contact" className="footer-link">
            Contact
          </Link>
        </div>

        <div className="social-media">
          <a
            href="https://www.facebook.com"
            className="social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://www.instagram.com"
            className="social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://www.twitter.com"
            className="social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Flickezz Wallpapers. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
