import React, { useEffect } from 'react'
// import Footer from '../pages/Footer'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from '../navbar/Navbar'
import Header from '../pages/Header'
import About from '../pages/About'
import Skills from '../pages/Skills'
import Projects from '../pages/Projects'
import Contact from '../pages/Contact'


const Landing = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div>
       
       <BrowserRouter>
             <Navbar/>
         <Routes>
             <Route path='/' element={<Header/>}></Route>
             <Route path='/about' element={<About/>}></Route>
             <Route path='/skills' element={<Skills/>}></Route>
             <Route path='/projects' element={<Projects/>}></Route>
             <Route path='/contact' element={<Contact/>}></Route>
         </Routes>
       </BrowserRouter>
       {/* <Footer/> */}
    </div>
  )
}

export default Landing
