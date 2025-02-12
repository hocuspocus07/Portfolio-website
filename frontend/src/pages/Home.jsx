import React from 'react'
import NavComp from '../components/NavComp.jsx'
import Hero from '../components/Hero.jsx'
import MatrixBackground from '../components/MatrixBackground.jsx'
import Socials from '../components/Socials.jsx'
import Footer from '../components/Footer.jsx'
import AboutMe from '../components/AboutMe.jsx'

function Home() {
  return (
    <>
    <MatrixBackground/>
    <NavComp/>
    <Hero/>
    <AboutMe/>
    <Socials/>
    <Footer/>
    </>
  )
}

export default Home