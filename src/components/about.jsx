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
      <div className="page-container">
        <h1 className="page-title">About Me</h1>
          {
            collections.map(({ imageUrl, description, ...otherCollectionProps }) => (
              <div className="content-container">
                <div className="content-image">{ imageUrl }</div>
                <div className="content-text">{ description }</div>
              </div>
            ))
          }
      </div>
    )
  }
}

export default About;