import React from 'react'
import {default as aboutPic} from '../assets/aboutPic.jpg';
import {FaPhoneSquareAlt} from 'react-icons/fa';
import {MdEmail, MdDownloadForOffline } from 'react-icons/md';
import resume from '../assets/Latest1_Bhargav.D-UI+Developer-Resume.pdf';


const About = () => {
  return (
   <div id="about"> 
       <h1 className="main_heading">ABOUT</h1>   
    <div className="sec_02" data-aos='fade-up' data-aos-duration='3000'>
          <div className="about_pic_bg">
            <img className="about_pic" src={aboutPic} alt="pic" loading='lazy'/>
          </div>
           <div className="about_content"> 
              <h1>My name is <h1 className="about_name">Bhargava Devarakonda.</h1></h1>
              <p>I have 1+ years of experience in UI development. Currently, am working as a UI Developer in TWD(The Web Dev). It's located in Bhopal, Madhya Pradesh, India.</p>
                  <div className="about_buttons" data-aos='fade-up'  data-aos-duration='3000'>
                    <button className="resume_btn_bg"><a className="resume_button"
                        href={resume}
                        download="Bhargav.D-UI Developer-Resume.pdf">Resume <MdDownloadForOffline className="resume"/></a>
                    </button>
                   <button className="resume_btn_bg"><a className="resume_button"
                        href='tel:+917207115374'
                       >Phone <FaPhoneSquareAlt className='phone'/></a>
                  </button> 
                   <button className="resume_btn_bg"><a className="resume_button"
                       href='mailto:techbhargava@gmail.com'
                       >Email <MdEmail className='email'/></a>
                 </button>      
              </div>
           </div>
      </div>
   </div>
  )
}

export default About