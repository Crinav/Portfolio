import React, { Component } from 'react';
import { Col , Row} from 'react-bootstrap';

export default class Competences extends Component {
  render() {
    return (
        <section id="competences" className="competences">
            <div className="scroll-bg">
              <h1 className="text-center pt-5 pb-3 comp_title">Compétences</h1>
              <Row className="comp">
                
            <Col>
              <img className="ml-5 mr-5" src="./image/langages/html.png" alt="logo" width="128"/>
            
              <img className="ml-5 mr-5" src="./image/langages/wordpress.png" alt="logo" width="128"/>
            
              <img  className="ml-5 mr-5" src="./image/langages/css.png" alt="logo" width="128"/>
            
              <img className="ml-5 mr-5" src="./image/langages/mysql.png" alt="logo" width="128"/>
            
              <img  className="ml-5 mr-5" src="./image/langages/js.png" alt="logo" width="128"/>
            
              <img className="ml-5 mr-5" src="./image/langages/jquery.png" alt="logo" width="128"/>
            </Col>
            </Row>
            <Row className="comp pb-5">
            <Col>
              <img  className="ml-5 mr-5" src="./image/langages/php.png" alt="logo" width="128"/>
              
              <img className="ml-5 mr-5" src="./image/langages/mongodb.png" alt="logo" width="128"/>
            
              <img className="ml-5 mr-5" src="./image/langages/react.png" alt="logo" width="128"/>
             
              <img className="ml-5 mr-5" src="./image/langages/laravel.png" alt="logo" width="128"/>
            
              <img className="ml-5 mr-5" src="./image/langages/nodejs.png" alt="logo" width="128"/>
              
              <img className="ml-5 mr-5" src="./image/langages/symfony.png" alt="logo" width="128"/>
            </Col>
            </Row>
            </div>
        </section>
    )
  }
}