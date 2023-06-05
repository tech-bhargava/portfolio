import React from 'react'
import {projectsData} from '../projectsData/Data';
import {FaEye} from 'react-icons/fa';
// import img from '../assets/projects/twd.png';

const Projects = () => {
  return (
    <div id="projects">
         <h1 className="main_heading">PROJECTS</h1>
    <div className="container sec_04">
        <div className="row">
             {projectsData.map((item, id) => (
               <div className="col-12 col-sm-12 col-xl-3 col-lg-3 col-md-2" data-aos="fade-up" data-aos-duration="3000"> 
                  <div key={id} className="card col-m-auto" style={{width: '18rem'}}>
                      <img className="card-img-top" src={item.img} alt={item.title} />
                      <div className='card_body'>
                         <ul className="card_icon">
                            <li className="eye"><a href={item.url} target="_blank" rel="noreferrer"><FaEye/></a></li>
                            {/* <li className="linkedin"><a href="https://www.linkedin.com/in/bhargava-devarakonda-8b5332232/" target="_blank" rel="noreferrer">< FaLinkedin/></a></li> */}
                         </ul>
                         <h3 className="project_name">{item.title}</h3>
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