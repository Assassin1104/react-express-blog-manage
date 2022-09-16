import React from 'react'

import Header from '../../components/Header'
import HMain1 from '../../components/portal/HMain1'

export default function Home() {
    return (
        <div className='home' >
            <Header title="Login" signUrl="signin"/>
            <HMain1 />
        </div>
    )
}
