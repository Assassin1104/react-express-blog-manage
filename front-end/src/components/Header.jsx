import React from "react"

import { Container, Navbar, Nav } from "react-bootstrap"
import { Button } from "react-bootstrap"

import logo from "../assets/images/logo.svg"
import cart from "../assets/images/cart.svg"
import PinkBlur from "../assets/images/pinkblur.png"

import "../assets/css/Header.css"

export default function Header() {

    return (
        <div className="header">
            <Navbar bg="white" variant="light" expand="lg">
                <Container>
                    <Navbar.Brand href="/">
                        <img className="header-logo" src={logo} alt="header-logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <img className="cart me-2" src={cart} alt="cartimage" />
                            <Nav.Link href="#expert" className="me-2">
                                <Button variant="danger" className="ybutton-fill" >
                                    Become a Local Expert
                                </Button>
                            </Nav.Link>
                            <Nav.Link href="/signin" className="me-2">
                                <Button variant="light" className="ybutton-text">
                                    Log In
                                </Button>
                            </Nav.Link>
                            <Nav.Link href="/signup" className="me-2">
                                <Button variant="danger" className="ybutton-fill">
                                    Sign Up
                                </Button>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <img src={PinkBlur} alt="PinkBlur"
                style={{
                    position: 'absolute',
                    left: '0px',
                    top: '0px',
                }}
            />
        </div>
    );
}