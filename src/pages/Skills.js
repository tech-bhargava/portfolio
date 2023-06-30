import React from 'react'
import Marquee from "react-fast-marquee";
import { skillsData } from '../skillsData/Data';
import { skillsImage } from '../utils/skillsImage'



const Skills = () => {

  return (
    <>
    <div className="sec_03" id="skills" ref={Skills}>
    <h1 className="main_heading">SKILLS</h1>
      <div className="skillsContainer"  data-aos="fade-left" data-aos-duration="3000">
                <div className="skill_scroll">
                    <Marquee 
                        gradient={false} 
                        speed={80} 
                        pauseOnHover={true}
                        pauseOnClick={true} 
                        delay={0}
                        play={true} 
                        direction="left"
                    >
                        {skillsData.map((skill, id) => (
                            <div className="skill_box" key={id}>
                                <img src={skillsImage(skill)} alt={skill} />
                                <h3>
                                    {skill}
                                </h3>
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>
    </div>
    </>
  )
}

export default Skills