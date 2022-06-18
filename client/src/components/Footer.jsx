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
import CameraIcon from "@mui/icons-material/Camera";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-links">
        <div className="footer-link-wrapper"></div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <Typography
            variant="h5"
            align="inherit"
            gutterBottom
            color="#e91e63"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              textDecoration: "none",
            }}
          >
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
