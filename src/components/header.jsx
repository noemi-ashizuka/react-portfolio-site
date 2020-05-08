import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <div className="header-bar">
    <Link className="logo" to="/"></Link>
    <div className="header-links">
      <Link className="link" to="/about">
        About
      </Link>
      <span className="divisor">/</span>
      <Link className="link" to="/projects">
        Projects
      </Link>
      <span className="divisor">/</span>
      <Link className="link" to="/contact">
        Contact
      </Link>
    </div>
  </div>
)

export default Header;