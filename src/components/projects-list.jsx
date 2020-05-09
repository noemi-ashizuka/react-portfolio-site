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
        <h1 className="page-title">All my Projects</h1>
        <div className="project-list">
          {
            collections.map(({id, ...otherCollectionProps }) => (
              <ProjectCard key={id} {...otherCollectionProps} />
            ))
          }
        </div>
      </div>);
  }
}

export default ProjectsList;