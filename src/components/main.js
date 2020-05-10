import React from 'react';
import Home from './homepage';
import About from './about';
import ProjectsList from './projects-list';
import ProjectDetails from './project-details';
import Contact from './contact';
import { Switch, Route } from 'react-router-dom';

const Main = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route exact path="/projects" component={ProjectsList} />
    <Route path="/contact" component={Contact} />
    <Route path="/projects/:projectId" component={ProjectDetails} />
  </Switch>
)

export default Main;