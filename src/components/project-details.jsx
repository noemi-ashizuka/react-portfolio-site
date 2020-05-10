import React, { Component } from 'react';
import PROJECTS_DATA from '../data/projects-data';


class ProjectDetails extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    let project = PROJECTS_DATA.find(element => element.id === parseInt(this.props.match.params.projectId))
    return(
      <div>
        <h1>{project.title}</h1>
        <img src={project.imagesUrls}></img>
        <h2>{project.specifications}</h2>
        <p>{project.description}</p>
        <p>{project.technologies.map((tech) =>( `${tech.name} ` ))}</p>
        <p>{project.links.map((link) => (`${link.key}`))}</p>
      </div>
    )
  }
}
  


  
 

export default ProjectDetails;

