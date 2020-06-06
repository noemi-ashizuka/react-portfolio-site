import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Main from './components/main';
import Header from './components/header';
import Footer from './components/footer';
import HomePage from './components/homepage';
import About from './components/about';
import ProjectsList from './components/projects-list';
import Contact from './components/contact';
// to fix: match.params and /projects/:id route
//import ProjectDetails from './components/project-details';


function App() {
  return (
  <div>
    <Route exact path='/' component={HomePage} />
    <Route path='/about' component={About} />
    <Route exact path='/projects' component={ProjectsList} />
    <Route path='/contact' component={Contact} />
    <Header />
    <Main />
    <Footer />
  </div>
  );
}

export default App;
