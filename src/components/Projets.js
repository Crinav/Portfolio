import React, { Component } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Row, Col, Container } from 'react-bootstrap';
AOS.init();

export default class Projets extends Component {
  render() {
    return (
      
        <section id="projets" classNameName="projets">
          
            <div className="fixed-bg bg-2">
              <h1 className="projets_title">Portfolio</h1>
              <div className='title pb-3'>Puissance 4<h1> langages : Javascript JQuery</h1></div>
              <div class="img-hover-zoom--colorize">
                <a href="https://github.com/Crinav/puissance4" target="_blank"><img className="vignette" src="./image/p4.jpg"/></a>
              </div>
                <div className='title pb-3'>Halloween Party<h1>langages : PHP Wordpress</h1></div>
                <div class="img-hover-zoom--colorize">
                <a href="https://github.com/Crinav/Wordpress-Halloween" target="_blank"><img className="vignette" src="./image/wordpress.jpg"/></a>
              </div>
                <div className='title pb-3'>My Snapchat<h1>langage : React-native</h1></div>
                <div class="img-hover-zoom--colorize">
                <a href="https://github.com/Crinav/My_snappi" target="_blank"><img className="vignette" src="./image/snappi.jpg"/></a>
              </div>
                <div className='title pb-3'>My Meetic<h1>langages : PHP MySQL</h1></div>
                <div class="img-hover-zoom--colorize">
                <a href="https://github.com/Crinav/my_Meetic" target="_blank"><img className="vignette" src="./image/meetic.jpg"/></a>
              </div>
                <div className='title pb-3'>My Quizz<h1>langages : PHP Symfony Twig MySQL</h1></div>
                <div class="img-hover-zoom--colorize">
                <a href="https://github.com/Crinav/my_quizz" target="_blank"><img className="vignette" src="./image/Quizz.jpg"/></a>
              </div>
                <div className='title pb-3'>My Tweeter<h1>langages : PHP MySQL</h1></div>
                <div class="img-hover-zoom--colorize">
                <a href="https://github.com/Crinav/Tweet_Academie" target="_blank"><img className="vignette" src="./image/tweet.jpg"/></a>
              </div>
                <div className='title pb-3'>My IRC<h1>langages : ReactJS ExpressJS socket.io</h1></div>
                <div class="img-hover-zoom--colorize last">
                <a href="https://github.com/Crinav/my_irc" target="_blank"><img className="vignette" src="./image/irc.jpg"/></a>
              </div>
            </div>
        </section>
        
      
    )
  }
}