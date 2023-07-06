import React, { useEffect, useState } from 'react'
// import scroll from "react-scroll"
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';
import { Link } from 'react-scroll';
// import Sidebar from './Sidebar';
// import Backdrop from './Backdrop';
import {FiMenu} from 'react-icons/fi';
import {GrClose} from 'react-icons/gr';
// import {FaBars} from 'react-icons/fa';

//Assets


const Navbar = () => {
    const [y, setY] = useState(window.scrollY);
    // const [sidebarOpen, toggleSidebar] = useState(false);
    const [mobile, setMobile] = useState(false);
 
    // const handleClick = () =>  setMobile(!mobile); 
    
    useEffect(()=>{
        window.addEventListener("scroll", () => setY(window.scrollY));
        return () => {
            window.removeEventListener("scroll", () => setY(window.scrollY));
        }
    },[y])
  return (
    // <>
    //   <div className="container-fluid">
    //   <nav className="nav_links">
    //   <NavLink to="/" smooth={true} duration={50}>
    //            <div className="logo_border_red"> 
    //                  <div className="logo_container">
    //                     <h1 className="parent_logo">D</h1>
    //                     <h2 className="child_logo">B</h2>
    //                  </div>
    //                 </div>
    //     </NavLink>
    //   <ul  className={mobile? "mobile_nav_items mn_items" : "nav_items"} onClick={()=>setMobile(mobile)}>
    //    <li> 
    //      <NavLink 
    //     //    onClick={()=>{setMobile(false)}}
    //        className={({ isActive }) => (isActive ? 'active_item' : 'inactive')}
    //         to='/'
    //         spy={true}
    //         smooth={true}
    //         offset={-100}
    //         duration={50}>HOME
    //      </NavLink>
    //     </li>
    //     <li>
    //       <NavLink
    //         //  onClick={()=>{setMobile(false)}}
    //          className={({ isActive }) => (isActive ? 'active_item' : 'inactive')}
    //          to='/about'
    //          spy={true}
    //          smooth={true}
    //          offset={-100}
    //          duration={50}>ABOUT
    //       </NavLink>
    //     </li>
    //     <li>
    //        <NavLink
    //         //   onClick={()=>{setMobile(false)}}
    //          className={({ isActive }) => (isActive ? 'active_item' : 'inactive')}
    //          to='/skills'
    //          spy={true}
    //          smooth={true}
    //          offset={-100}
    //          duration={50}>SKILLS
    //       </NavLink>
    //     </li>
    //     <li>
    //        <NavLink
    //         //  onClick={()=>{setMobile(false)}}
    //          className={({ isActive }) => (isActive ? 'active_item' : 'inactive')}
    //          to='/projects'
    //         spy={true}
    //         smooth={true}
    //         offset={-100}
    //         duration={50}
    //        >PROJECTS
    //      </NavLink>
    //     </li>
    //     <li>
    //       <NavLink 
    //         // onClick={()=>{setMobile(false)}}
    //         className={({ isActive }) => (isActive ? 'active_item' : 'inactive')}
    //         to='/contact'
    //         spy={true}
    //         smooth={true}
    //         offset={-100}
    //         duration={50}>CONTACT
    //      </NavLink>
    //    </li>
    //  </ul>
    //      <button className="mobile_menu_icon" onClick={()=>{setMobile(true)}}>
    //               {mobile? <GrClose className="close"/> : <FiMenu className="menu"/>}
    //         </button>

    //   </nav>
        
    //   </div>
    // </>
    <>
      {/* <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      {sidebarOpen && <Backdrop toggleSidebar={toggleSidebar} />} */}
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
               
                <ul className={mobile? "mobile_nav_items mn_items" : "nav_items"}  onClick={()=>setMobile(!mobile)}>
                    <li>
                        <Link
                            onClick={()=>{setMobile(false)}}
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
                            onClick={()=>{setMobile(false)}}
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
                            onClick={()=>{setMobile(false)}}
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
                            onClick={()=>{setMobile(false)}}
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
                           onClick={()=>{setMobile(false)}}
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
                <button className="mobile_menu_icon" onClick={()=>{setMobile(!mobile)}}>
                    {mobile? <GrClose className="close"/> : <FiMenu className="menu"/>}
                </button>
            </nav>
    </div>
    </>
  )
}

export default Navbar