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

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    const {collections} = this.state;
    return(
      <div>
        {
          collections.map(({ title, imageUrl, myStory, groupPhotoUrl, aboutTech, links, techSkills, otherSkills, ...otherCollectionProps }) => (
            <div className="page-container"> 
              <div className="page-title"><h1>{ title }</h1></div>
              <div className="content-container">
                <div className="content-image">
                  <img src={ imageUrl } alt="web developer" className="about-photo"></img>
                </div>
                <div className="content-text">
                  <h2>Background</h2>
                  { myStory.map((par, index) => <p key={index}>{par}</p>) }
                </div>
              </div>
              <div className="content-container">
                <div className="content-text">
                  <h2>About programming</h2>
                  { aboutTech.map((par, index) => <p key={index}>{par}</p>) }
                </div>
                <div className="content-image">
                  <img src={ groupPhotoUrl } alt="Le Wagon batch 363" className="about-photo"></img>
                </div>
              </div>
              <div className="feat">
                <h2>Featured</h2>
                  <ul className="feat-list">
                    { links.map((link) => 
                        <li className="feat-item" key={link.id}>
                          <a target="_blank" rel="noopener noreferrer" href={link.url}>{link.icon} {link.title}</a>
                        </li>
                    )}
                  </ul>
                </div>
              <div className="skills-container">
                <div className="left-list">
                  <h2 className="skill-title">Tech Skills</h2>
                  <ul>
                    { techSkills.map((skill, index) => <li key={index}>{skill}</li>) }
                  </ul>
                </div>
                <div className="right-list">
                <h2 className="skill-title">Other Skills</h2>
                <ul>
                  { otherSkills.map((skill, index) => <li key={index}>{skill}</li>) }
                </ul>
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