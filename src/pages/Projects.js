import React from 'react'
import {projectsData} from '../projectsData/Data';
import {FaEye} from 'react-icons/fa';
import {BsCodeSlash} from 'react-icons/bs';
// import img from '../assets/projects/twd.png';

const Projects = () => {
  return (
    <div id="projects">
         <h1 className="main_heading">PROJECTS</h1>
    <div className="sec_04">
        <div className="all_cards">
             {projectsData.map((item, id) => (
               <div className="card_container" data-aos="fade-up" data-aos-duration="3000"> 
                  <div key={id} className="card" style={{width: '18rem'}}>
                      <img className="card-img-top" src={item.img} alt={item.title} />
                      <div className='card_body'>
                         <ul className="card_icon">
                            <li className="eye"><a href={item.url} target="_blank" rel="noreferrer"><FaEye/></a></li>
                            <li className="eye"><a href={item.git} target="_blank" rel="noreferrer"><BsCodeSlash/></a></li>
                            {/* <li className="linkedin"><a href="https://www.linkedin.com/in/bhargava-devarakonda-8b5332232/" target="_blank" rel="noreferrer">< FaLinkedin/></a></li> */}
                         </ul>
                         <div>
                           <h3 className="project_name">{item.title}</h3>
                           <h5 className="project">{item.cause}</h5>
                         </div>
                       
                      </div>
                     
                  </div>
                </div> 
             ))}
          
        </div>
    </div>
    </div>
  )
}

export default Projects