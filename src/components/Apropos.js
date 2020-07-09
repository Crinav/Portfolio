import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

export default class Apropos extends Component {
  render() {
    return (

      <section id="apropos" className="apropos">
        <div class="fixed-bg bg-1">
          <Row>
            <Col>
              <p className="accroche">
                <h1 class="ml5">
                  <span class="text-wrapper">
                    <span class="line line1"></span>
                    <span id="prenom" className="letters letters-left">Christophe</span>
                    <span class="letters ampersand">&nbsp;</span>
                    <span id="nom" className="letters letters-right">Navarro</span>
                    <span class="line line2"></span>
                  </span>
                </h1>
                <br />
                <h2 className="subtitle">Développeur Web FullStack</h2>
                <br />
                <br />
                <div className="text" >Cuisinier de formation, et féru/mordu/toqué/épris d'informatique depuis toujours, j'ai enfin décidé de vivre de ma passion et j'ai donc entamé une reconversion professionnellle.<br />
                </div><br/>
                <div class="ml2" >Je suis à la recherche d'un contrat de professionalisation d'un an à partir de septembre 2020.</div>
              </p>

            </Col>
            <Col>
              <img id="chris" className="mt-3 mb-5 chris rounded-circle" src="./image/chris2.jpg" alt="photo christophe navarro" />
            </Col>
          </Row>
        </div>
      </section>

    )
  }
}