import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../assets/stylesheets/project-card.scss';

class ProjectCard extends Component {
  constructor({ props }) {
    super(props);

  }

  render() {
    
    return(
      <div className='project-card'>
        <img src={ this.props.imagesUrls } alt="images of websites" className="project-main-image"></img>
        <div className="project-text">
          <Link to={`/projects/${this.props.id}`}><h1 className='project-title'>{ this.props.title }</h1></Link>
          <h2 className="project-specs">{ this.props.specifications }</h2>
          <p className="project-tech">{ this.props.technologies.map((tech) =>( `${tech.name} ` ))}</p>
        </div>
      </div>
    )
  }
  }

export default ProjectCard;