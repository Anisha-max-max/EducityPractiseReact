import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Program from './Components/Programs/Program'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import VideoPlayer from './Components/VideoPlayer/VideoPlayer'



const App = () => {

  const [playState, setPlayState] = useState(false);

  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title SubTitle='Our PROGRAM' title='What We Offer'/>
        <Program/>
         <About setPlayState={setPlayState}></About>
         <Title SubTitle='Gallery' title='Campus Photos '/>
         <Campus/>
         <Title SubTitle='TESTIMONIALS' title='What Student Says '/>
         <Testimonials/>
         <Title SubTitle='Contact Us' title='Get in Touch '/>
         <Contact/>
         <Footer/>
         
      </div>
          <VideoPlayer playState={playState} setPlayState={setPlayState}></VideoPlayer>
    </div>
  )
}

export default App
