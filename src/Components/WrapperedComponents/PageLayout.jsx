import React from 'react'
import NavBar from '../SpecifiedComponents/NavBar'
import Hero from '../SpecifiedComponents/Hero'
import Service from '../SpecifiedComponents/Service'
import AboutUs from '../SpecifiedComponents/AboutUs'
import FAQ from '../SpecifiedComponents/FAQ'
import Contact from '../SpecifiedComponents/Contact'
import Footer from '../SpecifiedComponents/Footer'

const PageLayout = () => {
  return (
    <>
    <NavBar/>
    <Hero/> 
    <Service/>
    <AboutUs/>
    <FAQ/>
    <Contact />
    <Footer />
    </>
  )
}

export default PageLayout