import React, { useState } from "react"

import { Row, Col, Form, Button } from "react-bootstrap"
import { BiEnvelope } from "react-icons/bi"
import LoginGF from "./LoginGF"

import axios from "axios"

import logo from "../../assets/images/logo.svg"

import "../../assets/css/Global.css"
import "../../assets/css/Login.css"

export default function Register() {

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

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
        const registerInfo = {
            firstName: firstname,
            lastName: lastname,
            email: email,
            password: password
        };

        axios.post('http://localhost:5000/auth/register', registerInfo)
            .then((response) => {
                if (response.data.status === true) {
                    alert("successful register");
                    return;
                }
            }).catch((ex) => {
                alert(ex.response.data.message);
            }).finally(() => {
                setLoading(false);
            });
    }

    return (
        <div>
            <Row className="register">
                <Col sm={12} md={6} className="register-form d-flex align-items-center">
                    <Row>
                        <Col sm={12}>
                            <Form onSubmit={handleRegisterFormSubmit}>
                                <Row>
                                    <Form.Label className="register-form-login-title">
                                        Create an account
                                    </Form.Label>
                                    <Form.Label className="register-form-login-head">
                                        Already an account? <p>&nbsp;&nbsp;Login</p>
                                    </Form.Label>
                                    <Col md={6} sm={12} className="">
                                        <Form.Control placeholder="First name" className="y-form-control py-3" onChange={handleFirstNameChange} required />
                                    </Col>
                                    <Col md={6} sm={12} className="">
                                        <Form.Control placeholder="Last name" className="y-form-control py-3" onChange={handleLastNameChange} required />
                                    </Col>
                                    <Col sm={12} className="">
                                        <Form.Control placeholder="Email" className="y-form-control py-3" onChange={handleEmailChange} required />
                                    </Col>
                                    <Col sm={12} className="">
                                        <Form.Control placeholder="Password" type="password" className="y-form-control py-3" onChange={handlePasswordChange} required />
                                    </Col>
                                    <Col sm={12} className="mt-3">
                                        <Button variant="light" className="register-form-login-create primary-color py-3" type="submit">
                                            Create Your Account&nbsp;&nbsp;&nbsp;
                                            <BiEnvelope size={19} />
                                        </Button>
                                    </Col>
                                </Row>
                            </Form>
                        </Col>
                        <Col md={12}>
                            <div className="register-form-external-title mt-3">
                                or sign up with
                            </div>
                            <LoginGF />
                        </Col>
                    </Row>
                </Col>
                <Col sm={12} md={6} className="register-background">
                    <div className="register-opicity">
                        <img className="logo-register" src={logo} alt="logo_image" />
                    </div>
                </Col>
            </Row>
        </div>
    );
} 