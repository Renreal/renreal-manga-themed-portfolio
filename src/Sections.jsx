import React, { useState } from 'react';
import Test from './Test.jsx';
import './css/Sections.css';
import profile from './assets/me.png';
import profile2 from './assets/after.jpg';
import vercelIcon from './assets/icons/vercel.svg';
import databaseIcon from './assets/icons/server.png'; 
import fbaseIcon from './assets/icons/fbase.svg';
import HtmlIcon from './assets/icons/html.svg'
import cssIcon from './assets/icons/css-icon.png'
import bootstrapIcon from './assets/icons/bootstrap.svg'
import reactIcon from './assets/icons/rjs.svg';
import GitIcon from './assets/icons/git.svg';
import githubIcon from './assets/icons/github.svg';
import chartJsIcon from './assets/icons/chartjs.svg';
import jsIcon from './assets/icons/javascipt.svg';
import vsCodeIcon from './assets/icons/vs-code.svg';

function Sections({ aboutRef, contactRef, skillsRef, projectsRef }) {
  const [isHovered, setIsHovered] = useState(false);
  const [selectedNav, setSelectedNav] = useState('viewTools'); 
  const [displaySkills, setDisplaySkills] = useState(true);
  
  const toggleDisplay = (selectedTab) => {
    if ((selectedTab === 'viewTools' && !displaySkills) || (selectedTab === 'viewCertificate' && displaySkills)) {
      setDisplaySkills(prevDisplaySkills => !prevDisplaySkills);
    }
    setSelectedNav(selectedTab); // Set selected nav item
  };

  return (
    <div className='wrapper'>
      <section ref={aboutRef} className="about-section">
        <div className="imageContainer"
       // onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}
        >
          <img src={isHovered ? profile2 : profile} alt="anime pic" /> 
        </div>
        <div className="aboutTextOuterContainer">
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
        </div>
      </section>

      <section ref={skillsRef} className="skills-section">
        <div className='skillsNav'>
        <div className="description">
             Skills and Credentials
              </div>
        </div>
        <Test/>    

          <div className='skillsContainer'>
            <div className="skillsIcon">
              <div className='titleContainer'>
                <img src={reactIcon} alt="" />
                React
                </div>
                
                <img src={HtmlIcon} alt="" />
                <img src={cssIcon} alt="css" />
                <img src={bootstrapIcon} alt="bootsrap" />
                <img src={jsIcon} alt="" />
                <img src={databaseIcon} alt="" />
                <img src={fbaseIcon} alt="" />
                <img src={vercelIcon} alt="" />
                <img src={githubIcon} alt="" />
                <img src={GitIcon} alt="" />
                <img src={vsCodeIcon} alt="" />
                <img src={chartJsIcon} alt="" />
               </div>  
          </div>
      </section>
      
      

      <section ref={projectsRef} className="projects-section">
        <h2>Projects</h2>
        <p>This is the projects section.</p>
      </section>

      <section ref={contactRef} className="contact-section">
        <h2>Contact</h2>
        <p>This is the contact section.</p>
      </section>
    </div>
  );
}

export default Sections;
