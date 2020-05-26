import React, { Component } from 'react';
import ProjectCard from './project-card';
import PROJECTS_DATA from '../data/projects-data';


class ProjectsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: PROJECTS_DATA
    }
  }

  render() {
    const {collections} = this.state;
    return(
      <div className="page-container">
        <div className="page-title"><h1>Projects</h1></div>
        <div className="project-list">
          {
            collections.map(({id, ...otherCollectionProps }) => (
              <ProjectCard {...otherCollectionProps} key={id} id={id} />
          ))}
        </div>
      </div>);
  }
}

export default ProjectsList;