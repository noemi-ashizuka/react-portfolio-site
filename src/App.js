import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Main from './components/main';
import Header from './components/header';
import Footer from './components/footer';

function App() {
  return (
  <div>
    <Header />
    <Main /> 
    <Footer />
  </div>
  );
}

export default App;
