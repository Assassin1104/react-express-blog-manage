import React from 'react'
import Header from '../../components/Header'
import Register from '../../components/auth/Register'

export default function SignUp() {
    return (
        <div>
            <Header title="Sing In" signUrl="signin"/>
            <Register />
        </div>
    )
}
