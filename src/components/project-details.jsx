import React, { Component } from 'react';
import Carousel from 'nuka-carousel';

import CustomButton from './custom-button';

import '../assets/stylesheets/project-details.scss';
import PROJECTS_DATA from '../data/projects-data';


class ProjectDetails extends Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    console.log(this.props.match.params.projectId)
    let project = PROJECTS_DATA.find(element => element.id === parseInt(this.props.match.params.projectId));
    
    
    return(
      <div className="page-container">
        <div className="spacer"></div>
        <div className="content-container">
          <div className="content-image">
            <div className="project-images">
              <Carousel>
              {project.imagesUrls.map((url, index) =>(
                <img 
                  src={url} 
                  alt="website project" 
                  key={index} 
                  className={project.id === 1 || project.id === 2 ? "project-slide-slim" : "project-slide"}>
                  </img>
                ))
              }
              </Carousel>
            </div>
          </div>
          <div className="content-text">
            <h1 className="project-title">{project.title}</h1>
            <div className="project-description">
              <h2>{project.specifications}</h2>
              <p>{project.description}</p>
              <ul className="tech-list">
              {project.technologies.map((tech, index) =>( <li key={index} className="tech-list-item"> {tech.name} </li>))}
              </ul>
            </div>
            <div className="project-links">
              <div className="buttons-list">
              {project.links.map((link, index) => (
                <a target="_blank" rel="noopener noreferrer" href={link.url} key={index}><CustomButton>{link.title}</CustomButton></a>
              ))} 
              <span>video coming soon</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}
  


  
 

export default ProjectDetails;

