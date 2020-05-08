import React from 'react';
import { Link } from 'react-router-dom';

import Main from './main';

const Header = () => (
  <div className="header-bar">
    <Link className="logo" to="/"></Link>
    <div className="header-links">
      <Link className="link" to="/about">
        About
      </Link>
      <Link className="link" to="/projects">
        Projects
      </Link>
      <Link className="link" to="/contact">
        Contact
      </Link>
    </div>
  </div>
)

export default Header;