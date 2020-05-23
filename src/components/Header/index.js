import React, { Component } from "react";
import Navbar from 'react-bootstrap/Navbar';
import {Nav} from "react-bootstrap";



class Navibar extends Component{
    render(){
        return(
            <Navbar bg="dark" expand="lg" >
                <Navbar.Brand href="/" style = {{color:"white"}}>Jared Kong</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="navbar-nav ml-auto">
                        <Nav.Link href="/about" style = {{color:"white" }}>About</Nav.Link>
                        <Nav.Link to="/portfolio" href="portfolio" style = {{color:"white"}}>Portfolio</Nav.Link>
                        <Nav.Link href="/contact" style = {{color:"white"}}>Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}


export default Navibar;