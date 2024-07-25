import React from 'react'

import LandingPage from './components/LandingPage'
import Marquee from './components/marquee'
import About from './components/About'
import Rnavbar from './components/responsiveNavbar'
import Eyes from './components/Eyes'
import Features from './components/features'

import Cards from './components/cards'
import Footer from './components/footer'
import LocomotiveScroll from 'locomotive-scroll';




const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='w-full min-h-screen text-white bg-zinc-900 '>
      <Rnavbar/>
      <LandingPage/>
      <Marquee/>
      <About/>
      <Eyes />
      <Features/>
      <Cards/>
      <Footer/>

    </div>
  )
}

export default App
