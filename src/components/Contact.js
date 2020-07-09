import React, { Component } from 'react';
import { Col, Row, Container } from 'react-bootstrap';


export default class Contact extends Component {
  constructor(props) {
    super(props);
  this.state = {
    prenom:'',
    nom: '',
    email: '',
    entreprise:'',
    message:''
  };
  }
 

  render() {
    return (

      <footer id="contact" classNameName="contact pt-5">

        <h1>Me contacter</h1><br />
        <Container>
          <Row>
            <Col>
              <h4>Adresse</h4><br />
              <img src="./image/local.png" /><br /><br />
              <h3>13400 Aubagne</h3>
            </Col>

            <Col>
              <h4>Email</h4><br />
              <a href="mailto:christophe.navarro@epitech.eu"><img src="./image/contact.png" /></a><br /><br />
              <a classNameName="h3" id="email" href="mailto:christophe.navarro@epitech.eu">christophe.navarro@epitech.eu</a>
            </Col>
          </Row>
          
         
        </Container>
        <div className="footer-copyright text-center py-3 mt-5">
          © 2020 Copyright:
          Christophe Navarro
        <a href="https://www.linkedin.com/in/christophe-navarro-b5173a171/" className="fa fa-linkedin mr-3 ml-3"></a>
          <a href="https://github.com/Crinav" className="fa fa-github"></a>
        </div>
      </footer>

    )
  }
}