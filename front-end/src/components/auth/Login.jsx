import React, { useState } from "react";

import { Col, Container, Form, Row, Button } from "react-bootstrap";

import { BiEnvelope } from "react-icons/bi";

import axios from 'axios';

import logo from "../../assets/images/logo.svg"

import LoginGF from "./LoginGF";

export default function LoginPage(props) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleRegisterFormSubmit = (e) => {
        e.preventDefault();

        if (username === "") {
            alert("Please input username.");
            return;
        }
        if (password === "") {
            alert("Please input password.");
            return;
        }

        setLoading(true);
        setTimeout(() => {
            const loginInfo = { email: username, password: password };
            axios.post('http://localhost:5000/auth/login', loginInfo)
                .then((response) => {
                    alert(response.data.message);
                }).catch((ex) => {
                    alert(ex.response.data.message);
                }).finally(() => {
                    setLoading(false);
                });
        }, 300);
    };

    return (
        <div>
            <Row className="register">
                <Col sm={12} md={6} className="register-form d-flex align-items-center">
                    <Row>
                        <Col sm={12}>
                            <Form onSubmit={handleRegisterFormSubmit}>
                                <Row>
                                    <Form.Label className="register-form-login-title">
                                        Log in to Ybalah Guide
                                    </Form.Label>
                                    <Form.Label className="register-form-login-head">
                                        No account yet? <p>&nbsp;&nbsp;Create an account</p>
                                    </Form.Label>
                                    <Col md={6} sm={12} className="">
                                        <Form.Control placeholder="Email" className="y-form-control py-3" onChange={handleUsernameChange} required />
                                    </Col>
                                    <Col md={6} sm={12} className="">
                                        <Form.Control placeholder="Password" className="y-form-control py-3" type="password" onChange={handlePasswordChange} required />
                                    </Col>
                                    <Col sm={12} className="mt-3">
                                        <Button  variant="light" className="register-form-login-create primary-color py-3" type="submit">
                                            Login with Eamil&nbsp;&nbsp;&nbsp;
                                            <BiEnvelope size={19} />
                                        </Button>
                                    </Col>
                                </Row>
                            </Form>
                        </Col>
                        <Col md={12}>
                            <Container>
                                <div className="register-form-external-title mt-3">
                                    or sign up with
                                </div>
                                <LoginGF />
                                <div className="register-form-external-end mt-3">
                                    <p>By signing in or creating an account, you agree with our Terms & Conditions and Privacy Statement</p>
                                </div>
                            </Container>
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