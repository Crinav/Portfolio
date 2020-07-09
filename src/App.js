import React, { Component } from 'react';
import Header from './components/Header';
import Apropos from './components/Apropos';
import Competences from './components/Competences';
import Projets from './components/Projets';
import Contact from './components/Contact';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { FiAlignRight } from 'react-icons/fi';

export default class App extends Component {
  
render(){
  return (
  
    <div className="App">
      <div class="wrapper">
      <Container fluid>
      <Header />
      <Apropos />
      <Competences />
      <Projets />
      <Contact />
      </Container>
    </div>
    </div>
  );
}
}


