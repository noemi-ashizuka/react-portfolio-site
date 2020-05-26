import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false
    };
  }

  handleToggle(e) {
    e.preventDefault();
    this.setState({
      isExpanded: !this.state.isExpanded
    });
  }

  render() {
    const { isExpanded } = this.state;
    return(
    <div className="header-bar">
      <Link className="logo" to="/"><i class="fas fa-code"></i></Link>
      <nav className="nav">
        <i
          className="fas fa-bars"
          aria-hidden="true"
          onClick={e => this.handleToggle(e)}
        />
        
        <div className="header-links">
          <ul className={`collapsed ${isExpanded ? "is-expanded" : ""}`}>
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
          </ul>
        </div>
      </nav>
    </div>
    )
  }
}

export default Header;