import React, { useState } from "react";
import { Row, Col, Form ,Button } from "react-bootstrap";
import { BiEnvelope } from "react-icons/bi";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import google from "../../assets/images/google.png";
import facebook from "../../assets/images/facebook.png";


export default function Register() {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleFirstNameChange = (e) => {
        setFirstname(e.target.value);
    }
    const handleLastNameChange = (e) => {
        setLastname(e.target.value);
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }
    const handleRegisterFormSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        if (form.checkValidity() === false) {  
            return;
        }
        console.log("Asdfasdfasdf");
    }
    return (
        <Row className="register">
            <Col sm={12} md={6} className="register-form d-flex align-items-center">
                <Row>
                    <Col sm={12}>
                        <Form onSubmit={handleRegisterFormSubmit}>
                            <Row>
                                <Form.Label className="login-title">Create an account</Form.Label>
                                <Form.Label>Already an account? Login</Form.Label>
                                <Col md={6} sm={12} className="pe-1 mt-3">
                                    <Form.Control placeholder="First name" className="py-3" onChange={handleFirstNameChange} required/>
                                </Col>
                                <Col md={6} sm={12} className="ps-1 mt-3">
                                    <Form.Control placeholder="Last name" className="py-3" onChange={handleLastNameChange} required/>
                                </Col>
                                <Col sm={12} className="mt-3">
                                    <Form.Control placeholder="email" className="py-3" onChange={handleEmailChange} required/>
                                </Col>
                                <Col sm={12} className="mt-3">
                                    <Form.Control placeholder="password" type="password" className="py-3" onChange={handlePasswordChange} required/>
                                </Col>
                                <Col sm={12} className="mt-3">
                                    <Button variant="light" className="primary-color py-3" type="submit"> Create Your Account&nbsp;&nbsp;&nbsp;<BiEnvelope size={19}/> </Button>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                    <Col sm={12}>
                        <div className="external-title mt-3">or sign up with</div>
                        <div className="button-group d-flex justify-content-center">
                            <Button variant="light" className="me-3"><img src={google}/></Button>
                            <Button variant="light" className="ms-3"><img src={facebook}/></Button>
                        </div>
                    </Col>
                </Row>
            </Col>
            <Col sm={12} md={6} className="register-background">
                <div className="register-opicity">
                    <img className="logo-register" src={logo}/>
                </div>
            </Col>
        </Row>
    );
} 