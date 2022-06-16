import React from "react";
import "./Footer.css";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { Typography } from "@mui/material";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <a href="/sign-up">How it works</a>
            <a href="/">Testimonials</a>
          </div>
          <div className="footer-link-items">
            <h2>Contact Us</h2>
            <a href="/">Contact</a>
            <a href="/">Support</a>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Social Media</h2>
            <a href="/">Instagram</a>
            <a href="/">Facebook</a>
            <a href="/">Youtube</a>
            <a href="/">Twitter</a>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <Typography variant="h5" align="inherit" gutterBottom color="#e91e63">
            Collab||8 © 2022
          </Typography>

          <div className="social-icons">
            <a
              href="/"
              className="social-icon-link"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
            <a
              href="/"
              className="social-icon-link"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="/"
              className="social-icon-link"
              to={"//www.lighthouselabs.com"}
              target="_blank"
              aria-label="Youtube"
            >
              <FaYoutube />
            </a>
            <a
              href="/"
              className="social-icon-link"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="/"
              className="social-icon-link"
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
