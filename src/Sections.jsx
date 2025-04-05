import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import Certificates from "./sections/certificates.jsx";
import "./css/Sections.css";
import profile from "./assets/profiles/side-animated.png";
import profile2 from "./assets/profiles/side-1.png";
import TechStack from "./sections/Techstack.jsx";
import { IoLogoLinkedin, IoLogoGithub, IoIosMail } from "react-icons/io";
import { FaGoogleDrive } from "react-icons/fa";
import CatComponent from "./sections/CatComponent.jsx";
import PandaComponent from "./sections/PandaComponent.jsx";
function Sections({ aboutRef, contactRef, skillsRef, projectsRef }) {
  const [isHovered, setIsHovered] = useState(false);
  const [selectedNav, setSelectedNav] = useState("viewTools");

  const aboutInView = useInView(aboutRef, { threshold: 0.2 });
  const skillsInView = useInView(skillsRef, { threshold: 0.2 });
  const projectsInView = useInView(projectsRef, { threshold: 0.2 });
  const contactInView = useInView(contactRef, { threshold: 0.2 });

  return (
    <div className="wrapper" ref={aboutRef}>
      {/* About Section */}
      <motion.section
        className="about-section"
        initial={{ opacity: 0, x: -50 }}
        animate={aboutInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <div
          className="imageContainer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img src={isHovered ? profile2 : profile} alt="anime pic" />
        </div>

        <motion.div
          className="aboutTextOuterContainer"
          initial={{ opacity: 0, x: 50 }}
          animate={aboutInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <div className="aboutInnerContainer">
            <p>
              Hello, I’m Renreal! Computer Engineer | DevOps Engineer | Full
              Stack Web Developer (React-focused Enthusiast). I love building
              systems that solve real-world, day-to-day problems. I specialize
              in creating automation solutions. Right now, I’m working on expanding my network. If you
             , or someone you know, would like to connect, my inbox is always
              open! Whether it’s about a project opportunity or simply to say
              hi, feel free to reach out. Let’s connect!
            </p>
            <span>
              <div className="socials">
                <a
                  href="https://www.linkedin.com/in/renreal-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IoLogoLinkedin />
                </a>
                <a
                  href="https://github.com/Renreal"
                  target="blank"
                  rel="noopener noreferrer"
                >
                  <IoLogoGithub />
                </a>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=renrealmae09@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IoIosMail />
                </a>
              </div>
              <a
                className="resume-link"
                href="https://drive.google.com/file/d/1wA3MZJ4RZvRCmPvTvrDHMYfyrNPq138A/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGoogleDrive /> Click to View Resume
              </a>
            </span>
          </div>
        </motion.div>
      </motion.section>

      <div className="left-container">
        <CatComponent />
      </div>

      {/* Skills Section */}
      <motion.section
        ref={skillsRef}
        className="skills-section"
        initial={{ opacity: 0, y: 50 }}
        animate={skillsInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <Certificates />
      </motion.section>

      <TechStack />

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
