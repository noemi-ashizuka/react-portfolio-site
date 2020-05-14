import React, { Component } from 'react';

import CustomButton from './custom-button';

import '../assets/stylesheets/project-details.scss';
import PROJECTS_DATA from '../data/projects-data';


class ProjectDetails extends Component {

  render() {
    let project = PROJECTS_DATA.find(element => element.id === parseInt(this.props.match.params.projectId));

    return(
      <div className="page-container">
        <h1 className="project-title">{project.title}</h1>
        <div className="project-images">
          {project.imagesUrls.map((url, index) =>(
            <img 
              src={url} 
              alt="image of the project" 
              key={index} 
              className={project.id === 1? "project-slide-slim" : "project-slide"}>
              </img>
            ))
          }
        </div>
        <div className="project-description">
          <h2>{project.specifications}</h2>
          <p>{project.description}</p>
          <p>{project.technologies.map((tech) =>( `${tech.name} ` ))}</p>
        </div>
        <div className="project-links">
          <div className="buttons-list">
          {project.links.map((link) => (
            <a href="/"><CustomButton key={link.id}>{link.url}</CustomButton></a>
           ))} 
          </div>
        </div>
      </div>
    )
  }
}
  


  
 

export default ProjectDetails;

