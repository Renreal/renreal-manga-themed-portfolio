import React, { useState } from 'react';
import { motion } from "framer-motion";
import { useInView } from "framer-motion"; // 👈 Import useInView
import Test from './Test.jsx';
import './css/Sections.css';
import profile from './assets/me.png';
import profile2 from './assets/after.jpg';
import reactIcon from './assets/icons/rjs.svg';

function Sections({ aboutRef, contactRef, skillsRef, projectsRef }) {
  const [isHovered, setIsHovered] = useState(false);
  const [selectedNav, setSelectedNav] = useState('viewTools'); 
  
  const aboutInView = useInView(aboutRef, { threshold: 0.2 });
  const skillsInView = useInView(skillsRef, { threshold: 0.2 });
  const projectsInView = useInView(projectsRef, { threshold: 0.2 });
  const contactInView = useInView(contactRef, { threshold: 0.2 });

  return (
    <div className='wrapper'  ref={aboutRef}>

      {/* About Section */}
      <motion.section
        className="about-section"
        initial={{ opacity: 0, x: -50 }}
        animate={aboutInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <div className="imageContainer">
          <img src={isHovered ? profile2 : profile} alt="anime pic" /> 
        </div>
        
        
        <motion.div className="aboutTextOuterContainer"
        initial={{ opacity: 0, x: 50 }}
        animate={aboutInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1 }}
        >
          <div className="aboutInnerContainer">
            <p>Hi! I'm Renreal, a developer with experience in DevOps engineering and a degree in computer engineering. I'm currently diving into front-end development and enjoy building and automating software solutions. Let's connect!</p> 
            <span>
              <a href="https://drive.google.com/file/d/1wA3MZJ4RZvRCmPvTvrDHMYfyrNPq138A/view?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer">
                Click to View Resume
              </a>
            </span>
          </div>
        </motion.div>


      </motion.section>

      {/* Skills Section */}
      <motion.section
        ref={skillsRef}
        className="skills-section"
        initial={{ opacity: 0, y: 50 }}
        animate={skillsInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <div className='skillsNav'>
          <div className="description">Skills and Credentials</div>
        </div>
        <Test/>    

        <div className='skillsContainer'>
          <div className="skillsIcon">
            <div className='titleContainer'>
              <img src={reactIcon} alt="" />
              React
            </div> 
            <div className='titleContainer'>
              <img src={reactIcon} alt="" />
              React
            </div>
          </div>  
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        ref={projectsRef}
        className="projects-section"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={projectsInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h2>Projects</h2>
        <p>This is the projects section.</p>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        ref={contactRef}
        className="contact-section"
        initial={{ opacity: 0, y: 50 }}
        animate={contactInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h2>Contact</h2>
        <p>This is the contact section.</p>
      </motion.section>
    </div>
  );
}

export default Sections;
