import React from 'react'
import NavBar from '../SpecifiedComponents/NavBar'
import Hero from '../SpecifiedComponents/Hero'
import Service from '../SpecifiedComponents/Service'
import AboutUs from '../SpecifiedComponents/AboutUs'
import Contact from '../SpecifiedComponents/Contact'
import Footer from '../SpecifiedComponents/Footer'
import Products from '../SpecifiedComponents/Products'
import QuotePopup from '../SpecifiedComponents/QuotePopup'

const PageLayout = () => {
  return (
    <>
    <NavBar/>
    <Hero/> 
    {/* <Products/> */}
    <Service/>
    <Contact />
     <AboutUs/>
    <Footer />
    <QuotePopup/>
    </>
  )
}

export default PageLayout