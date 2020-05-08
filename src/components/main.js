import React from 'react';
import Home from './homepage';
import About from './about';
import ProjectsList from './projects-list';
import Contact from './contact';
import { Switch, Route } from 'react-router-dom';

const Main = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/projects" component={ProjectsList} />
    <Route path="/contact" component={Contact} />
  </Switch>
)

export default Main;