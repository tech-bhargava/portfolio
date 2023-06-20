// import React, { useState } from 'react'
// import {Link} from "react-scroll"
// import {FiMenu} from 'react-icons/fi';
// import {GrClose} from 'react-icons/gr';


// const Sidebar = ({ sidebarOpen, toggleSidebar }) => {
//     const [mobile, setMobile] = useState(false);

//   return (
//     <div>sidebarOpen={sidebarOpen}
//         <div className="mobile_nav" >
//         <nav className="nav_links">
//                <Link to="home" smooth={true} duration={50}>
//                   <div className="logo_border_red"> 
//                     <div className="logo_container">
//                        <h1 className="parent_logo">D</h1>
//                        <h2 className="child_logo">B</h2>
//                     </div>
//                    </div>
//                 </Link>
               
//                 <ul className={mobile? "mobile_nav_items mn_items" : "nav_items"} onClick={()=>setMobile(false)}>
//                     <li>
//                         <Link
//                           onClick={() => toggleSidebar(!sidebarOpen)}
//                            activeClass="active_item"
//                            to="home"
//                            spy={true}
//                            smooth={true}
//                            offset={-100}
//                            duration={50}>
//                         HOME
//                         </Link>
//                     </li>
//                     <li>
//                         <Link
//                            onClick={() => toggleSidebar(!sidebarOpen)}
//                             activeClass="active_item"
//                            to="about"
//                            spy={true}
//                            smooth={true}
//                            offset={-100}
//                            duration={50}>
//                         ABOUT
//                         </Link>
//                     </li>  
//                      <li>
//                         <Link
//                         onClick={() => toggleSidebar(!sidebarOpen)}
//                            activeClass="active_item"
//                            to="skills"
//                            spy={true}
//                            smooth={true}
//                            offset={-100}
//                            duration={50}>
//                         SKILLS
//                         </Link>
//                     </li>  
//                     <li>
//                         <Link
//                         onClick={() => toggleSidebar(!sidebarOpen)}
//                            activeClass="active_item"
//                            to="projects"
//                            spy={true}
//                            smooth={true}
//                            offset={-100}
//                            duration={50}>
//                        PROJECTS
//                         </Link>
//                     </li>  
//                      <li className="last-child">
//                         <Link
//                         onClick={() => toggleSidebar(!sidebarOpen)}
//                            activeClass="active_item"
//                            to="contact"
//                            spy={true}
//                            smooth={true}
//                            offset={-100}
//                            duration={50}>
//                         CONTACT
//                         </Link>
//                     </li>
//                 </ul>
//                 <button className="mobile_menu_icon" onClick={()=>{setMobile(!mobile)}}>
//                     {mobile? <GrClose className="close" onClick={() => toggleSidebar(!sidebarOpen)}/> : <FiMenu className="menu"/>}
//                 </button>
//             </nav>
//         </div>
       
//     </div>
//   )
// }

// export default Sidebar