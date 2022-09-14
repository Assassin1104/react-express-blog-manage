import React, { useState } from "react";
import { Button, Modal } from 'react-bootstrap'

import google from "../../assets/images/google.png"
import facebook from "../../assets/images/facebook.png"

export default function LoginGF() {

    const [showGoogle, setGoogleShow] = useState(false);
    const [showFacebook, setFacebookShow] = useState(false);

    const handleGoogleClose = () => setGoogleShow(false);
    const handleGoogleShow = () => setGoogleShow(true);

    const handleFacebookClose = () => setFacebookShow(false);
    const handleFacebookShow = () => setFacebookShow(true);
    
    return (
        <div className='loginGF'>
            <div className="register-form-gf-group button-group d-flex justify-content-center">
                <Button variant="light" className="register-form-gf-group-google" onClick={handleGoogleShow}>
                    <img src={google} alt="google_iamge" />
                </Button>
                <Button variant="light" className="register-form-gf-group-facebook" onClick={handleFacebookShow}>
                    <img src={facebook} alt="facebook_image" />
                </Button>
            </div>

            <Modal className="register-google-sign" show={showGoogle} onHide={handleGoogleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Google SignUp</Modal.Title>
                </Modal.Header>
                <Modal.Body>This is Google SignUp modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleGoogleClose}>
                        No
                    </Button>
                </Modal.Footer>
            </Modal>
            <Modal className="register-facebook-sign" show={showFacebook} onHide={handleFacebookClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Facebook SignUp</Modal.Title>
                </Modal.Header>
                <Modal.Body>This is Facebook modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleFacebookClose}>
                        No
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
