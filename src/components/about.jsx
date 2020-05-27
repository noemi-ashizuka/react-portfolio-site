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
          collections.map(({ title, imageUrl, description, techSkills, otherSkills, ...otherCollectionProps }) => (
            <div className="page-container"> 
              <div className="page-title"><h1>{ title }</h1></div>
              <div className="content-container">
                <div className="content-image"><img src={ imageUrl } alt="web developer" className="about-photo"></img></div>
                <div className="content-text">{ description.map((par) => <p>{par}</p>) }</div>
              </div>
              <div className="skills-container">
                <div className="left-list">
                  <h2 className="skill-title">Tech Skills</h2>
                  { techSkills.map((skill) => <ul><li>{skill}</li></ul>) }
                </div>
                <div className="right-list">
                <h2 className="skill-title">Other Skills</h2>
                  { otherSkills.map((skill) => <ul><li>{skill}</li></ul>) }
                </div>
              </div>
            </div>
          ))
        }
      </div>
    )
  }
}

export default About;