import React from "react";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Navbar, Nav } from "react-bootstrap";
import logo from "../../assets/images/logo.svg";
import "../../assets/css/main.css";
import { Button } from "react-bootstrap";
import cart from '../../assets/images/cart.svg';

export default function Header() {
    return(
        <div className="header">
            <Navbar bg="white" variant="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home"><img className="logo" src={logo}/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <img className="cart me-2" src={cart} />
                            <Nav.Link href="#home" className="me-2"><Button variant="danger" className="primary-background navbar-font">Become a Local Expert</Button></Nav.Link>
                            <Nav.Link href="/login" className="me-2 primary-color">Login</Nav.Link>
                            <Nav.Link href="#pricing" className="me-2"><Button variant="danger" className="primary-background navbar-font">Sign Up</Button></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}