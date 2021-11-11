import React, { useState } from "react";
import "./navbar.css";
import {
  FaFacebookSquare,
  FaYoutubeSquare,
  FaInstagramSquare,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [hamburgerState, setHamburgerState] = useState(false);

  return (
    <>
      <nav className="main-nav">
        {/* {1st Part} */}
        <div className="logo">
          <h2>
            <span>T</span>esla
            <span>V</span>ehical
          </h2>
        </div>

        {/* 2nd Menu Part */}
        <div
          className={
            hamburgerState ? "menu-link mobile-menu-link" : "menu-link"
          }
        >
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/service">Services</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>

        {/* 3rd Social Media Part */}
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a
                href="https://www.linkedin.com/in/sumit-malviya/"
                target="_blank"
              >
                <FaFacebookSquare className="facebook" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/sumit-malviya/">
                <FaYoutubeSquare className="youtube" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/sumit-malviya/">
                <FaInstagramSquare className="instagram" />
              </a>
            </li>
          </ul>

          {/* Hamburger 998*/}
          <div className="hamburger-menu">
            <a href="#">
              <GiHamburgerMenu
                onClick={() => setHamburgerState(!hamburgerState)}
              />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
