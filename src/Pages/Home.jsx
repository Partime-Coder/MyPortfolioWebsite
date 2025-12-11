import React from 'react'
import FullScreen from '../Components/FullScreen'
import Container from '../Components/Container'
import HeroSection from '../Components/HeroSection'
import Header from '../Components/Header'


function Home() {
    return (
        <FullScreen className='backgroundColor'>
                <Header/>
            <Container className='h-full'>
                <HeroSection/>
            </Container>
        </FullScreen>
    )
}

export default Home