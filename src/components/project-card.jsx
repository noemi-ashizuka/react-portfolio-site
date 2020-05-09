import React, { Component } from 'react';
import '../assets/stylesheets/project-card.scss';

const ProjectCard =({id, title, description, specifications, imagesUrls, technologies}) => (
  <div className='project-card'>
    <img src={ imagesUrls } className="project-main-image"></img>
    <div className="project-text">
      <h1 className='project-title'>{ title }</h1>
      <h2 className="project-specs">{ specifications }</h2>
      <p className="project-tech">{ technologies.map((tech) =>( `${tech.name} ` ))}</p>
    </div>
  </div>
)

export default ProjectCard;