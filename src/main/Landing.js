import React, { useEffect } from 'react'
import Navbar from '../navbar/Navbar'
import Header from '../pages/Header'
import About from '../pages/About'
import Skills from '../pages/Skills'
import Contact from '../pages/Contact'
// import Footer from '../pages/Footer'
import Projects from '../pages/Projects'
import AOS from 'aos';
import 'aos/dist/aos.css';




const Landing = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div>
       <Navbar/>
       <Header/>
       <About/>
       <Skills/>
       <Projects/>
       <Contact/>
       {/* <Footer/> */}
    </div>
  )
}

export default Landing
