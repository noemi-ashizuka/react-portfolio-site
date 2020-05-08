import React from 'react';
import Home from './homepage';
import { Switch, Route } from 'react-router-dom';

const Main = () => (
  <Switch>
    <Route exact path="/" component={Home} />
  </Switch>
)

export default Main;