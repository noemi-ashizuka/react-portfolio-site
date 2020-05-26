import React, { Component } from 'react';

import ABOUT_DATA from '../data/about-data';

import '../assets/stylesheets/about.scss';

class About extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: ABOUT_DATA
    }
  }

  render() {
    const {collections} = this.state;
    return(
      <div>
        {
          collections.map(({ title, imageUrl, description, ...otherCollectionProps }) => (
            <div className="page-container"> 
              <h1 className="page-title">{ title }</h1>
              <div className="content-container">
                
                <div className="content-image"><img src={ imageUrl } alt="web developer" className="about-photo"></img></div>
                <div className="content-text">{ description }</div>
              </div>
            </div>
          ))
        }
      </div>
    )
  }
}

export default About;