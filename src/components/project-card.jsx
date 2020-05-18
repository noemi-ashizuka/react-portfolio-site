import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import CustomButton from './custom-button';

import '../assets/stylesheets/project-card.scss';

class ProjectCard extends Component {
  constructor({ props }) {
    super(props);

  }

  render() {
    
    return(
      <div className='project-card'>
        <img src={ this.props.titleImg } alt="images of websites" className="project-main-image"></img>
        <div className="project-text">
          <Link to={`/projects/${this.props.id}`}><h1 className='project-title'>{ this.props.title }</h1></Link>
          <h2 className="project-specs">{ this.props.technologies.map((tech) =>( `${tech.name} ` ))}</h2>
          <Link to={`/projects/${this.props.id}`}><CustomButton className="card-button">See more</CustomButton></Link>
        </div>
      </div>
    )
  }
  }

export default ProjectCard;