import React, { useEffect, useState } from 'react'
import {Link} from "react-scroll"
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';



//Assets


const Navbar = () => {
    const [y, setY] = useState(window.scrollY);

    useEffect(()=>{
        window.addEventListener("scroll", () => setY(window.scrollY));
        return () => {
            window.removeEventListener("scroll", () => setY(window.scrollY));
        }
    },[y])
  return (
    <>
    <div className="wrapper animate whiteBg" style={y > 110 ? { height: "95px" } : { height: "100px" }}>
            <nav className="nav_links">
               <Link to="home" smooth={true} duration={50}>
                <div className="logo_border_red"> 
                   <div className="logo_container">
                      <h1 className="parent_logo">D</h1>
                      <h2 className="child_logo">B</h2>
                  </div>
                </div>
                </Link>
                <div className="nav_items">
                <ul >
                    <li>
                        <Link
                            activeClass="active_item"
                           to="home"
                           spy={true}
                           smooth={true}
                           offset={-100}
                           duration={50}>
                            
                        HOME
                        </Link>
                    </li>
                    <li>
                        <Link
                            activeClass="active_item"
                           to="about"
                           spy={true}
                           smooth={true}
                           offset={-100}
                           duration={50}>
                        ABOUT
                        </Link>
                    </li>  
                     <li>
                        <Link
                           activeClass="active_item"
                           to="skills"
                           spy={true}
                           smooth={true}
                           offset={-100}
                           duration={50}>
                        SKILLS
                        </Link>
                    </li>  
                    <li>
                        <Link
                           activeClass="active_item"
                           to="projects"
                           spy={true}
                           smooth={true}
                           offset={-100}
                           duration={50}>
                       PROJECTS
                        </Link>
                    </li>  
                     <li className="last-child">
                        <Link
                           activeClass="active_item"
                           to="contact"
                           spy={true}
                           smooth={true}
                           offset={-100}
                           duration={50}>
                        CONTACT
                        </Link>
                    </li>
                </ul>
                </div>
            </nav>
    </div>
    </>
  )
}

export default Navbar