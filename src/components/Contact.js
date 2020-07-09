import React, { Component } from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import axios from 'axios';

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
  onTextChange = (e) => {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
    
  };


  onFormSubmit = async (e) => {
    e.preventDefault();
    let { nom, prenom, email,message, entreprise } = this.state;
    
    
      axios({
        method: 'post',
        url: 'http://localhost:4242/email',
        data:{nom, prenom, email,message, entreprise},
        headers: {'Content-Type': 'text/plain' }
      })       
        .then(function(response) {
            //handle success
            console.log(response);
        })
        .catch(function(response) {
            //handle error
            console.log(response);
        });
     
      
    // ).then(
    //   message => alert(message)
    // );
    // } else {
    // }
    this.setState( {
      prenom:'',
      nom: '',
      email: '',
      entreprise:'',
      message:''
    });
  
  };

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

            <Col sm="auto">
              <h4>Email</h4><br />
              <a href="mailto:christophe.navarro@epitech.eu"><img src="./image/contact.png" /></a><br /><br />
              <a classNameName="h3" id="email" href="mailto:christophe.navarro@epitech.eu">christophe.navarro@epitech.eu</a>
            </Col>
          </Row>
          <Row>
          <div className="container contact-form">
            <div className="contact-image">
                <img src="https://image.ibb.co/kUagtU/rocket_contact.png" alt="rocket_contact"/>
            </div>
            <form method="post" onSubmit={this.onFormSubmit} >
                <h3>Laissez moi un Message</h3>
               <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <input type="text" name="prenom" className="form-control" placeholder="Votre prénom" value={this.state.prenom} onChange={(e) => this.onTextChange(e)} />
                        </div>
                        <div className="form-group">
                        <div class="form-group">
                            <input type="text" name="nom" class="form-control" placeholder="Votre nom" value={this.state.nom} onChange={(e) => this.onTextChange(e)}/>
                        </div>
                            <input type="text" name="email" className="form-control" placeholder="Votre Email" value={this.state.email} onChange={(e) => this.onTextChange(e)}/>
                        </div>
                        <div className="form-group">
                            <input type="text" name="entreprise" className="form-control" placeholder="Votre entreprise" value={this.state.entreprise} onChange={(e) => this.onTextChange(e)}/>
                        </div>
                        <div className="form-group">
                            <input type="submit" name="btnSubmit" className="btnContact"/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <textarea name="message" className="form-control" value={this.state.message} onChange={(e) => this.onTextChange(e)}></textarea>
                        </div>
                    </div>
                </div>
            </form>
</div>
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