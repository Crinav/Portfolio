import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import Popup from "reactjs-popup";
import { FiUser, FiCode} from "react-icons/fi";
import { FaProjectDiagram, FaFileDownload} from "react-icons/fa";
import { MdContactMail} from "react-icons/md";


export default class Header extends Component {

    state = {
        toggle:false
    }
    Toggle = () => {
        this.setState({toggle:!this.state.toggle})
    }

    render() {

        const Card = ({ title }) => (
            <div className="card">
                <div className="header_card">{title}</div>

            </div>
        );

        return (            
            <header id="header">
                
                <Navbar fixed="top" className="header">
                <Nav className="nav" activeKey="/dl">
                    <Popup
                        trigger={
                            <Nav.Item className="nav_item ml-5 mr-5">
                                <Nav.Link href="#apropos">
                                <FiUser size={50} />
                                </Nav.Link>
                            </Nav.Item>
                        }
                        position="bottom center"
                        on="hover"
                    >
                        <Card title="A propos de moi..." />
                    </Popup>
                    <Popup
                        trigger={
                            <Nav.Item className="nav_item ml-5 mr-5">
                                <Nav.Link href="#competences">
                                <FiCode size={50} />
                                </Nav.Link>
                            </Nav.Item>
                        }
                        position="bottom center"
                        on="hover"
                    >
                        <Card title="Compétences" />
                    </Popup>
                    <Popup
                        trigger={
                            <Nav.Item className="nav_item ml-5 mr-5">
                                <Nav.Link href="#projets">
                                <FaProjectDiagram size={50} />

                                </Nav.Link>
                            </Nav.Item>
                        }
                        position="bottom center"
                        on="hover"
                    >
                        <Card title="Projets" />
                    </Popup>
                    <Popup
                        trigger={
                            <Nav.Item className="nav_item ml-5 mr-5">
                                <Nav.Link href="#contact">
                                    <MdContactMail size={50} />
                                </Nav.Link>
                            </Nav.Item>
                        }
                        position="bottom center"
                        on="hover"
                    >
                        <Card title="Contact" />
                    </Popup>
                    <Popup
                        trigger={
                            <Nav.Item className="nav_item ml-5 mr-5">
                                <Nav.Link href="./image/CV_Chris.pdf" download="">
                                <FaFileDownload size={50} />
                                </Nav.Link>
                            </Nav.Item>
                        }
                        position="bottom center"
                        on="hover"
                    >
                        <Card title="Télécharger mon Curriculum Vitae" />
                    </Popup>
                </Nav>
                </Navbar>
            </header >
        )
    }
}