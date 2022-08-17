import React, { useState, useEffect } from "react";
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";



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

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (username == "") {
            alert("Please input username.");
            return;
        }
        if (password == "") {
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
            <div className="login-panel">
                <form onSubmit={handleFormSubmit}>
                    <div className="form-group">
                        <label>Username</label>
                        <input onChange={handleUsernameChange} />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" onChange={handlePasswordChange} />
                    </div>
                    <div className="form-group">
                        <Button
                            variant="primary"
                            disabled={loading}
                            onClick={!loading ? handleFormSubmit : null}
                        >
                            {loading ? 'Loading…' : 'Login'}
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}