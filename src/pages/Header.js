import React from 'react'
import HeaderPic from '../assets/header_pic.jpg';
import { FaWhatsapp, FaLinkedin, FaGithub} from 'react-icons/fa';

const Home = () => {
   // const heading = "<I'm a Web Developer/>";

  return (
    <div className="sec_01" id="home">
       <div className="header_content">
           <h1>Hi👋<br/>I'm a <h1 className="ui_developer_text">UI Developer.</h1></h1>  
           <ul className="react_icons pl-0" data-aos="fade-right" data-aos-duration='3000'>
               <li className="whatsapp"><a href="https://wa.me/7207115374" target="_blank" rel="noreferrer"><FaWhatsapp/></a></li>
               <li className="linkedin"><a href="https://www.linkedin.com/in/bhargava-devarakonda-8b5332232/" target="_blank" rel="noreferrer">< FaLinkedin/></a></li>
               <li className="git"><a href="https://github.com/tech-bhargava" target="_blank" rel="noreferrer"><FaGithub/></a></li>
           </ul>
      </div> 
      <div className="header_pic_bg"  data-aos="fade-left" data-aos-duration="3000">
         <img className="header_pic" src={HeaderPic} alt="header_pic" loading="lazy"/>   
      </div>    
   </div>

  )
}

export default Home