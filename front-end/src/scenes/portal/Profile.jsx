import React from 'react'
import Header from '../../components/Header'
import PMAIN2 from '../../components/portal/PMAIN2'

export default function Profile() {
    return (
        <div className='portal-profile'>
            <Header title="Login" signUrl="signin" />
            <PMAIN2 />
        </div>
    )
}
