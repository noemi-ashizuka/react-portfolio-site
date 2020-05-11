import React, { Component } from 'react';

import '../assets/stylesheets/project-details.scss';
import PROJECTS_DATA from '../data/projects-data';


class ProjectDetails extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    let project = PROJECTS_DATA.find(element => element.id === parseInt(this.props.match.params.projectId))
    return(
      <div className="page-container">
        <h1 className="project-title">{project.title}</h1>
        <div className="project-images">
          <img src={project.imagesUrls}></img>
        </div>
        <div className="project-description">
          <h2>{project.specifications}</h2>
          <p>{project.description}</p>
          <p>{project.technologies.map((tech) =>( `${tech.name} ` ))}</p>
        </div>
        <div className="project-links">
          {project.links.map((link) => (<a href="/" className="button-main">{link.github}</a>))}
        </div>
      </div>
    )
  }
}
  


  
 

export default ProjectDetails;

