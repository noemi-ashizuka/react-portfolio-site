import React, { Component } from 'react';
import Carousel from 'nuka-carousel';

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
          <Carousel>
          {project.imagesUrls.map((url, index) =>(
            <img 
              src={url} 
              alt="website project" 
              key={index} 
              className={project.id === 1? "project-slide-slim" : "project-slide"}>
              </img>
            ))
          }
          </Carousel>
        </div>
        <div className="project-description">
          <h2>{project.specifications}</h2>
          <p>{project.description}</p>
          <ul>
          {project.technologies.map((tech, index) =>( <li key={index}>{tech.name} </li>))}
          </ul>
        </div>
        <div className="project-links">
          <div className="buttons-list">
          {project.links.map((link, index) => (
            <a href="/" key={index}><CustomButton>{link.url}</CustomButton></a>
           ))} 
          </div>
        </div>
      </div>
    )
  }
}
  


  
 

export default ProjectDetails;

