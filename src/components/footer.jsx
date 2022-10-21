import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/stylesheets/footer.scss';

const Footer = () => (
  <div className="footer">
    <div className="footer-links">
      <a target="_blank" rel="noopener noreferrer" href="https://github.com/noemi-ashizuka" className="f-link"><i className="fab fa-github"></i></a>
      <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/salvina-noemi-calanducci/" className="f-link"><i className="fab fa-linkedin-in"></i></a>
      <Link className="f-link" to="/contact"><i className="fas fa-envelope"></i></Link>
    </div>
  </div>
)

export default Footer;
