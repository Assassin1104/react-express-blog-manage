import React from 'react'
import Header from '../../components/Header'
import Login from '../../components/auth/Login'

export default function SingIn() {
    return (
        <div>
            <Header title="Sign Up" signUrl="signup"/>
            <Login />
        </div>
    )
}
