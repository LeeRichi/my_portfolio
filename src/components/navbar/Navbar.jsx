import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import './navbar.css';
import Chili from '../../image/red-chili-pepper.png';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 50) {  // you can adjust scroll trigger here
        setShowNavbar(true);
      } else {
        // setShowNavbar(false);
      }
  }

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar ${showNavbar ? 'visible' : 'hidden'}`}>
      <div className="chili-wrapper">
        <img src={Chili} alt="chili" className="chili-icon" />
      </div>
      <ul className="navbar-nav">
        {/* <li className="nav-item">
          <Link className="nav-link" to="/">
            <span className="link-text">Home</span>
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="">
            <span className="link-text">About Me</span>
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="">
            <span className="link-text">Projects</span>
          </Link>
        </li> */}

        <li className="nav-item">
          <button className="nav-link" onClick={() => scrollToSection('intro')}>
            <span className="link-text">Home</span>
          </button>
        </li>

        <li className="nav-item">
          <button className="nav-link" onClick={() => scrollToSection('about')}>
            <span className="link-text">About Me</span>
          </button>
        </li>

        <li className="nav-item">
          <button className="nav-link" onClick={() => scrollToSection('work')}>
            <span className="link-text">Projects</span>
          </button>
        </li>

      </ul>
    </nav>
  );
};

export default Navbar;
