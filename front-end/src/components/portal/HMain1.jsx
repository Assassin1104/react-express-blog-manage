import React from 'react'
import { Button, Container } from 'react-bootstrap'

import '../../assets/css/Home.css'

import HMain1TripsImage from "../../assets/images/trips.png"
import HMain1PersonImage from "../../assets/images/person.png"

export default function HMain1() {

    function onPersonClick () {
        
    }

    return (
        <div className='home-main1'>
            <Container>
                <p className='home-main1-title1'>Ybalah Customer!</p>
                <p className='home-main1-title2'>Welcome back to your Hi,hi Guide account</p>
                <Button className='home-main1-details' onClick={onPersonClick}>
                    <img src={HMain1PersonImage} alt='personal details'></img>
                    <div>
                        <p>Personal details</p>
                        <p>Manage your Hi,hi Guide account</p>
                    </div>
                </Button>

                <Button className='home-main1-details'>
                    <img src={HMain1TripsImage} alt='Trips'></img>
                    <div>
                        <p>Trips</p>
                        <p>See your trip details</p>
                    </div>
                </Button>
            </Container>
        </div>
    )
}
