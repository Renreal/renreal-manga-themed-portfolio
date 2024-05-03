import React, { useState } from 'react';
import './Sections.css';
import profile from './assets/me.png';
import profile2 from './assets/after.jpg';
function Sections({ aboutRef, contactRef, skillsRef, projectsRef }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
      <div className='wrapper'>
          <section ref={aboutRef} className="about-section">
            <div className="imageContainer"onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                <img src={isHovered ? profile2 : profile} alt="anime pic" /> 
            </div>
        
          <div className="aboutTextOuterContainer">
          <div className="aboutInnerContainer">
          I’m renreal, a 4th year computer engineering student and an aspiring software developer from Cagayan de Oro 
          </div>
          </div>
          </section>

          <section ref={skillsRef} className="skills-section">
            <h2>Skills</h2>
            <p>This is the skills section.</p>
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
